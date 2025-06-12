import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
import axios from "axios";
import { BACKEND_URL } from '../config';
import { useNavigate } from "react-router-dom";


export const Blogs = () => {
    const { loading, blogs, setBlogs } = useBlogs();
    const navigate = useNavigate();

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate("/blogs")
            setBlogs(blogs.filter(blog => blog.id !== id));
        } catch (error) {
            console.error('Failed to delete blog post:', error);
        }
    };

    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center max-w-full">
                    <div className="flex justify-center max-w-full flex-col size-full">
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    {blogs.map(blog => {
                        const formattedDate = blog.createdAt
                            ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })
                            : 'March 8 2024';

                        return (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                authorName={blog.author.name || "Anonymous"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={formattedDate}
                                onDelete={handleDelete}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

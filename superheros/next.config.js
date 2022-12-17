/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URL:"mongodb+srv://ayush:3IQQSODwFEc0hdYL@cluster0.mjmg9go.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
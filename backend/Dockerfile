# 1. Base image
FROM node:22

# 2. Thư mục làm việc trong container
WORKDIR /app

# 3. Copy package.json trước
COPY package*.json ./

# 4. Cài thư viện
RUN npm install

# 5. Copy source code
COPY . .

# 6. Expose port
EXPOSE 3000

# 7. Lệnh chạy server
CMD ["node", "index.js"]

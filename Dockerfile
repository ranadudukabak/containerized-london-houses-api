# Base image
FROM node:14

# Uygulama klasörünü oluştur
WORKDIR /app

# Gerekli dosyaları kopyala
COPY package*.json /app/

# Gerekli modülleri yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . /app/

# Uygulama portu
EXPOSE 3001

# Uygulamayı çalıştır
CMD ["npm", "start"]

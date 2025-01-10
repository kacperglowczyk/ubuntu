db = db.getSiblingDB('myapp');

if (db.messages.countDocuments() === 0) {
    db.messages.insertOne({
        text: "Hello from MongoDB!"
    });
    print('Initialized database with message');
} 
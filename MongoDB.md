# MongoDB Interview Questions (7+ Years Experience)

## 1. What is MongoDB, and why is it used in microservices?
MongoDB is a NoSQL, document-based database designed for scalability & flexibility.  
Used in microservices because:
- Schema-less JSON storage matches domain models  
- Fast reads & writes  
- Horizontal scaling via sharding  
- Flexible schema evolution  

## 2. Explain MongoDB document structure. How is it stored internally?
Documents are stored as **BSON** (Binary JSON).  
Supports additional types like dates, decimals. Enables fast traversal and compact storage.

## 3. Difference between MongoDB and relational databases
- Schema-less vs fixed schema  
- No joins (lookup available)  
- Horizontal scaling  
- Denormalization common  
- Flexible schema evolution  

## 4. What is an index? Why important?
Indexes speed up queries by avoiding full collection scans.  
Types: Single field, compound, multikey, text, TTL, sparse, partial.  
Avoid over-indexing → slows writes.

## 5. Compound index and prefix rule
Index `{ a: 1, b: 1, c: 1 }` supports queries using:
- a  
- a, b  
- a, b, c  
Does NOT support: b alone, c alone, b+c.

## 6. What is aggregation pipeline?
A series of data processing stages: $match, $group, $sort, $project, $lookup, $unwind.  
Place `$match` early for performance.

## 7. How do transactions work?
MongoDB supports multi-document ACID transactions.  
Useful for financial ops, but slower than normal writes.

## 8. What are replica sets?
A group of mongod instances:  
- Primary  
- Secondary  
- Arbiter  
Provides HA with automatic failover.

## 9. How does election work?
If primary fails, secondaries elect a new primary via majority vote.

## 10. What is sharding?
Horizontal partitioning of data across shards.  
Used for scaling large datasets and high traffic.

## 11. How to choose a shard key?
Good shard key:
- High cardinality  
- Even distribution  
- Matches query patterns  

## 12. CAP theorem in MongoDB
MongoDB is **CP** by default. Reads from secondaries → eventual consistency.

## 13. updateOne vs updateMany vs replaceOne
- updateOne: modify first matching  
- updateMany: modify all  
- replaceOne: replace entire document  

## 14. Concurrency handling
Uses **document-level locking** for high write throughput.

## 15. Write concern
Controls write acknowledgment:
- w:0 → no wait  
- w:1 → primary  
- w:majority → safest  

## 16. Read preference
Determines where reads go:
- primary  
- secondary  
- nearest  
Use secondary for analytics.

## 17. TTL Indexes
Auto-delete documents after expiration.
Example:
```js
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
```

## 18. Schema design patterns
- Extended Reference  
- Bucket pattern  
- Outlier  
- Subset  
- Tree pattern  

## 19. Embed vs reference
Embed when data is bounded & accessed together.  
Reference when data grows unlimited or requires independent lifecycle.

## 20. Causes of slow queries
- Missing indexes  
- Wrong index order  
- Regex without prefix  
- Too many lookups  
- Sorting without index  
- Poor schema design  

## 21. How to analyze slow queries?
Use:
```js
db.collection.explain("executionStats")
```

## 22. What is MongoDB Atlas?
Fully managed DB with:  
auto-scaling, metrics, backups, serverless.

## 23. How does ObjectId work?
12-byte value:
- 4-byte timestamp  
- 5-byte random  
- 3-byte counter  

## 24. $lookup performance tips
- Index join fields  
- Avoid deep nested lookups  
- Prefer pipeline lookup  

## 25. Covered queries
Query fulfilled entirely by index → no document fetch → fastest possible.

## 26. db.currentOp()
Shows running DB operations. Useful for debugging slow or blocked queries.

## 27. What is oplog?
Operational log used by secondaries to replicate changes.

## 28. Chunk splitting & migration
Sharded clusters split large chunks and migrate them to balance load.

## 29. Backup & restore
- mongodump / mongorestore  
- Atlas backups  
- Filesystem snapshots  

## 30. Change streams
Real-time event stream for DB changes.  
Useful for event-driven systems, cache sync.

## 31. Preventing write conflicts
- Optimistic concurrency (version field)  
- Transactions  
- Rely on document-level locking  

## 32. Scaling MongoDB for millions of requests
- Sharding  
- Proper indexes  
- Redis cache  
- Avoid $lookup in hot paths  
- Small documents (<16MB)  
- Connection pooling  

## 33. Optimizing write performance
- Bulk writes  
- Lower write concern  
- Avoid large indexes  
- Batch inserts  

## 34. Detecting memory leaks
- Monitor connection pool  
- Avoid large aggregations in memory  
- Use cursors  

## 35. Max document size
16MB.  
Designed for performance + locality.

---

Feel free to contribute corrections or add advanced tuning examples.

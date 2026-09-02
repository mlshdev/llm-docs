> Release-pinned source for Bun bun-v1.4.0: [docs/guides/ecosystem/upstash.mdx](https://bun.com/docs/guides/ecosystem/upstash)

# Bun Redis with Upstash

[Upstash](https://upstash.com/) is a fully managed Redis database as a service. It works with the Redis® API, so you can connect with Bun's native Redis client.

> **Note**
>
> TLS is enabled by default for all Upstash Redis databases.

***

1. Create a new project with `bun init`:

   ```sh terminal icon="terminal"
   bun init bun-upstash-redis
   cd bun-upstash-redis
   ```
2. Go to the [Upstash dashboard](https://console.upstash.com/) and create a new Redis database. After completing the [getting started guide](https://upstash.com/docs/redis/overall/getstarted), you'll see your database page with connection information.

   The database page displays two connection methods: HTTP and TLS. For Bun's Redis client, you need the **TLS** connection details; the URL starts with `rediss://`.

   ![Upstash Redis database page](https://raw.githubusercontent.com/oven-sh/bun/34cbb9a40b4bd1bd767d134a7065e66c2432a676/docs/images/guides/upstash-1.png)
3. Set the `REDIS_URL` environment variable in your `.env` file using the Redis endpoint (not the REST URL):

   ```ini .env icon="settings"
   REDIS_URL=rediss://********@********.upstash.io:6379
   ```

   Bun's Redis client reads connection information from `REDIS_URL` by default:

   ```ts index.ts icon="/icons/typescript.svg"
   import { redis } from "bun";

   // Reads from process.env.REDIS_URL automatically
   await redis.set("counter", "0"); // [!code ++]
   ```

   Alternatively, create a custom client with `RedisClient`:

   ```ts index.ts icon="/icons/typescript.svg"
   import { RedisClient } from "bun";

   const redis = new RedisClient(process.env.REDIS_URL); // [!code ++]
   ```
4. Use the Redis client to read and write keys in your Upstash database:

   ```ts index.ts icon="/icons/typescript.svg"
   import { redis } from "bun";

   // Get a value
   let counter = await redis.get("counter");

   // Set a value if it doesn't exist
   if (!counter) {
   	await redis.set("counter", "0");
   }

   // Increment the counter
   await redis.incr("counter");

   // Get the updated value
   counter = await redis.get("counter");
   console.log(counter);
   ```

   ```txt
   1
   ```

   The Redis client handles connections automatically. You don't need to connect or disconnect manually for basic operations.

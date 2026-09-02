> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/sdk-examples/introduction.mdx](https://zitadel.com/docs/sdk-examples/introduction)

You can integrate Zitadel quickly into your application and be up and running within minutes.
To achieve your goals as fast as possible, we provide you with SDKs, Example Repositories and Guides.

The SDKs and integration depend on the framework and language you are using.

> **Note**
>
> In addition to our officially maintained examples, we also list community-contributed implementations.
> These examples are provided by external developers and are not maintained by us.
> While we believe they can be valuable resources and showcase diverse approaches, we cannot guarantee their completeness, functionality, or continued support.
> If you encounter issues with a community-contributed example, please contact the respective maintainers directly.
> We provide this list for informational purposes and to foster community engagement, but we do not assume responsibility for these external implementations.

## Management Clients

Automate and manage your ZITADEL instance programmatically. These clients are built for Machine-to-Machine (M2M) communication, allowing your backend services to perform administrative tasks without human intervention.

## ZITADEL SDKs

ZITADEL SDKs are purpose-built to provide a deep, idiomatic integration into your specific framework.
While standard OIDC libraries handle basic authentication, Zitadel SDKs act as a powerful abstraction layer, streamlining complex identity tasks and providing direct access to the ZITADEL core platform.

## OIDC Libraries

OIDC is a standard for authentication and most languages and frameworks do provide a OIDC library which can be easily integrated to your application.
If we do not provide a specific example, SDK or guide, we strongly recommend using existing authentication libraries for your
language or framework instead of building your own.
Certified libraries have undergone rigorous testing and validation to ensure high security and reliability.
There are many recommended libraries available, this saves time and ensures that users' data is well-protected.

| Framework  | Recommended OIDC Library                                                 | Example Documentation Link                                              |
| ---------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Angular    | [@edgeflare/ngx-oidc](https://www.npmjs.com/package/@edgeflare/ngx-oidc) | [Integration Example](https://zitadel.com/docs/sdk-examples/angular)    |
| Astro      | [@auth/core](https://www.npmjs.com/package/@auth/core)                   | [Integration Example](https://zitadel.com/docs/sdk-examples/astro)      |
| Django     | [Authlib](https://authlib.org)                                           | [Integration Example](https://zitadel.com/docs/sdk-examples/django)     |
| Express.js | [@auth/express](https://www.npmjs.com/package/@auth/express)             | [Integration Example](https://zitadel.com/docs/sdk-examples/expressjs)  |
| FastAPI    | [Authlib](https://authlib.org)                                           | [Integration Example](https://zitadel.com/docs/sdk-examples/fastapi)    |
| Fastify    | [@auth/core](https://www.npmjs.com/package/@auth/core)                   | [Integration Example](https://zitadel.com/docs/sdk-examples/fastify)    |
| Flask      | [Authlib](https://authlib.org)                                           | [Integration Example](https://zitadel.com/docs/sdk-examples/flask)      |
| Hono       | [Auth.js](https://authjs.dev)                                            | [Integration Example](https://zitadel.com/docs/sdk-examples/hono)       |
| Laravel    | [Laravel Socialite](https://laravel.com/docs/socialite)                  | [Integration Example](https://zitadel.com/docs/sdk-examples/laravel)    |
| Nest.js    | [@auth/core](https://www.npmjs.com/package/@auth/core)                   | [Integration Example](https://zitadel.com/docs/sdk-examples/nestjs)     |
| Next.js    | [next-auth](https://next-auth.js.org)                                    | [Integration Example](https://zitadel.com/docs/sdk-examples/nextjs)     |
| Nuxt.js    | [next-auth](https://next-auth.js.org)                                    | [Integration Example](https://zitadel.com/docs/sdk-examples/nuxtjs)     |
| Qwik       | [@auth/core](https://www.npmjs.com/package/@auth/core)                   | [Integration Example](https://zitadel.com/docs/sdk-examples/qwik)       |
| SolidStart | [@auth/solid-start](https://www.npmjs.com/package/@auth/solid-start)     | [Integration Example](https://zitadel.com/docs/sdk-examples/solidstart) |
| Svelte     | [@auth/sveltekit](https://www.npmjs.com/package/@auth/sveltekit)         | [Integration Example](https://zitadel.com/docs/sdk-examples/svelte)     |
| Symfony    | [Symfony Security](https://symfony.com/doc/current/security.html)        | [Integration Example](https://zitadel.com/docs/sdk-examples/symfony)    |

You might want to check out the following links to find another good library:

- [awesome-auth](https://github.com/casbin/awesome-auth)
- [OpenID General References](https://openid.net/developers/libraries/)
- [OpenID certified developer tools](https://openid.net/certified-open-id-developer-tools/)

## Example Applications

- [B2B customer portal](https://github.com/zitadel/zitadel-nextjs-b2b): Showcase the use of personal access tokens in a B2B environment. Uses Next.js Framework.
- [Introspection](https://github.com/zitadel/examples-api-access-and-token-introspection): Python examples for securing an API and invoking it as a service account
- [Fine-grained authorization](https://github.com/zitadel/example-fine-grained-authorization): Leverage actions, custom metadata, and claims for attribute-based access control

Search for the "example" tag in our repository to [explore all examples](https://github.com/search?q=topic%3Aexamples+org%3Azitadel\&type=repositories).

## Missing Management Client

Is your language/framework missing? Fear not, you can generate your gRPC API Client with ease.

1. Make sure to install [buf](https://buf.build/docs/installation/)
2. Create a `buf.gen.yaml` and configure the [plugins](https://buf.build/plugins) you need
3. Run `buf generate https://github.com/zitadel/zitadel#format=git,tag=v2.23.1` (change the versions to your needs)

Let us make an example with Ruby. Any other supported language by buf will work as well. Consult
the [buf plugin registry](https://buf.build/plugins) for more ideas.

### Example with Ruby

With gRPC, we usually need to generate the client stub and the messages/types. This is why we need two plugins.
The plugin `grpc/ruby` generates the client stub and the plugin `protocolbuffers/ruby` takes care of the messages/types.

```yaml
version: v1
plugins:
  - plugin: buf.build/grpc/ruby
    out: gen
  - plugin: buf.build/protocolbuffers/ruby
    out: gen
```

If you now run `buf generate https://github.com/zitadel/zitadel#format=git,tag=v2.23.1` in the folder where
your `buf.gen.yaml` is located you should see the folder `gen` appear.

If you run `ls -la gen/zitadel/` you should see something like this:

```bash
ffo@ffo-pc:~/git/zitadel/ruby$ ls -la gen/zitadel/
total 704
drwxr-xr-x 2 ffo ffo   4096 Apr 11 16:49 .
drwxr-xr-x 3 ffo ffo   4096 Apr 11 16:49 ..
-rw-r--r-- 1 ffo ffo   4397 Apr 11 16:49 action_pb.rb
-rw-r--r-- 1 ffo ffo 141097 Apr 11 16:49 admin_pb.rb
-rw-r--r-- 1 ffo ffo  25151 Apr 11 16:49 admin_services_pb.rb
-rw-r--r-- 1 ffo ffo   6537 Apr 11 16:49 app_pb.rb
-rw-r--r-- 1 ffo ffo   1134 Apr 11 16:49 auth_n_key_pb.rb
-rw-r--r-- 1 ffo ffo  32881 Apr 11 16:49 auth_pb.rb
-rw-r--r-- 1 ffo ffo   6896 Apr 11 16:49 auth_services_pb.rb
-rw-r--r-- 1 ffo ffo   1571 Apr 11 16:49 change_pb.rb
-rw-r--r-- 1 ffo ffo   2488 Apr 11 16:49 event_pb.rb
-rw-r--r-- 1 ffo ffo  14782 Apr 11 16:49 idp_pb.rb
-rw-r--r-- 1 ffo ffo   5031 Apr 11 16:49 instance_pb.rb
-rw-r--r-- 1 ffo ffo 223348 Apr 11 16:49 management_pb.rb
-rw-r--r-- 1 ffo ffo  44402 Apr 11 16:49 management_services_pb.rb
-rw-r--r-- 1 ffo ffo   3020 Apr 11 16:49 member_pb.rb
-rw-r--r-- 1 ffo ffo    855 Apr 11 16:49 message_pb.rb
-rw-r--r-- 1 ffo ffo   1445 Apr 11 16:49 metadata_pb.rb
-rw-r--r-- 1 ffo ffo   2370 Apr 11 16:49 object_pb.rb
-rw-r--r-- 1 ffo ffo    621 Apr 11 16:49 options_pb.rb
-rw-r--r-- 1 ffo ffo   4425 Apr 11 16:49 org_pb.rb
-rw-r--r-- 1 ffo ffo   8538 Apr 11 16:49 policy_pb.rb
-rw-r--r-- 1 ffo ffo   8223 Apr 11 16:49 project_pb.rb
-rw-r--r-- 1 ffo ffo   1022 Apr 11 16:49 quota_pb.rb
-rw-r--r-- 1 ffo ffo   5872 Apr 11 16:49 settings_pb.rb
-rw-r--r-- 1 ffo ffo  20985 Apr 11 16:49 system_pb.rb
-rw-r--r-- 1 ffo ffo   4784 Apr 11 16:49 system_services_pb.rb
-rw-r--r-- 1 ffo ffo  28759 Apr 11 16:49 text_pb.rb
-rw-r--r-- 1 ffo ffo  24170 Apr 11 16:49 user_pb.rb
-rw-r--r-- 1 ffo ffo  13568 Apr 11 16:49 v1_pb.rb
```

Import these files into your project to start interacting with Zitadel's APIs.

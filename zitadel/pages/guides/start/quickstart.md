> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/guides/start/quickstart.mdx](https://zitadel.com/docs/guides/start/quickstart)

In this guide, you’ll set up a Zitadel account and configure it to work with our pre-built example applications.
You can simply clone the repository, follow the console setup, and have a working authentication flow in minutes.

## Get Started with ZITADEL Cloud

Set up your ZITADEL account and organization to begin managing identities for your applications.

### 1. Create your Account and Organization

You first need access to the ZITADEL Cloud Customer Portal.
This is the administrative hub for managing your billing, teams, and instances.

1. **Sign Up**: Go to [zitadel.com](https://zitadel.com) and select Sign Up.
2. **Onboarding**: Follow the prompts to verify your email and set up your Portal Team.

- Tip: We recommend using Passkeys for a secure, passwordless login experience.

3. **Access**: Once authenticated, you will be redirected to the Customer Portal dashboard.

![Home Page](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/cloud_sign_up.png)
![Registration Page](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/cloud_register.png)

### 2. Quick Onboarding

Complete the brief onboarding questions.
This data helps us prioritize the development of new features, SDKs, and integrations that matter most to our community.
![Onboarding Questions](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/onboarding_questions.png)

### 3. Create your ZITADEL instance

An [Instance](https://zitadel.com/docs/concepts/structure/instance) is a fully isolated identity environment with its own users, policies, and data.
Most developers use separate instances to isolate Development, Test, and Production workflows.

Follow these steps to deploy your first instance:

1. **Start**: Click Create Instance on your dashboard.
2. **Identity**: Provide an Instance Name (e.g., dev-environment). This will be used to generate your default domain (e.g., dev-environment-xxxx.zitadel.cloud).
3. **Locality**: Select your Region.

- Note: Choosing a region close to your users minimizes latency and helps with data residency compliance.

4. **Admin Setup**: Create your Instance Administrator. This user has "root" permissions to manage all organizations, policies, and settings within this specific instance.
5. **Deploy**: Review your settings and click Create Instance.

![Create Instance](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/cloud_create_instance.png)

### 4. Create your Project and Application

In ZITADEL, [**Applications**](https://zitadel.com/docs/guides/manage/console/applications-overview) are grouped into [**Projects**](https://zitadel.com/docs/guides/manage/console/projects-overview).
This allows multiple applications (like a React frontend and a Go backend) to share the same roles and role assignments.

#### Launch the Management Console

Click **Create your app**. This opens the Management Console for your instance in a new tab.
Log in using the Admin credentials you just created.
![Create App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/cloud_create_app.png)

#### Step 1: Define your Project

- **Name**: Enter a name (e.g., Project1).
- **Framework**: Select your preferred framework
- **Continue**: Click the Continue button.
  ![Project Name and Framework/Language](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/create_project_react.png)

#### Step 2: Review Default Settings

ZITADEL automatically configures the best security settings for your selected framework.

**Angular**

**Astro**

**ASP.NET Core**

**Django**

**Express.js**

**FastAPI**

**Fastify**

**Flask**

**Flutter**

**Go**

**Hono**

**Laravel**

**NestJS**

**Next.js**

**Nuxt**

**Qwik**

**React**

**SolidStart**

**Spring**

**Symfony**

**Svelte**

**Vue.js**

![Project Configuration Overview](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/project_config_overview_react.png)

### 5. Collect your Integration Keys

**Angular**

**Astro**

**ASP.NET Core**

**Django**

**Express.js**

**FastAPI**

**Fastify**

**Flask**

**Flutter**

**Go**

**Hono**

**Laravel**

**NestJS**

**Next.js**

**Nuxt**

**Qwik**

**React**

**SolidStart**

**Spring**

**Symfony**

**Svelte**

**Vue.js**

## Integrate ZITADEL into your App

### How the Authentication Flow Works

ZITADEL handles the complexity of the OIDC handshake so your app stays secure without manual token management.

1. **Login**: App redirects the user to ZITADEL with a PKCE challenge.
2. **Auth**: User authenticates on the ZITADEL hosted login page.
3. **Exchange**: ZITADEL returns an Auth Code, which the app exchanges for an Access Token.
4. **Tokens**: The app shows the Access and ID Token
5. **Logout**: The app clears local tokens and terminates the ZITADEL session.

### 1. Prerequisites

**Angular**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**Astro**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**ASP.NET Core**

- [.NET SDK 8 or later](https://dotnet.microsoft.com/download)

**Django**

- [Python](https://www.python.org/)
- [Poetry](https://python-poetry.org/)

**Express.js**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**FastAPI**

- [Python](https://www.python.org/)
- [Poetry](https://python-poetry.org/)

**Fastify**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**Flask**

- [Python](https://www.python.org/)
- [Poetry](https://python-poetry.org/)

**Flutter**

- [Flutter](https://docs.flutter.dev/install)

**Go**

- [Go](https://go.dev/)

**Hono**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**Laravel**

- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)

**NestJS**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**Next.js**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**Nuxt**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**Qwik**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**React**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**SolidStart**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**Spring**

- [Java Development Kit (JDK)](https://www.java.com/en/)
- [Maven](https://maven.apache.org/)

**Symfony**

- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)

**Svelte**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

**Vue.js**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 2. Get the Example Project

**Angular**

```bash
git clone https://github.com/zitadel/example-auth-angular.git
cd example-auth-angular
```

**Astro**

```bash
git clone https://github.com/zitadel/example-auth-astro.git
cd example-auth-astro
```

**ASP.NET Core**

```bash
git clone https://github.com/zitadel/example-auth-dotnet.git
cd example-auth-dotnet
```

**Django**

```bash
git clone https://github.com/zitadel/example-auth-django.git
cd example-auth-django
```

**Express.js**

```bash
git clone https://github.com/zitadel/example-auth-expressjs.git
cd example-auth-expressjs
```

**FastAPI**

```bash
git clone https://github.com/zitadel/example-auth-fastapi.git
cd example-auth-fastapi
```

**Fastify**

```bash
git clone https://github.com/zitadel/example-auth-fastify.git
cd example-auth-fastify
```

**Flask**

```bash
git clone https://github.com/zitadel/example-auth-flask.git
cd example-auth-flask
```

**Flutter**

```bash
git clone https://github.com/zitadel/zitadel_flutter.git
cd zitadel_flutter
```

**Go**

```bash
git clone https://github.com/zitadel/zitadel-go.git
cd zitadel-go
```

**Hono**

```bash
git clone https://github.com/zitadel/zitadel-auth-hono.git
cd zitadel-auth-hono
```

**Laravel**

```bash
git clone https://github.com/zitadel/example-auth-laravel.git
cd example-auth-laravel
```

**NestJS**

```bash
git clone https://github.com/zitadel/example-auth-nestjs.git
cd example-auth-nestjs
```

**Next.js**

```bash
git clone https://github.com/zitadel/example-auth-nextjs.git
cd example-auth-nextjs
```

**Nuxt**

```bash
git clone https://github.com/zitadel/example-auth-nuxtjs.git
cd example-auth-nuxtjs
```

**Qwik**

```bash
git clone https://github.com/zitadel/example-auth-qwik.git
cd example-auth-qwik
```

**React**

```bash
git clone https://github.com/zitadel/example-auth-react.git
cd example-auth-react
```

**SolidStart**

```bash
git clone https://github.com/zitadel/example-auth-solidstart.git
cd example-auth-solidstart
```

**Spring**

```bash
git clone https://github.com/zitadel/example-auth-spring.git
cd example-auth-spring
```

**Symfony**

```bash
git clone https://github.com/zitadel/example-auth-symfony.git
cd example-auth-symfony
```

**Svelte**

```bash
git clone https://github.com/zitadel/example-auth-sveltekit.git
cd example-auth-sveltekit
```

**Vue.js**

```bash
git clone https://github.com/zitadel/example-auth-vue.git
cd example-auth-vue
```

### 3. Configure your Credentials

**Angular**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
PORT=3000
NG_APP_ZITADEL_DOMAIN="https://your-zitadel-domain"
NG_APP_ZITADEL_CLIENT_ID="your-client-id"
NG_APP_ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback"
NG_APP_ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
NG_APP_ZITADEL_POST_LOGIN_URL="/profile"
```

**Astro**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/api/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/api/auth/logout/callback"
NEXTAUTH_URL="http://localhost:3000"
```

**ASP.NET Core**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
PORT=3000
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-randomly-generated-client-secret"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**Django**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
PY_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-randomly-generated-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"

```

**Express.js**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**FastAPI**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
PY_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**Fastify**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**Flask**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
PY_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**Flutter**

No action required for this step.
The issuer and client Id will be passed directly when running the app (next step)

**Go**

No action required for this step.
The issuer and client Id will be passed directly when running the app (next step)

**Hono**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**Laravel**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.
3. Generate app key, this will update the APP\_KEY variable in the .env file

```bash
php artisan key:generate
```

```bash
APP_KEY="your-app-key"
APP_ENV=local
APP_DEBUG=true
SERVER_URL="http://localhost:3000"
SERVER_PORT=3000
DB_CONNECTION=sqlite
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-randomly-generated-client-secret"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**NestJS**

1. Copy+paste the .env.example to .env.local
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_SALT="your-very-secret-and-strong-session-salt"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**Next.js**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="[https://your-instance.zitadel.cloud/](https://your-instance.zitadel.cloud/)"
ZITADEL_CLIENT_ID="zitadel-client-id"
ZITADEL_CLIENT_SECRET="zitadel-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/api/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/api/auth/logout/callback"
NEXTAUTH_URL="http://localhost:3000"

```

**Nuxt**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/api/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000"
NEXTAUTH_URL="http://localhost:3000"
```

**Qwik**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
VITE_PORT=3000
VITE_SESSION_SECRET="your-very-secret-and-strong-session-key"
VITE_SESSION_DURATION=3600
VITE_ZITADEL_DOMAIN="https://your-zitadel-domain"
VITE_ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
VITE_ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
VITE_ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback/zitadel"
VITE_ZITADEL_POST_LOGOUT_URL="http://localhost:3000/api/auth/logout/callback"
```

**React**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
VITE_ZITADEL_DOMAIN="https://your-zitadel-domain"
VITE_ZITADEL_CLIENT_ID="your-client-id"
VITE_ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback"
VITE_ZITADEL_POST_LOGIN_URL="/profile"
VITE_ZITADEL_POST_LOGOUT_URL="http://localhost:3000"
```

**SolidStart**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/api/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/api/auth/logout/callback"
NEXTAUTH_URL="http://localhost:3000"
```

**Spring**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
SPRING_PROFILES_ACTIVE=development
PORT=3000
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-randomly-generated-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**Symfony**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
APP_SECRET="your-app-secret-key"
SERVER_URL="http://localhost:3000"
SERVER_PORT=3000
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-randomly-generated-client-secret"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
```

**Svelte**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID, ZITADEL\_CLIENT\_SECRET and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
SESSION_SECRET="your-very-secret-and-strong-session-key"
SESSION_DURATION=3600
# Example: https://my-org-a1b2c3.zitadel.cloud
ZITADEL_DOMAIN="https://your-zitadel-domain"
ZITADEL_CLIENT_ID="your-zitadel-application-client-id"
ZITADEL_CLIENT_SECRET="your-zitadel-application-client-secret"
ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback/zitadel"
ZITADEL_POST_LOGIN_URL="/profile"
ZITADEL_POST_LOGOUT_URL="http://localhost:3000/auth/logout/callback"
NEXTAUTH_URL="http://localhost:3000"
```

**Vue.js**

1. Copy+paste the .env.example to .env
2. Update the ZITADEL\_CLIENT\_ID and ZITADEL\_DOMAIN with the client id and issuer you collected in Step 5.

```bash
NODE_ENV=development
PORT=3000
VITE_ZITADEL_DOMAIN="https://your-zitadel-domain"
VITE_ZITADEL_CLIENT_ID="your-client-id"
VITE_ZITADEL_CALLBACK_URL="http://localhost:3000/auth/callback"
VITE_ZITADEL_POST_LOGIN_URL="/profile"
VITE_ZITADEL_POST_LOGOUT_URL="http://localhost:3000"
```

### 4. Build and Run

**Angular**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Angular Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/angular_example_app.png)

**Astro**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Astro Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/astro_example_app.png)

**ASP.NET Core**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

**Django**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Django Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/django_example_app.png)

**Express.js**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Express.js Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/expressjs_example_app.png)

**Fastify**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Fastify Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/fastify_example_app.png)

**FastAPI**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![FastAPI Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/fastapi_example_app.png)

**Flask**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Flask Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/flask_example_app.png)

**Flutter**

Make sure to replace the \[zitadel\_issuer] and \[zitadel\_client\_id] with your own value before running the command

```bash
flutter run -d chrome --web-port=4444 --dart-define zitadel_url=[zitadel_issuer] --dart-define zitadel_client_id=[zitadel_client_id]
```

Your app will be live at `http://localhost:4444`.

![Flutter Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/flutter_example_app.png)

**Go**

Make sure to replace the \[zitadel\_domain] (use the domain from the issuer without the https\://) and \[zitadel\_client\_id] with your own value before running the command

```bash
go run example/app/app.go --domain [zitadel_domain] --key XKv2Lqd7YAq13NUZVUWZEWZeruqyzViM --clientID [zitadel_client_id] --redirectURI http://localhost:8089/auth/callback
```

Your app will be live at `http://localhost:8089`.

![Go Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/go_example_app.png)

**Hono**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Hono Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/hono_example_app.png)

**Laravel**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Laravel Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/laravel_example_app.png)

**NestJS**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![NestJS Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/nestjs_example_app.png)

**Next.js**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Next.js Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/next_example_app.png)

**Nuxt**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Nuxt Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/nuxt_example_app.png)

**Qwik**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Qwik Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/qwik_example_app.png)

**React**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![React Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/react_example_app.png)

**SolidStart**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![SolidStart Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/solidstart_example_app.png)

**Spring**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Spring Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/spring_example_app.png)

**Symfony**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Symfony Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/symfony_example_app.png)

**Svelte**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Svelte Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/sveltekit_example_app.png)

**Vue.js**

```bash
make start
```

Your app will be live at `http://localhost:3000`.

![Vue Example App](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/quickstart/vue_example_app.png)

## Success! 🚀

You’ve successfully integrated ZITADEL into an application.

> **Warning: prevent settings misconfiguration lockouts**
>
> Login policy misconfiguration can lock you out of the instance. Create a service account personal access token with the IAM\_OWNER role to revert login changes through the API, and always designate a second instance administrator.

### What’s next?

- [**Example Applications**](https://zitadel.com/docs/examples/introduction): Find more comprehensive guides and examples for the different frameworks
- [**SSO**](https://zitadel.com/docs/guides/integrate/services): Learn how to add SSO to your services
- [**Customize the UI**](https://zitadel.com/docs/guides/manage/customize/branding): Make the login page your own with Branding.
- [**Explore the API**](https://zitadel.com/docs/apis/introduction): Check out the ZITADEL API Reference for advanced integrations.

Need help? Join our [Discord community](https://zitadel.com/chat) or explore the full Documentation. Happy coding!

Prefer watching over reading? Check out our [video walkthrough of this quickstart](https://www.youtube.com/watch?v=POxkxGdDJyo).

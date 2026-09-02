> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/examples/secure-api/python-django.mdx](https://zitadel.com/docs/examples/secure-api/python-django)

This integration guide demonstrates the recommended way to incorporate ZITADEL into your Django Python application.
It explains how to check the token validity in the API and how to check for permissions.

By the end of this guide, your application will have three different endpoints that are public, private (valid token) and private-scoped (valid token with a specific role).

> **Note**
>
> This documentation references our [example](https://github.com/zitadel/example-python-django-oauth) on GitHub.

## ZITADEL setup

Before we can start building our application, we have to do a few setup steps in the ZITADEL Management Console.

### Create application

1. Go to your Project and click on the **New** button as shown below.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/1.png)

2. Give a name to your application (Test API is the name given below) and select type **API**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/2.png)

3. Select **JWT** as the authentication method and click **Continue**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/3.png)

4. Now review your settings and click **Create**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/4.png)

5. You will now see the API’s **Client ID**. You will not see a Client Secret because we are using a private JWT key.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/5.png)

6. Next, we must create the key pairs. Click on **New**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/6.png)

7. Select **JSON** as the type of key. You can also set an expiration time for the key or leave it empty. Click on **Add**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/7.png)

8. Download the created key by clicking the **Download** button and then click **Close**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/8.png)

9. The key will be downloaded.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/9.png)

10. When you click on URLs on the left, you will see the relevant OIDC URLs. Note down the **issuer** URL, **token\_endpoint** and **introspection\_endpoint**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/10.png)

11. The key that you downloaded will be of the following format.

```
{
  "type":"application",
  "keyId":"<YOUR_KEY_ID>",
  "key":"-----BEGIN RSA PRIVATE KEY-----\<YOUR_PRIVATE_KEY>\n-----END RSA PRIVATE KEY-----\n",
  "appId":"<YOUR_APP_ID>",
  "clientId":"<YOUR_CLIENT_ID>"
}
```

12. Also note down the **Project ID** of your project.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/app-jwt/11.png)

### Create Service Account

1. Go to the **Users** tab in your organization as shown below and click on the **Service Accounts** tab.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/1.png)

2. To add a service account, click on the **New** button.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/2.png)

3. Next, add the details of the service account and select either **Bearer** or **JWT** for **Access Token Type** and click on **Create**. For this example, we will select **JWT**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/3.png)

4. Now you will see the saved details.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/4.png)

5. Next,  we need to generate a private-public key pair in ZITADEL and you must get the private key to sign your JWT.  Go to **Keys** and click on **New**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/5.png)

6. Select type **JSON** and click **Add**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/6.png)

7. Download the key by clicking **Download**. After the download, click **Close**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/7.png)

8. You will see the following screen afterward.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/8.png)

9. The downloaded key will be of the following format:

```
{
    "type":"serviceaccount",
    "keyId":"<YOUR_KEY_ID>",
    "key":"-----BEGIN RSA PRIVATE KEY-----\n<YOUR_KEY>\n-----END RSA PRIVATE KEY-----\n",
    "userId":"<YOUR_USER_ID>"
}
```

### Assign a role to the Service Account

In order to access this route, you must create the role `read:messages` in your ZITADEL project and also assign a role to the service account you created by adding the role to the user. Follow these steps to do so:

1. Go to your project and select **Roles**. Click **New**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/1.png)

2. Add the `read:messages` role as shown below and click **Save**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/2.png)

3. You will see the created role listed.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/3.png)

4. To assign this role to a user, click on **Role Assignments**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/4.png)

5. Select the user you want to assign the role to.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/5.png)

6. Select the project where this role assignment is applicable.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/6.png)
7\. Click **Continue**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/7.png)

8. Select the role **read:messages** and click **Save**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/8.png)

9. You will now see the service account has been assigned the role **read:messages**.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/examples/secure-api/service-account-jwt/scopes/9.png)

### Prerequisites

At the end you should have the following for the API:

- Issuer, something like `https://example.zitadel.cloud` or `http://localhost:8080`
- Introspection URL, something like `https://example.zitadel.cloud/oauth/v2/introspect`
- Token URL, something like `https://example.zitadel.cloud/oauth/v2/token`
- `.json`-key-file for the API, from the application
- ID of the project

And the following from the Service Account:

- `.json`-key-file from the service account

## Setup new Django application

### Setup Python

You have to install Python as described in [their documentation](https://wiki.python.org/moin/BeginnersGuide/Download).

### Install dependencies

For this example we need the following dependencies:

- `django`: to create an API with django
- `python-dotenv`: to use environment variables in the settings
- `authlib`: client-side OAuth functionality
- `requests`: HTTP requests for the introspection

For the dependencies we need a requirements.txt-file with the following content:

[Code example on GitHub](https://github.com/zitadel/example-python-django-oauth/blob/main/requirements.txt)

Then install all dependencies with:

```bash
python -m pip install -U requirements.txt
```

Then in your folder of choice, call the following command to create a Django base:

```bash
django-admin startproject myapi .
```

## Define the Django API

### Add to the settings.py to include ZITADEL info

There is info needed for the introspection calls, which we put into the settings.py:

[Code example on GitHub](https://github.com/zitadel/example-python-django-oauth/blob/main/myapi/settings.py#L125-L133)

and create a ".env"-file in the root folder with the settings as an example:

```bash
ZITADEL_INTROSPECTION_URL = 'URL to the introspection endpoint to verify the provided token'
ZITADEL_DOMAIN = 'Domain used as audience in the token verification'
API_PRIVATE_KEY_FILE_PATH = 'Path to the key.json created in ZITADEL'
```

I should look something like this:

```bash
ZITADEL_INTROSPECTION_URL = 'https://example.zitadel.cloud/oauth/v2/introspect'
ZITADEL_DOMAIN = 'https://example.zitadel.cloud'
API_PRIVATE_KEY_FILE_PATH = '/tmp/example/250719519163548112.json'
```

### Validator definition

To validate the tokens, we need a validator which can be called in the event of API-calls.

validator.py:

[Code example on GitHub](https://github.com/zitadel/example-python-django-oauth/blob/main/myapi/validator.py)

### Requests and URLs

We define 3 different endpoints which differ in terms of requirements.
views.py:

[Code example on GitHub](https://github.com/zitadel/example-python-django-oauth/blob/main/myapi/views.py)

To handle endpoints the urls have to be added to the urls.py:

[Code example on GitHub](https://github.com/zitadel/example-python-django-oauth/blob/main/myapi/urls.py)

### DB

Create and run migrations:

```bash
python manage.py migrate
```

### Run

You can use a local Django server to test the application.

```bash
python manage.py runserver
```

### Call the API

To call the API you need an access token, which is then verified by ZITADEL.
Please follow [this guide here](https://zitadel.com/docs/guides/integrate/token-introspection/private-key-jwt), ignoring the first step as we already have the `.json`-key-file from the serviceaccount.

Optionally set the token as an environment variable:

```
export TOKEN='MtjHodGy4zxKylDOhg6kW90WeEQs2q...'
```

With the access token, you can then do the following calls:

```
curl -H "Authorization: Bearer $TOKEN" -X GET http://localhost:8000/api/public
curl -H "Authorization: Bearer $TOKEN" -X GET http://localhost:8000/api/private
curl -H "Authorization: Bearer $TOKEN" -X GET http://localhost:8000/api/private-scoped
```

## Completion

Congratulations! You have successfully integrated your Django API with ZITADEL!

If you get stuck, consider checking out our [example](https://github.com/zitadel/example-python-django-oauth) application. This application includes all the functionalities mentioned in this quick-start. You can start by cloning the repository and defining the settings in the settings.py. If you face issues, contact us or raise an issue on [GitHub](https://github.com/zitadel/example-python-django-oauth/issues).

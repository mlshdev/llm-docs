> Release-pinned source for ZITADEL v4.17.1: [apps/docs/content/guides/integrate/token-introspection/basic-auth.mdx](https://zitadel.com/docs/guides/integrate/token-introspection/basic-auth)

This is a guide on how to secure your API using [Basic Authentication](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic).

## Register the API in ZITADEL

1. Go to your project and click on the **New** button as shown below.

![Register the API](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/integrate/token-introspection-basic-auth-1.png)

2. Give a name to your application (Test API 2 is the name given below) and select type **API**.

![Register the API](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/integrate/token-introspection-basic-auth-2.png)

3. Select **Basic** as the authentication method and click **Continue**.

![Register the API](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/integrate/token-introspection-basic-auth-3.png)

4. Now review your settings and click **Create**.

![Register the API](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/integrate/token-introspection-basic-auth-4.png)

5. You will now see the API’s **Client ID** and the **Client Secret**. Copy them and click **Close**.

![Register the API](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/integrate/token-introspection-basic-auth-5.png)

6. When you click **URLs** on the left, you will see the relevant OIDC URLs. Note down the **issuer** URL, **token\_endpoint** and **introspection\_endpoint**.

![Register the API](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/integrate/token-introspection-basic-auth-6.png)

7. Also note down the **Project ID** of your project.

![Register the API](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/integrate/token-introspection-basic-auth-7.png)

## Token introspection

With Basic Authentication, you will receive a Client ID and Client Secret for your API. Send your client\_id and client\_secret as a Basic Auth Header in the following format:

```
Authorization: "Basic " + base64( formUrlEncode(client_id) + ":" + formUrlEncode(client_secret) )

```

The request from the API to the introspection endpoint should be in the following format:

```bash
curl --request POST \
 --url ${CUSTOM_DOMAIN}/oauth/v2/introspect \
 --header 'Content-Type: application/x-www-form-urlencoded' \
 --header 'Authorization: Basic {your_basic_auth_header}' \
 --data token=VjVxyCZmRmWYqd3_F5db9Pb9mHR5fqzhn...
```

Here's an example of how this is done in Python code:

```python
def introspect_token(self, token_string):
    url = ZITADEL_INTROSPECTION_URL
    data = {'token': token_string, 'token_type_hint': 'access_token', 'scope': 'openid'}
    auth = HTTPBasicAuth(API_CLIENT_ID, API_CLIENT_SECRET)
    resp = requests.post(url, data=data, auth=auth)
    resp.raise_for_status()
    return resp.json()
```

## Introspection response

Upon successful introspection, regardless of the token type or introspection method, a response with the boolean `active` is returned, indicating if the provided token is active and if the requesting client is part of the token audience. If `active` is true, further information will be provided:

| **Property** | **Description**                                                       |
| ------------ | --------------------------------------------------------------------- |
| `aud`        | The audience of the token                                             |
| `client_id`  | The client\_id of the application the token was issued to             |
| `exp`        | Time the token expires (as unix time)                                 |
| `iat`        | Time the token was issued at (as unix time)                           |
| `iss`        | Issuer of the token                                                   |
| `jti`        | Unique id of the token                                                |
| `nbf`        | Time the token must not be used before (as unix time)                 |
| `scope`      | Space delimited list of scopes granted to the token                   |
| `token_type` | Type of the inspected token. Value is always Bearer                   |
| `username`   | ZITADEL's login name of the user. Consists of username\@primarydomain |

Depending on the granted scopes, additional information about the authorized user is provided.

If the authorization fails, an HTTP 401 with invalid\_client will be returned.

In summary, the introspection endpoint plays a crucial role in validating access tokens, either opaque or JWT, ensuring that they are not revoked.

Follow this [tutorial](https://github.com/zitadel/examples-api-access-and-token-introspection/tree/main/api-basic-authentication) to learn how to register an API application using Basic Auth with ZITADEL and test it.

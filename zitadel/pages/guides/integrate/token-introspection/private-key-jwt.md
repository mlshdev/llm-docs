> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/guides/integrate/token-introspection/private-key-jwt.mdx](https://zitadel.com/docs/guides/integrate/token-introspection/private-key-jwt)

This guide explains how to use ZITADEL's [Private Key JWT authentication method](https://zitadel.com/docs/apis/openidoauth/authn-methods#jwt-with-private-key) to authenticate your application and call the token introspection endpoint. This is not about securing an API, but about allowing your backend to introspect access tokens in a secure way.

If you're looking to set up Private Key JWT authentication specifically for Service Accounts, see our dedicated guide [here](https://zitadel.com/docs/guides/integrate/service-accounts/private-key-jwt).

## Register an Application & Generate a Key Pair

To use Private Key JWT for introspection, you must register your client application in ZITADEL and create a key pair. This process enables your application to obtain credentials needed to generate JWT assertions for authentication.

1. In your ZITADEL project, click **New** to add an application.

![Register the app](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-1.png)

2. Enter a name (e.g., "Backend Client") and select **API** as the application type.

![Set application type](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-2.png)

3. Choose **JWT** as the authentication method and click **Continue**.

![Choose JWT Profile](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-3.png)

4. Review your settings and click **Create**.

![Create application](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-4.png)

5. After creation, you’ll see the application’s **Client ID**. There is no client secret—instead, authentication relies on your private key and JWT.

![Client ID](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-5.png)

6. To generate a key pair, click **New** under the application’s keys section.

![Generate a new key](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-6.png)

7. Select **JSON** as the key type, set an expiration if desired, and click **Add**.

![Key details](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-7.png)

8. Download and save the generated key by clicking **Download**. Afterward, click **Close**.

![Download key](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-8.png)

9. The downloaded key file will look like this:

```
{
  "type": "application",
  "keyId": "${YOUR_KEY_ID}",
  "key": "-----BEGIN RSA PRIVATE KEY-----\n${YOUR_PRIVATE_KEY}\n-----END RSA PRIVATE KEY-----\n",
  "appId": "${YOUR_APP_ID}",
  "clientId": "${YOUR_CLIENT_ID}"
}
```

10. In the left menu, select **URLs** to view the application’s OIDC endpoints. Note the **issuer** URL, **token\_endpoint**, and **introspection\_endpoint**.

![OIDC Endpoints](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-10.png)

11. Optionally, note your **Project ID** for reference.

![Project ID](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/integrate/token-introspection-jwt-profile-11.png)

## Calling the Introspection Endpoint

To introspect an access token in ZITADEL, your backend must authenticate by providing a JWT (`client_assertion`) signed with your application's private key. ZITADEL verifies this JWT to ensure the request is from a trusted application.

**Required request parameters:**

| **Parameter**           | **Description**                                                  |
| ----------------------- | ---------------------------------------------------------------- |
| `client_assertion`      | The JWT assertion created and signed as described below.         |
| `client_assertion_type` | Must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer` |
| `token`                 | The access token you want to introspect.                         |

### Creating the Client Assertion (JWT)

The `client_assertion` parameter is a signed JWT with the following structure:

**Header:**

```json
{
  "alg": "RS256",
  "kid": "${YOUR_KEY_ID}"
}
```

**Payload:**

```json
{
  "iss": "${YOUR_CLIENT_ID}",
  "sub": "${YOUR_CLIENT_ID}",
  "aud": "https://${CUSTOM_DOMAIN}",     // Your ZITADEL issuer URL / Custom Domain
  "exp": 1605183582,                     // Expiry (Unix timestamp)
  "iat": 1605179982                      // Issued at (Unix timestamp, not older than 1 hour)
}
```

- `iss` and `sub`: Your application’s Client ID.
- `aud`: The issuer URL for your ZITADEL instance (e.g. `https://my-tenant.zitadel.cloud`).
- `exp`: JWT expiration time (seconds since epoch).
- `iat`: JWT issued at time (seconds since epoch), must not be older than 1 hour.

You can generate the signed JWT using libraries in your preferred language or helper tools like [zitadel-tools](https://github.com/zitadel/zitadel-tools) or <https://dinochiesa.github.io/jwt/>.

### Example Introspection HTTP Request

Make a POST request to the introspection endpoint, sending the above parameters:

```bash
curl --request POST \
  --url ${CUSTOM_DOMAIN}/oauth/v2/introspect \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer \
  --data client_assertion=eyJhbGciOiJSUzI1Ni... \
  --data token=VjVxyCZmRmWYqd3_F5db9Pb9mHR
```

### Python Example

Below is a Python function that generates the JWT assertion and performs token introspection:

```python
def introspect_token(token_string):
    # Build JWT for client assertion
    payload = {
        "iss": API_KEY_FILE["clientId"],
        "sub": API_KEY_FILE["clientId"],
        "aud": ZITADEL_ISSUER_URL,
        "exp": int(time.time()) + 60 * 60,  # expires in 1 hour
        "iat": int(time.time())
    }
    headers = {
        "alg": "RS256",
        "kid": API_KEY_FILE["keyId"]
    }
    jwt_token = jwt.encode(payload, API_KEY_FILE["key"], algorithm="RS256", headers=headers)

    req_headers = {"Content-Type": "application/x-www-form-urlencoded"}
    req_data = {
        "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
        "client_assertion": jwt_token,
        "token": token_string
    }
    response = requests.post(ZITADEL_INTROSPECTION_ENDPOINT, headers=req_headers, data=req_data)
    response.raise_for_status()
    token_data = response.json()
    print(f"Token data from introspection: {token_data}")
    return token_data
```

## Introspection Response

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

For more details and a complete working example, see this [tutorial](https://github.com/zitadel/examples-api-access-and-token-introspection/tree/main/api-jwt) on registering an application in ZITADEL and calling the introspection endpoint with a JWT assertion.

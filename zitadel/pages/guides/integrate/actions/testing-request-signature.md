> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/guides/integrate/actions/testing-request-signature.mdx](https://zitadel.com/docs/guides/integrate/actions/testing-request-signature)

This guide shows you how to verify the integrity of the received data on your target.
There are three options available, which will be demonstrated in the following sections.
The examples are based on the request action, but the same principles apply to other action types as well.

## Prerequisites

Before you start, make sure you have everything set up correctly.

- You need to be at least a ZITADEL [*IAM\_OWNER*](https://zitadel.com/docs/guides/manage/console/administrators)

> **Note**
>
> Note that this guide assumes that ZITADEL is running on the same machine as the target and can be reached via `localhost`.
> In case you are using a different setup, you need to adjust the target URL accordingly and will need to make sure that the target is reachable from ZITADEL.

## Payload and Validation Types

ZITADEL supports the following three types of payload in actions:

- **JSON**: The payload is sent as JSON in the request body. Additionally, a signature header is sent to validate the payload.
  This is the simplest form of payload and validation and doesn't require any additional calls to validate the payload. It's also the default type,
  which will be used if no type is specified.
- **JWT**: The payload is sent as a JSON Web Token (JWT) in the request body. The JWT is signed with the signing key of the instance.
  This allows you to validate the payload by verifying the signature of the JWT using the signing key managed though the webkeys endpoint of the ZITADEL instance,
  which allows for easier key rotation and management. Additionally, it's the base for the JWE type, in case you need to encrypt the payload for certain use cases.
- **JWE**: The payload is sent as encrypted JSON Web Token (JWE) in the request body. The JWT is additionally encrypted with the public key provided by you.
  This allows you to validate and decrypt the payload by verifying the signature of the JWT using the signing key managed though the webkeys endpoint of the ZITADEL instance,
  and decrypting the payload using your private key. This is the most secure form of payload and validation, but requires additional setup to provide the public key to ZITADEL.
  This type is recommended if the payload contains sensitive information that should not be exposed to any intermediaries.

## Create target

We'll start the endpoint on port '8090' and if we want to use it as webhook, the target can be created as follows:

See [Create a target](https://zitadel.com/docs/apis/resources/action_service_v2/action-service-create-target) for more detailed information.

Specify the `payloadType` according to the implementation you want to test: `PAYLOAD_TYPE_JSON`, `PAYLOAD_TYPE_JWT`, or `PAYLOAD_TYPE_JWE`.

```shell
curl -L -X POST 'https://${CUSTOM_DOMAIN}/v2/actions/targets' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
--data-raw '{
  "name": "local webhook",
  "restWebhook": {
    "interruptOnError": true
  },
  "endpoint": "http://localhost:8090/webhook",
  "timeout": "10s",
  "payloadType": "PAYLOAD_TYPE_JSON"
}'
```

Example response after creating the target:

```json
{
    "id": "344649040681500814",
    "creationDate": "2025-10-31T15:00:36.432595dZ",
    "signingKey": "somekey"
}
```

Save the returned ID to set in the execution. If you're intending to use the `PAYLOAD_TYPE_JSON`, additionally store the `signingKey` and use it in the example above.

### JWE Specific Setup

If you are using the `PAYLOAD_TYPE_JWE`, you need to provide a public key to ZITADEL so that it can encrypt the payload.

Create a public/private key pair. You can use the following command to generate an RSA key pair:

```shell
openssl genpkey -algorithm RSA -outform PEM -out private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

Then upload the public key to ZITADEL using the following command. Replace `<TargetID>` with the ID of the target you created earlier.
Use the base64 encoded content of the `public_key.pem` file as the value for `publicKey`.

```shell
curl -L -X POST 'https://${CUSTOM_DOMAIN}/v2/actions/targets/<TargetID>/publickeys' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
--data-raw '{
    "publicKey": "<base64 encoded contents of public_key.pem>"
}'
```

Be sure to also activate the public key for the target using the returned `<KeyID>` from the previous request:

```shell
curl -L -X PUT 'https://${CUSTOM_DOMAIN}/v2/actions/targets/<TargetID>/publickeys/<KeyID>/activate' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>'
```

## Set execution

To configure ZITADEL to call the target when an API endpoint is called, you need to set an execution and define the request
condition.

See [Set an execution](https://zitadel.com/docs/apis/resources/action_service_v2/action-service-set-execution) for more detailed information.

```shell
curl -L -X PUT 'https://${CUSTOM_DOMAIN}/v2/actions/executions' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
--data-raw '{
    "condition": {
        "request": {
            "method": "/zitadel.user.v2.UserService/CreateUser"
        }
    },
    "targets": [
        "<TargetID returned>"
    ]
}'
```

## Start example target

To test the actions feature, you need to create a target that will be called when an API endpoint is called.
You will need to implement a listener that can receive HTTP requests.
For this example, we will use a simple Go HTTP server that will print the received request to standard output.
As mentioned before, this validation can and should be applied to any target implementation.

**JSON**

```go
//go:build ignore

package main

import (
	"fmt"
	"io"
	"net/http"

	"github.com/zitadel/zitadel-go/v3/pkg/actions"
)

const signingKey = "somekey" // signing key received after creating the target

// webhook HandleFunc to read the request body and then print out the contents
func webhook(w http.ResponseWriter, req *http.Request) {
	// read the body content
	sentBody, err := io.ReadAll(req.Body)
	if err != nil {
		// if there was an error while reading the body return an error
		http.Error(w, "error", http.StatusInternalServerError)
		return
	}
	defer req.Body.Close()
	// validate signature
	if err := actions.ValidateRequestPayload(sentBody, &req.Header, signingKey); err != nil {
		// if the signed content is not equal the sent content return an error
		http.Error(w, "error", http.StatusInternalServerError)
		return
	}
	// print out the read content
	fmt.Println(string(sentBody))
}

func main() {
	// handle the HTTP call under "/webhook"
	http.HandleFunc("/webhook", webhook)

	// start an HTTP server with the before defined function to handle the endpoint under "http://localhost:8090"
	http.ListenAndServe(":8090", nil)
}
```

**JWT**

```go
//go:build ignore

package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/go-jose/go-jose/v4"
	"github.com/zitadel/oidc/v3/pkg/client"
	"github.com/zitadel/oidc/v3/pkg/client/rp"
	"github.com/zitadel/oidc/v3/pkg/oidc"
)

// webhook HandleFunc to read the request body and then print out the contents
func webhook(signatureAlgorithms []jose.SignatureAlgorithm, keySet oidc.KeySet) func(w http.ResponseWriter, req *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		// read the body content
		sentBody, err := io.ReadAll(req.Body)
		if err != nil {
			// if there was an error while reading the body return an error
			http.Error(w, "error", http.StatusInternalServerError)
			return
		}
		defer req.Body.Close()
		// validate the JWT and extract the payload from it
		payload, err := validateJWT(req.Context(), string(sentBody), signatureAlgorithms, keySet)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		// print out the payload
		fmt.Println(string(payload))
	}
}

func validateJWT(ctx context.Context, jwtString string, algorithms []jose.SignatureAlgorithm, keySet oidc.KeySet) ([]byte, error) { //nolint:typecheck
	// Parse the signed JWT to get the JWS object (which contains the signatures and unverified payload)
	parsedJWS, err := jose.ParseSigned(jwtString, algorithms)
	if err != nil {
		return nil, err
	}

	// Verify the signature using the retrieved key and return the payload
	return keySet.VerifySignature(ctx, parsedJWS)
}

func main() {
	ctx := context.Background()
	// set the issuer to the ZITADEL instance URL
	issuer := "http://localhost:8080"

	// the oidc client library will call the discovery endpoint to get the JWKS URI and supported signing algorithms
	discover, err := client.Discover(ctx, issuer, http.DefaultClient)
	if err != nil {
		log.Fatal(err)
	}
	signatureAlgorithms := make([]jose.SignatureAlgorithm, len(discover.IDTokenSigningAlgValuesSupported))
	for i, alg := range discover.IDTokenSigningAlgValuesSupported {
		signatureAlgorithms[i] = jose.SignatureAlgorithm(alg)
	}
	keySet := rp.NewRemoteKeySet(http.DefaultClient, discover.JwksURI)

	// handle the HTTP call under "/webhook"
	http.HandleFunc("/webhook", webhook(signatureAlgorithms, keySet))

	// start an HTTP server with the before defined function to handle the endpoint under "http://localhost:8090"
	http.ListenAndServe(":8090", nil)
}
```

**JWE**

```go
//go:build ignore

package main

import (
	"context"
	"crypto/x509"
	"encoding/pem"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/go-jose/go-jose/v4"
	"github.com/zitadel/oidc/v3/pkg/client"
	"github.com/zitadel/oidc/v3/pkg/client/rp"
	"github.com/zitadel/oidc/v3/pkg/oidc"
)

// webhook HandleFunc to read the request body and then print out the contents
func webhook(signatureAlgorithms []jose.SignatureAlgorithm, keySet oidc.KeySet, privateKey any) func(w http.ResponseWriter, req *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		// read the body content
		sentBody, err := io.ReadAll(req.Body)
		if err != nil {
			// if there was an error while reading the body return an error
			http.Error(w, "error", http.StatusInternalServerError)
			return
		}
		defer req.Body.Close()
		// decrypt the JWE, validate the JWT and extract the payload from it
		payload, err := validateJWE(req.Context(), string(sentBody), signatureAlgorithms, keySet, privateKey)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		// print out the payload
		fmt.Println(string(payload))
	}
}

func validateJWE(ctx context.Context, jweString string, signatureAlgorithms []jose.SignatureAlgorithm, keySet oidc.KeySet, privateKey any) ([]byte, error) {
	// For parsing the JWE, we need to specify which algorithms we expect.
	// You can specify either `RSA_OAEP_256` (rsa.PrivateKey) or `ECDH_ES_A256KW` (ecdsa.PrivateKey) or both, depending on which private key(s) you have.
	// The content encryption algorithm will always be `A256GCM` as used by Zitadel.
	parsedJWE, err := jose.ParseEncrypted(jweString, []jose.KeyAlgorithm{jose.RSA_OAEP_256, jose.ECDH_ES_A256KW}, []jose.ContentEncryption{jose.A256GCM})
	if err != nil {
		return nil, err
	}

	// In this example we only use a single key and loaded it on start, but you can manage and rotate the key used for the encryption through the API.
	// You might also have a key management system in your application.
	// Using the KeyID from the JWE header (parsedJWE.Header.KeyID), we could load the correct private key for decryption.

	// Decrypt the JWE using the private key to get the inner JWT
	decryptedJWT, err := parsedJWE.Decrypt(privateKey)
	if err != nil {
		return nil, err
	}
	// Now validate the inner JWT and return the payload
	return validateJWT(ctx, string(decryptedJWT), signatureAlgorithms, keySet)
}

func validateJWT(ctx context.Context, jwtString string, algorithms []jose.SignatureAlgorithm, keySet oidc.KeySet) ([]byte, error) { //nolint:typecheck
	// Parse the signed JWT to get the JWS object (which contains the signatures and unverified payload)
	parsedJWS, err := jose.ParseSigned(jwtString, algorithms)
	if err != nil {
		return nil, err
	}

	// Verify the signature using the retrieved key and return the payload
	return keySet.VerifySignature(ctx, parsedJWS)
}

func main() {
	ctx := context.Background()
	// set the issuer to the ZITADEL instance URL
	issuer := "http://localhost:8080"

	// the oidc client library will call the discovery endpoint to get the JWKS URI and supported signing algorithms
	discover, err := client.Discover(ctx, issuer, http.DefaultClient)
	if err != nil {
		log.Fatal(err)
	}
	signatureAlgorithms := make([]jose.SignatureAlgorithm, len(discover.IDTokenSigningAlgValuesSupported))
	for i, alg := range discover.IDTokenSigningAlgValuesSupported {
		signatureAlgorithms[i] = jose.SignatureAlgorithm(alg)
	}
	keySet := rp.NewRemoteKeySet(http.DefaultClient, discover.JwksURI)

	// this example uses the private key from the PEM file to decrypt the JWE
	// make sure to load your private key accordingly
	privateKeyPEM, err := os.ReadFile("./private-key.pem")
	if err != nil {
		log.Fatal(err)
	}
	block, _ := pem.Decode(privateKeyPEM)
	privateKey, err := x509.ParsePKCS8PrivateKey(block.Bytes)
	if err != nil {
		log.Fatal(err)
	}

	// handle the HTTP call under "/webhook"
	http.HandleFunc("/webhook", webhook(signatureAlgorithms, keySet, privateKey))

	// start an HTTP server with the before defined function to handle the endpoint under "http://localhost:8090"
	http.ListenAndServe(":8090", nil)
}
```

> **Note**
>
> The example above runs only on your local machine (`localhost`).
> To test it with Zitadel, you must make your listener reachable from the internet.
> You can do this by using **Webhook.site** (see [Creating a Listener with Webhook.site](https://zitadel.com/docs/guides/integrate/actions/webhook-site-setup)).

## Example call

Now that you have set up the target and execution, you can test it by creating a user through the Management Console UI or
by calling the ZITADEL API to create a user.

```shell
curl -L -X POST 'https://${CUSTOM_DOMAIN}/v2/users/new' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
--data-raw '{
    "organizationId": "344648897353810062",
    "human":
    {
        "profile":
        {
            "givenName": "Minnie",
            "familyName": "Mouse",
            "nickName": "Mini",
            "displayName": "Minnie Mouse",
            "preferredLanguage": "en",
            "gender": "GENDER_FEMALE"
        },
        "email":
        {
            "email": "mini+test@mouse.com"
        }
    }
}'
```

Your server should now print out something like the following. Check out
the [Sent information Request](https://zitadel.com/docs/guides/integrate/actions/usage#sent-information-request) payload description.

```json
{
  "fullMethod": "/zitadel.user.v2.UserService/CreateUser",
  "instanceID": "344648897353744526",
  "orgID": "344648897353810062",
  "projectID": "344648897353875598",
  "userID": "344648897354465422",
  "request":
  {
    "organizationId": "344648897353810062",
    "human":
    {
      "profile":
      {
        "givenName": "Minnie",
        "familyName": "Mouse",
        "nickName": "Mini",
        "displayName": "Minnie Mouse",
        "preferredLanguage": "en",
        "gender": "GENDER_FEMALE"
      },
      "email":
      {
        "email": "mini+test@mouse.com"
      }
    }
  },
  "headers":
  {
    "Content-Type":
    [
      "application/grpc"
    ],
    "Host":
    [
      "localhost:8080"
    ],
    "X-Forwarded-For":
    [
      "::1"
    ],
    "X-Forwarded-Host":
    [
      "localhost:8080"
    ]
  }
}
```

## Conclusion

You have successfully set up a target and verified the payload integrity for request actions using your preferred payload type.
You can now extend this setup to other action types and integrate it into your workflows as needed.
Selecting the appropriate payload type ensures that your data is transmitted securely and can be validated effectively on the receiving end.
Find more information about the actions feature in the [API documentation](https://zitadel.com/docs/concepts/features/actions_v2).

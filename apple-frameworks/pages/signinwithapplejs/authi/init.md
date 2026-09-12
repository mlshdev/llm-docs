> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/authi/init](https://developer.apple.com/documentation/signinwithapplejs/authi/init)

# init

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Method  
**Availability:** Sign in with Apple JS 1.0+

Initialize the authentication object with a configuration object.

## Declaration

```
void init(
	ClientConfigI config
);
```

## Parameters

- `config`: The client configuration object used for initialization.

## Mentioned In

- [Configuring your webpage for Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/configuring-your-webpage-for-sign-in-with-apple)

<a id="Discussion"></a>

## Discussion

Use this method to configure the authentication object. Alternatively, you can use meta tags on your website to configure the authentication object.

```html
<head>
   <meta name="appleid-signin-client-id" content="[CLIENT_ID]">
   <meta name="appleid-signin-scope" content="[SCOPES]">
   <meta name="appleid-signin-redirect-uri" content="[REDIRECT_URI]">
   <meta name="appleid-signin-state" content="[STATE]">
</head>
```

## See Also

### Initializing the sign in process

- [signIn](signin.md): Sign in using the configuration object.

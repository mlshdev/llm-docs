> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/authi/signin](https://developer.apple.com/documentation/signinwithapplejs/authi/signin)

# signIn

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Method  
**Availability:** Sign in with Apple JS 1.0+

Sign in using the configuration object.

## Declaration

```
Promise<SignInResponseI|SignInErrorI>|void signIn(
	optional ClientConfigI signInConfig
);
```

## Parameters

- `signInConfig`: The configuration object used to sign in the user.

## Mentioned In

- [Configuring your webpage for Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/configuring-your-webpage-for-sign-in-with-apple)

<a id="Discussion"></a>

## Discussion

By default, the [signIn](signin.md) method uses the configuration object created during initialization. However, you can override the initialization values by passing in a new configuration object.

## See Also

### Initializing the sign in process

- [init](init.md): Initialize the authentication object with a configuration object.

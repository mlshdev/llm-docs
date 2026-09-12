> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/clientconfigi](https://developer.apple.com/documentation/signinwithapplejs/clientconfigi)

# ClientConfigI

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Class  
**Availability:** Sign in with Apple JS 1.0+

An object that contains a user’s configuration information.

## Declaration

```
interface ClientConfigI
```

## Mentioned In

- [Configuring your webpage for Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/configuring-your-webpage-for-sign-in-with-apple)

## Topics

### Configuring the client object

- [clientId](clientconfigi/clientid.md): The developer’s client identifier, as provided by WWDR.
- [redirectURI](clientconfigi/redirecturi.md): The URI to which the authorization redirects.
- [scope](clientconfigi/scope.md): The amount of user information requested from Apple.
- [state](clientconfigi/state.md): The current state of the request.
- [nonce](clientconfigi/nonce.md): The value that associates a client session and an ID token.
- [usePopup](clientconfigi/usepopup.md): A Boolean that enables showing the flow in a popup.

## See Also

### Authentication and configuration

- [SignInResponseI](signinresponsei.md): An object that contains the response to a sign-in request.
- [SignInErrorI](signinerrori.md): An object that contains error information.
- [AuthorizationI](authorizationi.md): An object that contains a user’s authorization information.
- [AuthI](authi.md): The interface used to authenticate a user.

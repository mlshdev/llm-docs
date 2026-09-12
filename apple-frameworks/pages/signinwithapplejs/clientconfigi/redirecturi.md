> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/clientconfigi/redirecturi](https://developer.apple.com/documentation/signinwithapplejs/clientconfigi/redirecturi)

# redirectURI

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Property  
**Availability:** Sign in with Apple JS 1.0+

The URI to which the authorization redirects.

## Declaration

```
attribute string redirectURI;
```

## Mentioned In

- [Configuring your webpage for Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/configuring-your-webpage-for-sign-in-with-apple)
- [Incorporating Sign in with Apple into other platforms](https://developer.apple.com/documentation/signinwithapple/incorporating-sign-in-with-apple-into-other-platforms)

<a id="Discussion"></a>

## Discussion

The URI provided must redirect to a website under your control. Supply this URI to WWDR to enable this feature.

## See Also

### Configuring the client object

- [clientId](clientid.md): The developer’s client identifier, as provided by WWDR.
- [scope](scope.md): The amount of user information requested from Apple.
- [state](state.md): The current state of the request.
- [nonce](nonce.md): The value that associates a client session and an ID token.
- [usePopup](usepopup.md): A Boolean that enables showing the flow in a popup.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/clientconfigi/nonce](https://developer.apple.com/documentation/signinwithapplejs/clientconfigi/nonce)

# nonce

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Property  
**Availability:** Sign in with Apple JS 1.3.1+

The value that associates a client session and an ID token.

## Declaration

```
attribute string nonce;
```

<a id="Discussion"></a>

## Discussion

This value mitigates replay attacks and is present only if passed during the authorization request.

## See Also

### Configuring the client object

- [clientId](clientid.md): The developer’s client identifier, as provided by WWDR.
- [redirectURI](redirecturi.md): The URI to which the authorization redirects.
- [scope](scope.md): The amount of user information requested from Apple.
- [state](state.md): The current state of the request.
- [usePopup](usepopup.md): A Boolean that enables showing the flow in a popup.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/clientconfigi/clientid](https://developer.apple.com/documentation/signinwithapplejs/clientconfigi/clientid)

# clientId

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Property  
**Availability:** Sign in with Apple JS 1.0+

The developer’s client identifier, as provided by WWDR.

## Declaration

```
attribute string clientId;
```

<a id="Discussion"></a>

## Discussion

You must obtain a client identifier from WWDR before you can use Sign In with Apple.

## See Also

### Configuring the client object

- [redirectURI](redirecturi.md): The URI to which the authorization redirects.
- [scope](scope.md): The amount of user information requested from Apple.
- [state](state.md): The current state of the request.
- [nonce](nonce.md): The value that associates a client session and an ID token.
- [usePopup](usepopup.md): A Boolean that enables showing the flow in a popup.

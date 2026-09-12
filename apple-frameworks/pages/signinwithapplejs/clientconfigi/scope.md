> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/clientconfigi/scope](https://developer.apple.com/documentation/signinwithapplejs/clientconfigi/scope)

# scope

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Property  
**Availability:** Sign in with Apple JS 1.0+

The amount of user information requested from Apple.

## Declaration

```
attribute string scope;
```

## Mentioned In

- [Configuring your webpage for Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/configuring-your-webpage-for-sign-in-with-apple)
- [Incorporating Sign in with Apple into other platforms](https://developer.apple.com/documentation/signinwithapple/incorporating-sign-in-with-apple-into-other-platforms)

<a id="Discussion"></a>

## Discussion

You can request the user’s name or email. You can also choose to request both, or neither. Use space separation when requesting multiple scopes; for example, `"scope=name email"`.

## See Also

### Configuring the client object

- [clientId](clientid.md): The developer’s client identifier, as provided by WWDR.
- [redirectURI](redirecturi.md): The URI to which the authorization redirects.
- [state](state.md): The current state of the request.
- [nonce](nonce.md): The value that associates a client session and an ID token.
- [usePopup](usepopup.md): A Boolean that enables showing the flow in a popup.

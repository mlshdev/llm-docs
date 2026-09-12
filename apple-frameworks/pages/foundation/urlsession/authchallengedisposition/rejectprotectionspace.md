> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/authchallengedisposition/rejectprotectionspace](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition/rejectprotectionspace)

# URLSession.AuthChallengeDisposition.rejectProtectionSpace (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reject this challenge, and call the authentication delegate method again with the next authentication protection space. The provided credential parameter is ignored.

## Declaration

```swift
case rejectProtectionSpace
```

<a id="Discussion"></a>

## Discussion

The [URLSession.AuthChallengeDisposition.rejectProtectionSpace](rejectprotectionspace.md) disposition is only appropriate in fairly unusual situations. For example, a Windows server might use both [NSURLAuthenticationMethodNegotiate](../../nsurlauthenticationmethodnegotiate.md) and [NSURLAuthenticationMethodNTLM](../../nsurlauthenticationmethodntlm.md). If your app can only handle NTLM, you would want to reject the Negotiate challenge, in order to then receive the queued NTLM challenge.

However, most apps won’t face this scenario, and if you cannot provide a credential for a certain authentication method, you should usually fall back to the [URLSession.AuthChallengeDisposition.performDefaultHandling](performdefaulthandling.md) disposition instead.

## See Also

### Constants

- [URLSession.AuthChallengeDisposition.useCredential](usecredential.md): Use the specified credential, which may be `nil`.
- [URLSession.AuthChallengeDisposition.performDefaultHandling](performdefaulthandling.md): Use the default handling for the challenge as though this delegate method were not implemented. The provided credential parameter is ignored.
- [URLSession.AuthChallengeDisposition.cancelAuthenticationChallenge](cancelauthenticationchallenge.md): Cancel the entire request. The provided credential parameter is ignored.

# NSURLSessionAuthChallengeRejectProtectionSpace (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reject this challenge, and call the authentication delegate method again with the next authentication protection space. The provided credential parameter is ignored.

## Declaration

```objectivec
NSURLSessionAuthChallengeRejectProtectionSpace
```

<a id="Discussion"></a>

## Discussion

The [NSURLSessionAuthChallengeRejectProtectionSpace](rejectprotectionspace.md) disposition is only appropriate in fairly unusual situations. For example, a Windows server might use both [NSURLAuthenticationMethodNegotiate](../../nsurlauthenticationmethodnegotiate.md) and [NSURLAuthenticationMethodNTLM](../../nsurlauthenticationmethodntlm.md). If your app can only handle NTLM, you would want to reject the Negotiate challenge, in order to then receive the queued NTLM challenge.

However, most apps won’t face this scenario, and if you cannot provide a credential for a certain authentication method, you should usually fall back to the [NSURLSessionAuthChallengePerformDefaultHandling](performdefaulthandling.md) disposition instead.

## See Also

### Constants

- [NSURLSessionAuthChallengeUseCredential](usecredential.md): Use the specified credential, which may be `nil`.
- [NSURLSessionAuthChallengePerformDefaultHandling](performdefaulthandling.md): Use the default handling for the challenge as though this delegate method were not implemented. The provided credential parameter is ignored.
- [NSURLSessionAuthChallengeCancelAuthenticationChallenge](cancelauthenticationchallenge.md): Cancel the entire request. The provided credential parameter is ignored.

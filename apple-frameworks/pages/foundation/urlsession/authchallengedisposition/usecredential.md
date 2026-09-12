> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/authchallengedisposition/usecredential](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition/usecredential)

# URLSession.AuthChallengeDisposition.useCredential (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use the specified credential, which may be `nil`.

## Declaration

```swift
case useCredential
```

## Mentioned In

- [Performing manual server trust authentication](../../performing-manual-server-trust-authentication.md)

## See Also

### Constants

- [URLSession.AuthChallengeDisposition.performDefaultHandling](performdefaulthandling.md): Use the default handling for the challenge as though this delegate method were not implemented. The provided credential parameter is ignored.
- [URLSession.AuthChallengeDisposition.cancelAuthenticationChallenge](cancelauthenticationchallenge.md): Cancel the entire request. The provided credential parameter is ignored.
- [URLSession.AuthChallengeDisposition.rejectProtectionSpace](rejectprotectionspace.md): Reject this challenge, and call the authentication delegate method again with the next authentication protection space. The provided credential parameter is ignored.

# NSURLSessionAuthChallengeUseCredential (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use the specified credential, which may be `nil`.

## Declaration

```objectivec
NSURLSessionAuthChallengeUseCredential
```

## Mentioned In

- [Performing manual server trust authentication](../../performing-manual-server-trust-authentication.md)

## See Also

### Constants

- [NSURLSessionAuthChallengePerformDefaultHandling](performdefaulthandling.md): Use the default handling for the challenge as though this delegate method were not implemented. The provided credential parameter is ignored.
- [NSURLSessionAuthChallengeCancelAuthenticationChallenge](cancelauthenticationchallenge.md): Cancel the entire request. The provided credential parameter is ignored.
- [NSURLSessionAuthChallengeRejectProtectionSpace](rejectprotectionspace.md): Reject this challenge, and call the authentication delegate method again with the next authentication protection space. The provided credential parameter is ignored.

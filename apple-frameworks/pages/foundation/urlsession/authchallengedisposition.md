> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/authchallengedisposition](https://developer.apple.com/documentation/foundation/urlsession/authchallengedisposition)

# URLSession.AuthChallengeDisposition (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants passed by session or task delegates to the provided continuation block in response to an authentication challenge.

## Declaration

```swift
enum AuthChallengeDisposition
```

## Topics

### Constants

- [URLSession.AuthChallengeDisposition.useCredential](authchallengedisposition/usecredential.md): Use the specified credential, which may be `nil`.
- [URLSession.AuthChallengeDisposition.performDefaultHandling](authchallengedisposition/performdefaulthandling.md): Use the default handling for the challenge as though this delegate method were not implemented. The provided credential parameter is ignored.
- [URLSession.AuthChallengeDisposition.cancelAuthenticationChallenge](authchallengedisposition/cancelauthenticationchallenge.md): Cancel the entire request. The provided credential parameter is ignored.
- [URLSession.AuthChallengeDisposition.rejectProtectionSpace](authchallengedisposition/rejectprotectionspace.md): Reject this challenge, and call the authentication delegate method again with the next authentication protection space. The provided credential parameter is ignored.

### Initializers

- [init(rawValue:)](authchallengedisposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling authentication challenges

- [urlSession(\_:didReceive:completionHandler:)](../urlsessiondelegate/urlsession%28__didreceive_completionhandler_%29.md): Requests credentials from the delegate in response to a session-level authentication request from the remote server.

# NSURLSessionAuthChallengeDisposition (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants passed by session or task delegates to the provided continuation block in response to an authentication challenge.

## Declaration

```objectivec
enum NSURLSessionAuthChallengeDisposition : NSInteger;
```

## Topics

### Constants

- [NSURLSessionAuthChallengeUseCredential](authchallengedisposition/usecredential.md): Use the specified credential, which may be `nil`.
- [NSURLSessionAuthChallengePerformDefaultHandling](authchallengedisposition/performdefaulthandling.md): Use the default handling for the challenge as though this delegate method were not implemented. The provided credential parameter is ignored.
- [NSURLSessionAuthChallengeCancelAuthenticationChallenge](authchallengedisposition/cancelauthenticationchallenge.md): Cancel the entire request. The provided credential parameter is ignored.
- [NSURLSessionAuthChallengeRejectProtectionSpace](authchallengedisposition/rejectprotectionspace.md): Reject this challenge, and call the authentication delegate method again with the next authentication protection space. The provided credential parameter is ignored.

## See Also

### Handling authentication challenges

- [URLSession:didReceiveChallenge:completionHandler:](../urlsessiondelegate/urlsession%28__didreceive_completionhandler_%29.md): Requests credentials from the delegate in response to a session-level authentication request from the remote server.

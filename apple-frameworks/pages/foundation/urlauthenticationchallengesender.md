> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallengesender](https://developer.apple.com/documentation/foundation/urlauthenticationchallengesender)

# URLAuthenticationChallengeSender (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The `URLAuthenticationChallengeSender` protocol represents the interface that the sender of an authentication challenge must implement.

## Declaration

```swift
protocol URLAuthenticationChallengeSender : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

The methods in the protocol are generally sent by a delegate in response to receiving a [connection(\_:didReceive:)](nsurlconnectiondelegate/connection%28__didreceive_%29.md): or [download(\_:didReceive:)](nsurldownloaddelegate/download%28__didreceive_%29-1pc0v.md):. The different methods provide different ways of responding to authentication challenges.

> **Important**

>  This protocol is *only* for use with the legacy [NSURLConnection](nsurlconnection.md) and [NSURLDownload](nsurldownload.md) classes. It should not be used with [URLSession](urlsession.md)-based code, for which you respond to authentication challenges by passing [URLSession.AuthChallengeDisposition](urlsession/authchallengedisposition.md) constants to the provided completion handler blocks.

## Topics

### Protocol Methods

- [cancel(\_:)](urlauthenticationchallengesender/cancel%28__%29.md): Cancels a given authentication challenge.
- [continueWithoutCredential(for:)](urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [use(\_:for:)](urlauthenticationchallengesender/use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [performDefaultHandling(for:)](urlauthenticationchallengesender/performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
- [rejectProtectionSpaceAndContinue(with:)](urlauthenticationchallengesender/rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSURLAuthenticationChallengeSender (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The `URLAuthenticationChallengeSender` protocol represents the interface that the sender of an authentication challenge must implement.

## Declaration

```objectivec
@protocol NSURLAuthenticationChallengeSender <NSObject>
```

<a id="overview"></a>

## Overview

The methods in the protocol are generally sent by a delegate in response to receiving a [connection:didReceiveAuthenticationChallenge:](nsurlconnectiondelegate/connection%28__didreceive_%29.md): or [download:didReceiveAuthenticationChallenge:](nsurldownloaddelegate/download%28__didreceive_%29-1pc0v.md):. The different methods provide different ways of responding to authentication challenges.

> **Important**

>  This protocol is *only* for use with the legacy [NSURLConnection](nsurlconnection.md) and [NSURLDownload](nsurldownload.md) classes. It should not be used with [NSURLSession](urlsession.md)-based code, for which you respond to authentication challenges by passing [NSURLSessionAuthChallengeDisposition](urlsession/authchallengedisposition.md) constants to the provided completion handler blocks.

## Topics

### Protocol Methods

- [cancelAuthenticationChallenge:](urlauthenticationchallengesender/cancel%28__%29.md): Cancels a given authentication challenge.
- [continueWithoutCredentialForAuthenticationChallenge:](urlauthenticationchallengesender/continuewithoutcredential%28for_%29.md): Attempt to continue downloading a request without providing a credential for a given challenge.
- [useCredential:forAuthenticationChallenge:](urlauthenticationchallengesender/use%28__for_%29.md): Attempt to use a given credential for a given authentication challenge.
- [performDefaultHandlingForAuthenticationChallenge:](urlauthenticationchallengesender/performdefaulthandling%28for_%29.md): Causes the system-provided default behavior to be used.
- [rejectProtectionSpaceAndContinueWithChallenge:](urlauthenticationchallengesender/rejectprotectionspaceandcontinue%28with_%29.md): Rejects the currently supplied protection space.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

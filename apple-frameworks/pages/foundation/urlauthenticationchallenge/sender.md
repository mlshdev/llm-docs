> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallenge/sender](https://developer.apple.com/documentation/foundation/urlauthenticationchallenge/sender)

# sender (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The sender of the challenge.

## Declaration

```swift
var sender: (any URLAuthenticationChallengeSender)? { get }
```

<a id="Discussion"></a>

## Discussion

If you are using the [URLSession](../urlsession.md) API, this value is purely informational, because you *must* respond to authentication challenges in your [URLSessionDelegate](../urlsessiondelegate.md) or [URLSessionTaskDelegate](../urlsessiontaskdelegate.md) implementations, by passing [URLSession.AuthChallengeDisposition](../urlsession/authchallengedisposition.md) constants to the provided completion handler blocks.

However, if you are using the legacy `NSURLConnection` or `NSURLDownload` API, you use this object directly in your authentication handler delegate method. With these APIs, after you finish processing the authentication challenge, you respond by calling methods defined in the [URLAuthenticationChallengeSender](../urlauthenticationchallengesender.md) protocol on this sender.

> **Warning**

>  Do not call methods directly on this object if you are using the [URLSession](../urlsession.md) API.

# sender (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The sender of the challenge.

## Declaration

```objectivec
@property (retain, readonly, nullable) id<NSURLAuthenticationChallengeSender> sender;
```

<a id="Discussion"></a>

## Discussion

If you are using the [NSURLSession](../urlsession.md) API, this value is purely informational, because you *must* respond to authentication challenges in your [NSURLSessionDelegate](../urlsessiondelegate.md) or [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md) implementations, by passing [NSURLSessionAuthChallengeDisposition](../urlsession/authchallengedisposition.md) constants to the provided completion handler blocks.

However, if you are using the legacy `NSURLConnection` or `NSURLDownload` API, you use this object directly in your authentication handler delegate method. With these APIs, after you finish processing the authentication challenge, you respond by calling methods defined in the [NSURLAuthenticationChallengeSender](../urlauthenticationchallengesender.md) protocol on this sender.

> **Warning**

>  Do not call methods directly on this object if you are using the [NSURLSession](../urlsession.md) API.

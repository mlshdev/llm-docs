> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlerrorfailingurlstringerrorkey](https://developer.apple.com/documentation/foundation/nsurlerrorfailingurlstringerrorkey)

# NSURLErrorFailingURLStringErrorKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 18.4) · iPadOS 4.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.6+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

The URL which caused a load to fail.

> Use NSURLErrorFailingURLErrorKey instead

## Declaration

```swift
let NSURLErrorFailingURLStringErrorKey: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an [NSString](nsstring.md) object.

This constant supersedes [NSErrorFailingURLStringKey](nserrorfailingurlstringkey.md), which was deprecated starting in macOS 10.6.  Both constants refer to the same value for backward-compatibility, but this symbol name has a better prefix.

## See Also

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](urlerror/networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.

# NSURLErrorFailingURLStringErrorKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 18.4) · iPadOS 4.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.6+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

The URL which caused a load to fail.

> Use NSURLErrorFailingURLErrorKey instead

## Declaration

```objectivec
extern NSString * const NSURLErrorFailingURLStringErrorKey;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an [NSString](nsstring.md) object.

This constant supersedes [NSErrorFailingURLStringKey](nserrorfailingurlstringkey.md), which was deprecated starting in macOS 10.6.  Both constants refer to the same value for backward-compatibility, but this symbol name has a better prefix.

## See Also

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
- [NSURLErrorNetworkUnavailableReason](nsurlerrornetworkunavailablereason.md): An enumeration of reasons why a task couldn’t satisfy networking constraints.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlerrorfailingurlerrorkey](https://developer.apple.com/documentation/foundation/nsurlerrorfailingurlerrorkey)

# NSURLErrorFailingURLErrorKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL which caused a load to fail.

## Declaration

```swift
let NSURLErrorFailingURLErrorKey: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an [NSURL](nsurl.md) instance.

## See Also

### Keys

- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](urlerror/networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.

# NSURLErrorFailingURLErrorKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL which caused a load to fail.

## Declaration

```objectivec
extern NSString * const NSURLErrorFailingURLErrorKey;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an [NSURL](nsurl.md) instance.

## See Also

### Keys

- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
- [NSURLErrorNetworkUnavailableReason](nsurlerrornetworkunavailablereason.md): An enumeration of reasons why a task couldn’t satisfy networking constraints.

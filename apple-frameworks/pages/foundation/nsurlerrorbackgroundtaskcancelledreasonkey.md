> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlerrorbackgroundtaskcancelledreasonkey](https://developer.apple.com/documentation/foundation/nsurlerrorbackgroundtaskcancelledreasonkey)

# NSURLErrorBackgroundTaskCancelledReasonKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key in the error dictionary that provides the reason for canceling a background task.

## Declaration

```swift
let NSURLErrorBackgroundTaskCancelledReasonKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSNumber](nsnumber.md). For a list of possible values, see URL Session Background Task Cancellation Reasons.

## See Also

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](urlerror/networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.

# NSURLErrorBackgroundTaskCancelledReasonKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key in the error dictionary that provides the reason for canceling a background task.

## Declaration

```objectivec
extern NSString * const NSURLErrorBackgroundTaskCancelledReasonKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSNumber](nsnumber.md). For a list of possible values, see URL Session Background Task Cancellation Reasons.

## See Also

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
- [NSURLErrorNetworkUnavailableReason](nsurlerrornetworkunavailablereason.md): An enumeration of reasons why a task couldn’t satisfy networking constraints.

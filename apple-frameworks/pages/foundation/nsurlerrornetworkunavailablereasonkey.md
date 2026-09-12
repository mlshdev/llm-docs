> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlerrornetworkunavailablereasonkey](https://developer.apple.com/documentation/foundation/nsurlerrornetworkunavailablereasonkey)

# NSURLErrorNetworkUnavailableReasonKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The reason the network was unavailable for a task.

## Declaration

```swift
let NSURLErrorNetworkUnavailableReasonKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSNumber](nsnumber.md). For possible values, see [NSURLErrorNetworkUnavailableReason](nsurlerrornetworkunavailablereason.md).

## See Also

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [URLError.NetworkUnavailableReason](urlerror/networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.

# NSURLErrorNetworkUnavailableReasonKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The reason the network was unavailable for a task.

## Declaration

```objectivec
extern NSErrorUserInfoKey const NSURLErrorNetworkUnavailableReasonKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSNumber](nsnumber.md). For possible values, see [NSURLErrorNetworkUnavailableReason](nsurlerrornetworkunavailablereason.md).

## See Also

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReason](nsurlerrornetworkunavailablereason.md): An enumeration of reasons why a task couldn’t satisfy networking constraints.

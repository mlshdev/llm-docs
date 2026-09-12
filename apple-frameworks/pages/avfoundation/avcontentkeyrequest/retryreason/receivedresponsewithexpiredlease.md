> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/retryreason/receivedresponsewithexpiredlease](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/retryreason/receivedresponsewithexpiredlease)

# receivedResponseWithExpiredLease (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A key response with an expired lease that was set on the previous content key request.

## Declaration

```swift
static let receivedResponseWithExpiredLease: AVContentKeyRequest.RetryReason
```

## See Also

### Reasons for content key request retry

- [receivedObsoleteContentKey](receivedobsoletecontentkey.md): An obsolete key response that was set on the previous content key request.
- [timedOut](timedout.md): A key response that wasn’t set soon enough.

# AVContentKeyRequestRetryReasonReceivedResponseWithExpiredLease (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A key response with an expired lease that was set on the previous content key request.

## Declaration

```objectivec
extern AVContentKeyRequestRetryReason const AVContentKeyRequestRetryReasonReceivedResponseWithExpiredLease;
```

## See Also

### Reasons for content key request retry

- [AVContentKeyRequestRetryReasonReceivedObsoleteContentKey](receivedobsoletecontentkey.md): An obsolete key response that was set on the previous content key request.
- [AVContentKeyRequestRetryReasonTimedOut](timedout.md): A key response that wasn’t set soon enough.

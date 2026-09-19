> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/retryreason/timedout

# timedOut (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A key response that wasn’t set soon enough.

## Declaration

```swift
static let timedOut: AVContentKeyRequest.RetryReason
```

<a id="Discussion"></a>

## Discussion

The response timed out because the initial request or response (or both) took too long, or because the lease expired during the request.

## See Also

### Reasons for content key request retry

- [receivedObsoleteContentKey](receivedobsoletecontentkey.md): An obsolete key response that was set on the previous content key request.
- [receivedResponseWithExpiredLease](receivedresponsewithexpiredlease.md): A key response with an expired lease that was set on the previous content key request.

# AVContentKeyRequestRetryReasonTimedOut (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A key response that wasn’t set soon enough.

## Declaration

```objectivec
extern AVContentKeyRequestRetryReason const AVContentKeyRequestRetryReasonTimedOut;
```

<a id="Discussion"></a>

## Discussion

The response timed out because the initial request or response (or both) took too long, or because the lease expired during the request.

## See Also

### Reasons for content key request retry

- [AVContentKeyRequestRetryReasonReceivedObsoleteContentKey](receivedobsoletecontentkey.md): An obsolete key response that was set on the previous content key request.
- [AVContentKeyRequestRetryReasonReceivedResponseWithExpiredLease](receivedresponsewithexpiredlease.md): A key response with an expired lease that was set on the previous content key request.

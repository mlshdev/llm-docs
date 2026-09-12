> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/retryreason](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/retryreason)

# AVContentKeyRequest.RetryReason (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The reason for asking the client to retry a content key request.

## Declaration

```swift
struct RetryReason
```

## Topics

### Reasons for content key request retry

- [receivedObsoleteContentKey](retryreason/receivedobsoletecontentkey.md): An obsolete key response that was set on the previous content key request.
- [receivedResponseWithExpiredLease](retryreason/receivedresponsewithexpiredlease.md): A key response with an expired lease that was set on the previous content key request.
- [timedOut](retryreason/timedout.md): A key response that wasn’t set soon enough.

### Initializers

- [init(rawValue:)](retryreason/init%28rawvalue_%29.md): Creates a retry reason with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a request

- [contentKey](contentkey.md): The generated content key.
- [contentKeySpecifier](contentkeyspecifier.md): The requested content key specifier.
- [options](options.md): A dictionary of options used to initialize key loading.

# AVContentKeyRequestRetryReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The reason for asking the client to retry a content key request.

## Declaration

```objectivec
typedef NSString * AVContentKeyRequestRetryReason;
```

## Topics

### Reasons for content key request retry

- [AVContentKeyRequestRetryReasonReceivedObsoleteContentKey](retryreason/receivedobsoletecontentkey.md): An obsolete key response that was set on the previous content key request.
- [AVContentKeyRequestRetryReasonReceivedResponseWithExpiredLease](retryreason/receivedresponsewithexpiredlease.md): A key response with an expired lease that was set on the previous content key request.
- [AVContentKeyRequestRetryReasonTimedOut](retryreason/timedout.md): A key response that wasn’t set soon enough.

## See Also

### Inspecting a request

- [contentKey](contentkey.md): The generated content key.
- [contentKeySpecifier](contentkeyspecifier.md): The requested content key specifier.
- [options](options.md): A dictionary of options used to initialize key loading.

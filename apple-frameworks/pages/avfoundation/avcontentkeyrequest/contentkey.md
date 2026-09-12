> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/contentkey](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/contentkey)

# contentKey (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

The generated content key.

## Declaration

```swift
var contentKey: AVContentKey? { get }
```

## See Also

### Inspecting a request

- [contentKeySpecifier](contentkeyspecifier.md): The requested content key specifier.
- [options](options.md): A dictionary of options used to initialize key loading.
- [AVContentKeyRequest.RetryReason](retryreason.md): The reason for asking the client to retry a content key request.

# contentKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

The generated content key.

## Declaration

```objectivec
@property (readonly, nullable) AVContentKey * contentKey;
```

## See Also

### Inspecting a request

- [contentKeySpecifier](contentkeyspecifier.md): The requested content key specifier.
- [options](options.md): A dictionary of options used to initialize key loading.
- [AVContentKeyRequestRetryReason](retryreason.md): The reason for asking the client to retry a content key request.

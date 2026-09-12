> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/contentkeyspecifier](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/contentkeyspecifier)

# contentKeySpecifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

The requested content key specifier.

## Declaration

```swift
var contentKeySpecifier: AVContentKeySpecifier { get }
```

## See Also

### Inspecting a request

- [contentKey](contentkey.md): The generated content key.
- [options](options.md): A dictionary of options used to initialize key loading.
- [AVContentKeyRequest.RetryReason](retryreason.md): The reason for asking the client to retry a content key request.

# contentKeySpecifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

The requested content key specifier.

## Declaration

```objectivec
@property (readonly) AVContentKeySpecifier * contentKeySpecifier;
```

## See Also

### Inspecting a request

- [contentKey](contentkey.md): The generated content key.
- [options](options.md): A dictionary of options used to initialize key loading.
- [AVContentKeyRequestRetryReason](retryreason.md): The reason for asking the client to retry a content key request.

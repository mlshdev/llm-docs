> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/options](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/options)

# options (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 7.0+

A dictionary of options used to initialize key loading.

## Declaration

```swift
var options: [String : any Sendable] { get }
```

## See Also

### Inspecting a request

- [contentKey](contentkey.md): The generated content key.
- [contentKeySpecifier](contentkeyspecifier.md): The requested content key specifier.
- [AVContentKeyRequest.RetryReason](retryreason.md): The reason for asking the client to retry a content key request.

# options (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 7.0+

A dictionary of options used to initialize key loading.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * options;
```

## See Also

### Inspecting a request

- [contentKey](contentkey.md): The generated content key.
- [contentKeySpecifier](contentkeyspecifier.md): The requested content key specifier.
- [AVContentKeyRequestRetryReason](retryreason.md): The reason for asking the client to retry a content key request.

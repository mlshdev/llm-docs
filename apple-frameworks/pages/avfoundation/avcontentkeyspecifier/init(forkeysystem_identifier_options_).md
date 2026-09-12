> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyspecifier/init(forkeysystem:identifier:options:)](https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier/init(forkeysystem:identifier:options:))

# init(forKeySystem:identifier:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Creates a content key specifier.

## Declaration

```swift
init(forKeySystem keySystem: AVContentKeySystem, identifier contentKeyIdentifier: Any, options: [String : Any] = [:])
```

## Parameters

- `keySystem`: The key system to use to generate content keys.
- `contentKeyIdentifier`: The container and protocol-specific key identifier.
- `options`: Additional information necessary to obtain the key. Pass `nil` to indicate no additional options.

# initForKeySystem:identifier:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Creates a content key specifier.

## Declaration

```objectivec
- (instancetype) initForKeySystem:(AVContentKeySystem) keySystem identifier:(id) contentKeyIdentifier options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `keySystem`: The key system to use to generate content keys.
- `contentKeyIdentifier`: The container and protocol-specific key identifier.
- `options`: Additional information necessary to obtain the key. Pass `nil` to indicate no additional options.

## See Also

### Creating a specifier

- [contentKeySpecifierForKeySystem:identifier:options:](contentkeyspecifierforkeysystem_identifier_options_.md): A convenience initializer to create a content key specifier.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyspecifier/contentkeyspecifierforkeysystem:identifier:options:](https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier/contentkeyspecifierforkeysystem:identifier:options:)

# contentKeySpecifierForKeySystem:identifier:options:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A convenience initializer to create a content key specifier.

## Declaration

```objectivec
+ (instancetype) contentKeySpecifierForKeySystem:(AVContentKeySystem) keySystem identifier:(id) contentKeyIdentifier options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `keySystem`: The key system to use to generate content keys.
- `contentKeyIdentifier`: The container and protocol-specific key identifier.
- `options`: Additional information necessary to obtain the key. Pass `nil` to indicate no additional options.

## See Also

### Creating a specifier

- [initForKeySystem:identifier:options:](init%28forkeysystem_identifier_options_%29.md): Creates a content key specifier.

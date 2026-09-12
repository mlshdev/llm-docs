> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyspecifier/options](https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier/options)

# options (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A dictionary of options with which you initialized the specifier.

## Declaration

```swift
var options: [String : any Sendable] { get }
```

## See Also

### Inspecting a specifier

- [identifier](identifier.md): The container and protocol-specific key identifier.
- [keySystem](keysystem.md): The key system that generates content keys.

# options (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A dictionary of options with which you initialized the specifier.

## Declaration

```objectivec
@property (readonly) NSDictionary<NSString *,id> * options;
```

## See Also

### Inspecting a specifier

- [identifier](identifier.md): The container and protocol-specific key identifier.
- [keySystem](keysystem.md): The key system that generates content keys.

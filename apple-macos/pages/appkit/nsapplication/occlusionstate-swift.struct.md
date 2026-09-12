> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/occlusionstate-swift.struct](https://developer.apple.com/documentation/appkit/nsapplication/occlusionstate-swift.struct)

# NSApplication.OcclusionState (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.9+

This constant indicates whether at least part of any window owned by this app is visible.

## Declaration

```swift
struct OcclusionState
```

## Topics

### Constants

- [visible](occlusionstate-swift.struct/visible.md): If set, at least part of any window owned by this app is visible.

### Initializers

- [init(rawValue:)](occlusionstate-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the Occlusion State

- [occlusionState](occlusionstate-swift.property.md): The occlusion state of the app.

# NSApplicationOcclusionState (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

This constant indicates whether at least part of any window owned by this app is visible.

## Declaration

```objectivec
enum NSApplicationOcclusionState : NSUInteger;
```

## Topics

### Constants

- [NSApplicationOcclusionStateVisible](occlusionstate-swift.struct/visible.md): If set, at least part of any window owned by this app is visible.

## See Also

### Getting the Occlusion State

- [occlusionState](occlusionstate-swift.property.md): The occlusion state of the app.

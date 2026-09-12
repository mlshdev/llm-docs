> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/frameresizedirection/set](https://developer.apple.com/documentation/appkit/nscursor/frameresizedirection/set)

# NSCursor.FrameResizeDirection.Set

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

An efficient set of frame resize directions.

## Declaration

```swift
struct Set
```

## Topics

### Initializers

- [init(\_:)](set/init%28__%29.md): Creates a set of directions containing only the specified direction.

### Instance Methods

- [contains(\_:)](set/contains%28__%29.md)
- [insert(\_:)](set/insert%28__%29.md)
- [remove(\_:)](set/remove%28__%29.md)
- [update(with:)](set/update%28with_%29.md)

### Type Properties

- [all](set/all.md): A set containing the inward and outward resizing directions.
- [inward](set/inward.md): A set containing only the inward resize direction.
- [outward](set/outward.md): A set containing only the outward resize direction.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

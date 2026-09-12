> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlist/options](https://developer.apple.com/documentation/appkit/nstextlist/options)

# NSTextList.Options (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.0+

Values that available options for text list items.

## Declaration

```swift
struct Options
```

## Topics

### Options

- [prependEnclosingMarker](options/prependenclosingmarker.md): Specifies that a nested list should include the marker for its enclosing superlist before its own marker.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md): Returns a new set of text list options using the raw value you specify.

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

### Getting list options

- [isOrdered](isordered.md)
- [listOptions](listoptions.md): Returns the list options mask value of the receiver.
- [includesTextListMarkers](includestextlistmarkers.md): A Boolean value that indicates whether TextKit includes text list markers in the contents.

# NSTextListOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Values that available options for text list items.

## Declaration

```objectivec
enum NSTextListOptions : NSUInteger;
```

## Topics

### Options

- [NSTextListPrependEnclosingMarker](options/prependenclosingmarker.md): Specifies that a nested list should include the marker for its enclosing superlist before its own marker.

## See Also

### Getting list options

- [ordered](isordered.md)
- [listOptions](listoptions.md): Returns the list options mask value of the receiver.
- [includesTextListMarkers](includestextlistmarkers.md): A Boolean value that indicates whether TextKit includes text list markers in the contents.

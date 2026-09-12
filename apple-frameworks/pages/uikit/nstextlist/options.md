> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlist/options](https://developer.apple.com/documentation/uikit/nstextlist/options)

# NSTextList.Options (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

- [isOrdered](isordered.md): A Boolean value that indicates whether the list is ordered.
- [listOptions](listoptions.md): Returns the list options mask value of the receiver.

# NSTextListOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

- [ordered](isordered.md): A Boolean value that indicates whether the list is ordered.
- [listOptions](listoptions.md): Returns the list options mask value of the receiver.

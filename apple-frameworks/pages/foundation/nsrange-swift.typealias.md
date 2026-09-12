> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrange-swift.typealias](https://developer.apple.com/documentation/foundation/nsrange-swift.typealias)

# NSRange

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure used to describe a portion of a series, such as characters in a string or objects in an array.

## Declaration

```swift
typealias NSRange = _NSRange
```

<a id="Discussion"></a>

## Discussion

Foundation functions that operate on ranges include the following:

- [NSEqualRanges(\_:\_:)](nsequalranges%28____%29.md)
- [NSIntersectionRange(\_:\_:)](nsintersectionrange%28____%29.md)
- [NSLocationInRange(\_:\_:)](nslocationinrange%28____%29.md)
- [NSMakeRange(\_:\_:)](nsmakerange%28____%29.md)
- [NSMaxRange(\_:)](nsmaxrange%28__%29.md)
- [NSRangeFromString(\_:)](nsrangefromstring%28__%29.md)
- [NSStringFromRange(\_:)](nsstringfromrange%28__%29.md)
- [NSUnionRange(\_:\_:)](nsunionrange%28____%29.md)

## Topics

### Creating a range

- [init()](nsrange-swift.typealias/init%28%29.md): Creates an empty range.
- [init(location:length:)](nsrange-swift.typealias/init%28location_length_%29.md): Creates a range with the given location and length.

### Accessing range properties

- [location](nsrange-swift.typealias/location.md): The index of the first member of the range.
- [length](nsrange-swift.typealias/length.md): The number of items in the range.

### Managing ranges

- [NSEqualRanges(\_:\_:)](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange(\_:\_:)](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSLocationInRange(\_:\_:)](nslocationinrange%28____%29.md): Returns a Boolean value that indicates whether a specified position is in a given range.
- [NSMakeRange(\_:\_:)](nsmakerange%28____%29.md): Creates a new NSRange from the specified values.
- [NSMaxRange(\_:)](nsmaxrange%28__%29.md): Returns the sum of the location and length of the range.
- [NSRangeFromString(\_:)](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange(\_:)](nsstringfromrange%28__%29.md): Returns a string representation of a range.
- [NSUnionRange(\_:\_:)](nsunionrange%28____%29.md): Returns the union of the specified ranges.

### Related types

- [NSRangePointer](nsrangepointer.md): Type indicating a parameter is a pointer to an `NSRange` structure.
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrange-c.struct](https://developer.apple.com/documentation/foundation/nsrange-c.struct)

# NSRange

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure used to describe a portion of a series, such as characters in a string or objects in an array.

## Declaration

```objectivec
typedef struct _NSRange { ... } NSRange;
```

<a id="Discussion"></a>

## Discussion

Foundation functions that operate on ranges include the following:

- [NSEqualRanges](nsequalranges%28____%29.md)
- [NSIntersectionRange](nsintersectionrange%28____%29.md)
- [NSLocationInRange](nslocationinrange%28____%29.md)
- [NSMakeRange](nsmakerange%28____%29.md)
- [NSMaxRange](nsmaxrange%28__%29.md)
- [NSRangeFromString](nsrangefromstring%28__%29.md)
- [NSStringFromRange](nsstringfromrange%28__%29.md)
- [NSUnionRange](nsunionrange%28____%29.md)

## Topics

### Managing ranges

- [NSEqualRanges](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSLocationInRange](nslocationinrange%28____%29.md): Returns a Boolean value that indicates whether a specified position is in a given range.
- [NSMakeRange](nsmakerange%28____%29.md): Creates a new NSRange from the specified values.
- [NSMaxRange](nsmaxrange%28__%29.md): Returns the sum of the location and length of the range.
- [NSRangeFromString](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange](nsstringfromrange%28__%29.md): Returns a string representation of a range.
- [NSUnionRange](nsunionrange%28____%29.md): Returns the union of the specified ranges.

### Related types

- [NSRangePointer](nsrangepointer.md): Type indicating a parameter is a pointer to an `NSRange` structure.
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.

### Instance Properties

- [length](nsrange-c.struct/length.md)
- [location](nsrange-c.struct/location.md)

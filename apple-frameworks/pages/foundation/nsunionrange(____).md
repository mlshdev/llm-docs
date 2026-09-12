> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunionrange(_:_:)](https://developer.apple.com/documentation/foundation/nsunionrange(_:_:))

# NSUnionRange(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the union of the specified ranges.

## Declaration

```swift
func NSUnionRange(_ range1: NSRange, _ range2: NSRange) -> NSRange
```

<a id="return-value"></a>

## Return Value

A range covering all indices in and between `range1` and `range2`. If one range is completely contained in the other, the returned range is equal to the larger range.

## See Also

### Managing ranges

- [NSEqualRanges(\_:\_:)](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange(\_:\_:)](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSLocationInRange(\_:\_:)](nslocationinrange%28____%29.md): Returns a Boolean value that indicates whether a specified position is in a given range.
- [NSMakeRange(\_:\_:)](nsmakerange%28____%29.md): Creates a new NSRange from the specified values.
- [NSMaxRange(\_:)](nsmaxrange%28__%29.md): Returns the sum of the location and length of the range.
- [NSRangeFromString(\_:)](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange(\_:)](nsstringfromrange%28__%29.md): Returns a string representation of a range.

# NSUnionRange (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the union of the specified ranges.

## Declaration

```objectivec
extern NSRange NSUnionRange(NSRange range1, NSRange range2);
```

<a id="return-value"></a>

## Return Value

A range covering all indices in and between `range1` and `range2`. If one range is completely contained in the other, the returned range is equal to the larger range.

## See Also

### Managing ranges

- [NSEqualRanges](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSLocationInRange](nslocationinrange%28____%29.md): Returns a Boolean value that indicates whether a specified position is in a given range.
- [NSMakeRange](nsmakerange%28____%29.md): Creates a new NSRange from the specified values.
- [NSMaxRange](nsmaxrange%28__%29.md): Returns the sum of the location and length of the range.
- [NSRangeFromString](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange](nsstringfromrange%28__%29.md): Returns a string representation of a range.

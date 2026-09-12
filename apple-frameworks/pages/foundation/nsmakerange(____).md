> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmakerange(_:_:)](https://developer.apple.com/documentation/foundation/nsmakerange(_:_:))

# NSMakeRange(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new NSRange from the specified values.

## Declaration

```swift
func NSMakeRange(_ loc: Int, _ len: Int) -> NSRange
```

<a id="return-value"></a>

## Return Value

An `NSRange` with location `location` and length `length`.

## See Also

### Managing ranges

- [NSEqualRanges(\_:\_:)](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange(\_:\_:)](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSLocationInRange(\_:\_:)](nslocationinrange%28____%29.md): Returns a Boolean value that indicates whether a specified position is in a given range.
- [NSMaxRange(\_:)](nsmaxrange%28__%29.md): Returns the sum of the location and length of the range.
- [NSRangeFromString(\_:)](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange(\_:)](nsstringfromrange%28__%29.md): Returns a string representation of a range.
- [NSUnionRange(\_:\_:)](nsunionrange%28____%29.md): Returns the union of the specified ranges.

# NSMakeRange (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new NSRange from the specified values.

## Declaration

```objectivec
static NSRange NSMakeRange(NSUInteger loc, NSUInteger len);
```

<a id="return-value"></a>

## Return Value

An `NSRange` with location `location` and length `length`.

## See Also

### Managing ranges

- [NSEqualRanges](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSLocationInRange](nslocationinrange%28____%29.md): Returns a Boolean value that indicates whether a specified position is in a given range.
- [NSMaxRange](nsmaxrange%28__%29.md): Returns the sum of the location and length of the range.
- [NSRangeFromString](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange](nsstringfromrange%28__%29.md): Returns a string representation of a range.
- [NSUnionRange](nsunionrange%28____%29.md): Returns the union of the specified ranges.

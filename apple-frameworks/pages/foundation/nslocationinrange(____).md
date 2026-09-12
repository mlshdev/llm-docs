> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocationinrange(_:_:)](https://developer.apple.com/documentation/foundation/nslocationinrange(_:_:))

# NSLocationInRange(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a specified position is in a given range.

## Declaration

```swift
func NSLocationInRange(_ loc: Int, _ range: NSRange) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `loc` lies within `range`—that is, if it’s greater than or equal to `range.location` and less than `range.location` plus `range.length`.

## See Also

### Managing ranges

- [NSEqualRanges(\_:\_:)](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange(\_:\_:)](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSMakeRange(\_:\_:)](nsmakerange%28____%29.md): Creates a new NSRange from the specified values.
- [NSMaxRange(\_:)](nsmaxrange%28__%29.md): Returns the sum of the location and length of the range.
- [NSRangeFromString(\_:)](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange(\_:)](nsstringfromrange%28__%29.md): Returns a string representation of a range.
- [NSUnionRange(\_:\_:)](nsunionrange%28____%29.md): Returns the union of the specified ranges.

# NSLocationInRange (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a specified position is in a given range.

## Declaration

```objectivec
static BOOL NSLocationInRange(NSUInteger loc, NSRange range);
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `loc` lies within `range`—that is, if it’s greater than or equal to `range.location` and less than `range.location` plus `range.length`.

## See Also

### Managing ranges

- [NSEqualRanges](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSMakeRange](nsmakerange%28____%29.md): Creates a new NSRange from the specified values.
- [NSMaxRange](nsmaxrange%28__%29.md): Returns the sum of the location and length of the range.
- [NSRangeFromString](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange](nsstringfromrange%28__%29.md): Returns a string representation of a range.
- [NSUnionRange](nsunionrange%28____%29.md): Returns the union of the specified ranges.

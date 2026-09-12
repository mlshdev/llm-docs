> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaxrange(_:)](https://developer.apple.com/documentation/foundation/nsmaxrange(_:))

# NSMaxRange(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the sum of the location and length of the range.

## Declaration

```swift
func NSMaxRange(_ range: NSRange) -> Int
```

<a id="return-value"></a>

## Return Value

The sum of the location and length of the range—that is, `range.location` \+ `range.length`.

## See Also

### Managing ranges

- [NSEqualRanges(\_:\_:)](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange(\_:\_:)](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSLocationInRange(\_:\_:)](nslocationinrange%28____%29.md): Returns a Boolean value that indicates whether a specified position is in a given range.
- [NSMakeRange(\_:\_:)](nsmakerange%28____%29.md): Creates a new NSRange from the specified values.
- [NSRangeFromString(\_:)](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange(\_:)](nsstringfromrange%28__%29.md): Returns a string representation of a range.
- [NSUnionRange(\_:\_:)](nsunionrange%28____%29.md): Returns the union of the specified ranges.

# NSMaxRange (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the sum of the location and length of the range.

## Declaration

```objectivec
static NSUInteger NSMaxRange(NSRange range);
```

<a id="return-value"></a>

## Return Value

The sum of the location and length of the range—that is, `range.location` \+ `range.length`.

## See Also

### Managing ranges

- [NSEqualRanges](nsequalranges%28____%29.md): Returns a Boolean value that indicates whether two given ranges are equal.
- [NSIntersectionRange](nsintersectionrange%28____%29.md): Returns the intersection of the specified ranges.
- [NSLocationInRange](nslocationinrange%28____%29.md): Returns a Boolean value that indicates whether a specified position is in a given range.
- [NSMakeRange](nsmakerange%28____%29.md): Creates a new NSRange from the specified values.
- [NSRangeFromString](nsrangefromstring%28__%29.md): Returns a range from a textual representation.
- [NSStringFromRange](nsstringfromrange%28__%29.md): Returns a string representation of a range.
- [NSUnionRange](nsunionrange%28____%29.md): Returns the union of the specified ranges.

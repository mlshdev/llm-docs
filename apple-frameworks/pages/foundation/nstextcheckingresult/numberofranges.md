> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/numberofranges](https://developer.apple.com/documentation/foundation/nstextcheckingresult/numberofranges)

# numberOfRanges (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of ranges.

## Declaration

```swift
var numberOfRanges: Int { get }
```

<a id="Discussion"></a>

## Discussion

A result must have at least one range, but may optionally have more (for example, to represent regular expression capture groups).

Passing [range(at:)](range%28at_%29.md) the value `0` always returns the value of the the [range](range.md) property.  Additional ranges, if any, will have indexes from `1` to ```numberOfRanges``-1```.

## See Also

### Text Checking Type Range and Type

- [range](range.md): Returns the range of the result that the receiver represents.
- [resultType](resulttype.md): Returns the text checking result type that the receiver represents.
- [range(at:)](range%28at_%29.md): Returns the result type that the range represents.

# numberOfRanges (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of ranges.

## Declaration

```objectivec
@property (readonly) NSUInteger numberOfRanges;
```

<a id="Discussion"></a>

## Discussion

A result must have at least one range, but may optionally have more (for example, to represent regular expression capture groups).

Passing [rangeAtIndex:](range%28at_%29.md) the value `0` always returns the value of the the [range](range.md) property.  Additional ranges, if any, will have indexes from `1` to ```numberOfRanges``-1```.

## See Also

### Text Checking Type Range and Type

- [range](range.md): Returns the range of the result that the receiver represents.
- [resultType](resulttype.md): Returns the text checking result type that the receiver represents.
- [rangeAtIndex:](range%28at_%29.md): Returns the result type that the range represents.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/range(at:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/range(at:))

# range(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result type that the range represents.

## Declaration

```swift
func range(at idx: Int) -> NSRange
```

## Parameters

- `idx`: The index of the result.

<a id="return-value"></a>

## Return Value

The range of the result.

<a id="Discussion"></a>

## Discussion

A result must have at least one range, but may optionally have more, for example, to represent regular expression capture groups.

Passing [range(at:)](range%28at_%29.md) the value `0` always returns the value of the [range](range.md) property. Additional ranges, if any, will have indexes from `1` to ```numberOfRanges``-1```.

## See Also

### Text Checking Type Range and Type

- [range](range.md): Returns the range of the result that the receiver represents.
- [resultType](resulttype.md): Returns the text checking result type that the receiver represents.
- [numberOfRanges](numberofranges.md): Returns the number of ranges.

# rangeAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result type that the range represents.

## Declaration

```objectivec
- (NSRange) rangeAtIndex:(NSUInteger) idx;
```

## Parameters

- `idx`: The index of the result.

<a id="return-value"></a>

## Return Value

The range of the result.

<a id="Discussion"></a>

## Discussion

A result must have at least one range, but may optionally have more, for example, to represent regular expression capture groups.

Passing [rangeAtIndex:](range%28at_%29.md) the value `0` always returns the value of the [range](range.md) property. Additional ranges, if any, will have indexes from `1` to ```numberOfRanges``-1```.

## See Also

### Text Checking Type Range and Type

- [range](range.md): Returns the range of the result that the receiver represents.
- [resultType](resulttype.md): Returns the text checking result type that the receiver represents.
- [numberOfRanges](numberofranges.md): Returns the number of ranges.

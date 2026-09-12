> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorextents/extentatdimensionindex:](https://developer.apple.com/documentation/metal/mtltensorextents/extentatdimensionindex:)

# extentAtDimensionIndex:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the value at the specified dimension index.

## Declaration

```objectivec
- (NSInteger) extentAtDimensionIndex:(NSUInteger) dimensionIndex;
```

## Parameters

- `dimensionIndex`: The index of the value to retrieve. The first index corresponds to the innermost dimension.

<a id="return-value"></a>

## Return Value

The value at `dimensionIndex`, or `-1` if `dimensionIndex` is greater than or equal to [rank](rank.md).

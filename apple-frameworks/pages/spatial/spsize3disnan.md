> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3disnan](https://developer.apple.com/documentation/spatial/spsize3disnan)

# SPSize3DIsNaN

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPSize3DIsNaN(SPSize3D size);
```

## Parameters

- `size`: The source size.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the size contains any NaN values.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the size contains any NaN values.

## See Also

### Checking characteristics

- [SPSize3DContainsAnyPoint](spsize3dcontainsanypoint.md): Returns a Boolean value that indicates whether the size contains the specified point.
- [SPSize3DContainsPoint](spsize3dcontainspoint.md): Returns a Boolean value that indicates whether the size contains the specified point.
- [SPSize3DContainsSize](spsize3dcontainssize.md): Returns a Boolean value that indicates whether the size contains the specified size.
- [SPSize3DIsValid](spsize3disvalid.md): A Boolean value that indicates whether the size represents a valid value.
- [SPSize3DIsFinite](spsize3disfinite.md)
- [SPSize3DIsZero](spsize3diszero.md)

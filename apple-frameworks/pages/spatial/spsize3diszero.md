> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spsize3diszero

# SPSize3DIsZero

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPSize3DIsZero(SPSize3D size);
```

## Parameters

- `size`: The source size.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the size is zero.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the size is zero.

## See Also

### Checking characteristics

- [SPSize3DContainsAnyPoint](spsize3dcontainsanypoint.md): Returns a Boolean value that indicates whether the size contains the specified point.
- [SPSize3DContainsPoint](spsize3dcontainspoint.md): Returns a Boolean value that indicates whether the size contains the specified point.
- [SPSize3DContainsSize](spsize3dcontainssize.md): Returns a Boolean value that indicates whether the size contains the specified size.
- [SPSize3DIsValid](spsize3disvalid.md): A Boolean value that indicates whether the size represents a valid value.
- [SPSize3DIsFinite](spsize3disfinite.md)
- [SPSize3DIsNaN](spsize3disnan.md)

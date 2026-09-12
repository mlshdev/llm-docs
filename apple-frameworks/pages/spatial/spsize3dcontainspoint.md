> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dcontainspoint](https://developer.apple.com/documentation/spatial/spsize3dcontainspoint)

# SPSize3DContainsPoint

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether the size contains the specified point.

## Declaration

```objectivec
static bool SPSize3DContainsPoint(SPSize3D size, SPPoint3D other);
```

## Parameters

- `size`: The size object to compare.
- `other`: The point that the function compares against.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the size contains the specified point.

## See Also

### Checking characteristics

- [SPSize3DContainsAnyPoint](spsize3dcontainsanypoint.md): Returns a Boolean value that indicates whether the size contains the specified point.
- [SPSize3DContainsSize](spsize3dcontainssize.md): Returns a Boolean value that indicates whether the size contains the specified size.
- [SPSize3DIsValid](spsize3disvalid.md): A Boolean value that indicates whether the size represents a valid value.
- [SPSize3DIsFinite](spsize3disfinite.md)
- [SPSize3DIsNaN](spsize3disnan.md)
- [SPSize3DIsZero](spsize3diszero.md)

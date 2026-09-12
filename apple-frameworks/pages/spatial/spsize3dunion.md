> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dunion](https://developer.apple.com/documentation/spatial/spsize3dunion)

# SPSize3DUnion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the smallest size that contains two sizes.

## Declaration

```objectivec
static SPSize3D SPSize3DUnion(SPSize3D size, SPSize3D other);
```

## Parameters

- `size`: The size object to compare.
- `other`: The size objectd that the function compares against.

<a id="return-value"></a>

## Return Value

A new size that is the union of two sizes.

## See Also

### Creating derived 3D sizes

- [SPSize3DIntersection](spsize3dintersection.md): Returns the intersection of two sizes.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dunion](https://developer.apple.com/documentation/spatial/sprect3dunion)

# SPRect3DUnion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the smallest rectangle that contains two rectangles.

## Declaration

```objectivec
static SPRect3D SPRect3DUnion(SPRect3D rect, SPRect3D other);
```

## Parameters

- `rect`: The rectangle to compare.
- `other`: The rectangle that the function compares against.

<a id="return-value"></a>

## Return Value

A new rectangle that is the union of two rectangles.

## See Also

### Creating derived 3D rectangles

- [SPRect3DIntegral](rect3d/integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [SPRect3DInset](rect3d/inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [SPRect3DStandardize](rect3d/standardized.md): A rectangle with positive dimensions.
- [SPRect3DIntersection](sprect3dintersection.md): Returns the intersection of two rectangles.

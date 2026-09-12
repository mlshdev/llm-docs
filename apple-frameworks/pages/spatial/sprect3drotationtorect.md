> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3drotationtorect](https://developer.apple.com/documentation/spatial/sprect3drotationtorect)

# SPRect3DRotationToRect

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 16.0) · iPadOS 16.0+ (deprecated in 16.0) · Mac Catalyst 16.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 13.0) · tvOS 16.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 9.0)

Returns the rotation around the origin from the first rectangle to the second rectangle.

## Declaration

```objectivec
static SPRotation3D SPRect3DRotationToRect(SPRect3D rect, SPRect3D other);
```

## Parameters

- `rect`: The rectangle to rotate.
- `other`: The second rectangle that the function computes the rotation to.

<a id="return-value"></a>

## Return Value

The rotation between two rectangles.

## See Also

### Deprecated symbols

- [SPRect3DTranslate](sprect3dtranslate-8amf1.md): Deprecated. Returns a rectangle with an origin that’s offset by the specified size.
- [SPRect3DDistanceBetweenOrigins](sprect3ddistancebetweenorigins.md): Deprecated. Returns the distance between the origins of two rectangles.

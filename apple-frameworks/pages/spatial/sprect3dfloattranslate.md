> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloattranslate](https://developer.apple.com/documentation/spatial/sprect3dfloattranslate)

# SPRect3DFloatTranslate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatTranslate(SPRect3DFloat rect, SPVector3DFloat offset);
```

## Parameters

- `rect`: The source rectangle.
- `offset`: A vector that defines the offset.

<a id="return-value"></a>

## Return Value

A rectangle that’s offset by the @p x, @p y, and @p z of the vector.

<a id="discussion"></a>

## Discussion

Returns a rectangle with an origin that is offset from that of the source rectangle.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloattranslate](https://developer.apple.com/documentation/spatial/spray3dfloattranslate)

# SPRay3DFloatTranslate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatTranslate(SPRay3DFloat ray, SPVector3DFloat offset);
```

## Parameters

- `ray`: The source ray.
- `offset`: A vector that defines the offset.

<a id="return-value"></a>

## Return Value

A ray that’s offset by the @p x, @p y, and @p z of the vector.

<a id="discussion"></a>

## Discussion

Returns a ray with an origin that is offset from that of the source ray.

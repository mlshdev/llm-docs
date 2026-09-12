> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloattranslate](https://developer.apple.com/documentation/spatial/sppose3dfloattranslate)

# SPPose3DFloatTranslate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatTranslate(SPPose3DFloat pose, SPVector3DFloat offset);
```

## Parameters

- `pose`: The source pose.
- `offset`: A vector that defines the offset.

<a id="return-value"></a>

## Return Value

A pose that’s offset by the @p x, @p y, and @p z of the vector.

<a id="discussion"></a>

## Discussion

Returns a pose with a position that is offset from that of the source pose.

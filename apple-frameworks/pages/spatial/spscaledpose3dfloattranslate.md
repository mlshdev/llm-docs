> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloattranslate](https://developer.apple.com/documentation/spatial/spscaledpose3dfloattranslate)

# SPScaledPose3DFloatTranslate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatTranslate(SPScaledPose3DFloat scaledPose, SPVector3DFloat offset);
```

## Parameters

- `scaledPose`: The source scaled pose.
- `offset`: A vector that defines the offset.

<a id="return-value"></a>

## Return Value

A scaled pose that’s offset by the @p x, @p y, and @p z of the vector.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with a position that is offset from that of the source scaled pose.

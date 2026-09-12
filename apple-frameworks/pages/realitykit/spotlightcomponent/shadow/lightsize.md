> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow/lightsize](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow/lightsize)

# lightSize

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS · visionOS 27.0+

The radius of the spotlight’s emitting surface, in meters.

## Declaration

```swift
var lightSize: Float { get set }
```

<a id="discussion"></a>

## Discussion

Larger values widen the penumbra and lengthen the transition between fully-shadowed and fully-lit regions, approximating the way an area light of that radius would shade a scene. The default value is `0.1`.

This property has no effect when [quality](quality.md) is [low](qualitymode/low.md), which always produces a hard-edged shadow.

## See Also

### Configuring shadow quality

- [quality](quality.md): The shadow-filtering algorithm this light uses.
- [SpotLightComponent.Shadow.QualityMode](qualitymode.md): Constants that select the shadow-filtering algorithm a spotlight uses.

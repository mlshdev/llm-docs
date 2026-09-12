> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/directionallightcomponent/shadow/cascades-swift.struct/fixed(_:bias:)](https://developer.apple.com/documentation/realitykit/directionallightcomponent/shadow/cascades-swift.struct/fixed(_:bias:))

# fixed(\_:bias:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specify a fixed number of shadow cascades to use.

## Declaration

```swift
static func fixed(_ count: Int, bias: Float = 0.0) -> DirectionalLightComponent.Shadow.Cascades
```

<a id="discussion"></a>

## Discussion

Accepted values are 1, 2, 3, and 4.

The optional `bias` parameter can be used to shift the cascade splits (where one cascade ends and the next begins) closer to or farther from the camera, useful in viewing configurations where more shadow resolution is desired near to or far from the viewer. The valid range of this parameter is `(-1.0, 1.0)`, where `-1.0` maps the first cascade split onto the near plane and `1.0` moves the last cascade split to the far plane. The default value is `0.0`.

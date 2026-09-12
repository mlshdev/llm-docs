> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentlightingconfigurationcomponent/environmentlightingweight](https://developer.apple.com/documentation/realitykit/environmentlightingconfigurationcomponent/environmentlightingweight)

# environmentLightingWeight

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A value that controls the environment-lighting contribution to an entity’s lighting.

## Declaration

```swift
var environmentLightingWeight: Float
```

<a id="discussion"></a>

## Discussion

The weight is a floating-point value in the range `[0.0, 1.0]`.

- A value of `1.0` indicates the entity receives the full environment-lighting contribution.
- A value of `0.0` indicates the entity receives no light from its environment. The entity still receives lighting from other sources, such as directional, point, and spot lights.
- The default value is `1.0`.

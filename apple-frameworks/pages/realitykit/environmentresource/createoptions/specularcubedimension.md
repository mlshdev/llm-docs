> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/createoptions/specularcubedimension](https://developer.apple.com/documentation/realitykit/environmentresource/createoptions/specularcubedimension)

# specularCubeDimension

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The dimension of the computed specular cubemap for material reflections.

## Declaration

```swift
var specularCubeDimension: Int?
```

<a id="discussion"></a>

## Discussion

If `nil`, the environment resource uses the source cubemap’s dimensions.

A value lower than that of the cubemap helps to reduce the memory footprint in scenes where you view skybox details through specular reflections.

> **Note**

> The specular cube dimension clamps to the source cubemap’s dimensions if it exceeds them.

## See Also

### Accessing the option properties

- [compression](compression.md): The compression to apply to environment textures.
- [samplingQuality](samplingquality-swift.property.md): The skybox sampling quality for lighting textures.

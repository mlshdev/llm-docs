> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindtarget/materialpath](https://developer.apple.com/documentation/realitykit/bindtarget/materialpath)

# BindTarget.MaterialPath

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Material parameters that an animation can target.

## Declaration

```swift
struct MaterialPath
```

<a id="overview"></a>

## Overview

Each property is a `BindTarget` which defines a parameter an animation can target.

## Topics

### Instance Properties

- [anisotropyAngleScale](materialpath/anisotropyanglescale.md): This BindTarget references a Float type
- [anisotropyLevelScale](materialpath/anisotropylevelscale.md): This BindTarget references a Float type
- [baseColorTint](materialpath/basecolortint.md): This BindTarget references a SIMD4 type
- [clearcoatRoughnessScale](materialpath/clearcoatroughnessscale.md): This BindTarget references a Float type
- [clearcoatScale](materialpath/clearcoatscale.md): This BindTarget references a Float type
- [customValue](materialpath/customvalue.md)
- [emissiveColor](materialpath/emissivecolor.md): This BindTarget references a SIMD4 type
- [emissiveIntensity](materialpath/emissiveintensity.md): This BindTarget references a Float type
- [metallicScale](materialpath/metallicscale.md): This BindTarget references a Float type
- [opacityThreshold](materialpath/opacitythreshold.md): This BindTarget references a Float type
- [roughnessScale](materialpath/roughnessscale.md): This BindTarget references a Float type
- [secondaryTextureCoordinate](materialpath/secondarytexturecoordinate.md): This BindTarget references a SIMD2 type
- [sheenTint](materialpath/sheentint.md): This BindTarget references a SIMD4 type
- [specularScale](materialpath/specularscale.md): This BindTarget references a Float type
- [textureCoordinate](materialpath/texturecoordinate.md): This BindTarget references a SIMD2 type

## See Also

### Animatable properties

- [BindTarget.opacity](opacity.md): An option that specifies that the entity’s opacity to animate. Requires that the entity has an OpacityComponent
- [BindTarget.billboardBlendFactor](billboardblendfactor.md)
- [BindTarget.blendShapeWeights](blendshapeweights.md): An option the entity’s blend shape weights animate. Requires that the entity has a BlendShapeWeightsComponent.
- [BindTarget.skeletalPose(\_:)](skeletalpose%28__%29.md): An option that specifies one of the entity’s skeletal poses to animate.
- [BindTarget.blendShapeWeightsAtIndex(\_:)](blendshapeweightsatindex%28__%29.md)
- [BindTarget.blendShapeWeightsWithID(\_:)](blendshapeweightswithid%28__%29.md)
- [material(\_:)](material%28__%29.md): Generates a complex bind path from one of an entity’s materials.
- [BindTarget.TextureCoordinateTransformPath](texturecoordinatetransformpath.md): The texture coordinate parameters for a given texture layer that an animation can target.
- [BindTarget.IkSolverPath](iksolverpath.md)

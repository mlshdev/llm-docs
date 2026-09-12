> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/lightingmodel-swift.property](https://developer.apple.com/documentation/scenekit/scnmaterial/lightingmodel-swift.property)

# lightingModel (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The lighting formula that SceneKit uses to render the material.

## Declaration

```swift
var lightingModel: SCNMaterial.LightingModel { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit provides several different lighting models, each of which combines information from a material’s visual properties with the lights and other contents of a scene. For details on how each lighting model affects rendering, see `Lighting Models`. For details on the contribution from each visual property, see Visual Properties for Special Effects.

## See Also

### Choosing a Shading Model

- [SCNMaterial.LightingModel](lightingmodel-swift.struct.md): Constants specifying the lighting and shading algorithm to use for rendering a material.

# lightingModelName (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The lighting formula that SceneKit uses to render the material.

## Declaration

```objectivec
@property (nonatomic, copy) SCNLightingModel lightingModelName;
```

<a id="Discussion"></a>

## Discussion

SceneKit provides several different lighting models, each of which combines information from a material’s visual properties with the lights and other contents of a scene. For details on how each lighting model affects rendering, see `Lighting Models`. For details on the contribution from each visual property, see Visual Properties for Special Effects.

## See Also

### Choosing a Shading Model

- [SCNLightingModel](lightingmodel-swift.struct.md): Constants specifying the lighting and shading algorithm to use for rendering a material.

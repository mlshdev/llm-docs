> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/init(cube:options:)-9j9rn](https://developer.apple.com/documentation/realitykit/environmentresource/init(cube:options:)-9j9rn)

# init(cube:options:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Asynchronously creates an environment resource from a cube texture.

## Declaration

```swift
@MainActor @preconcurrency convenience init(cube cubeTexture: TextureResource, options: EnvironmentResource.CreateOptions) async throws
```

## Parameters

- `cubeTexture`: A skybox cube texture of type `.cubeType` with `.color` or `.hdrColor` semantics.
- `options`: A configuration for generating the environment resource.

<a id="discussion"></a>

## Discussion

RealityKit generates an environment resource from a skybox cube texture of the environment. The created environment shares the input skybox.

> **Note**

> [EnvironmentResource.CreateOptions.SamplingQuality.high](createoptions/samplingquality-swift.enum/high.md) and [EnvironmentResource.CreateOptions.SamplingQuality.veryHigh](createoptions/samplingquality-swift.enum/veryhigh.md), along with [astc(blockSize:quality:)](../textureresource/compression/astc%28blocksize_quality_%29.md) compression options, are only available in macOS. Use these options to write optimized scenes for all target platforms when exporting from macOS with [write(to:)](../entity/write%28to_%29.md). Compression options also significantly reduce an environmental resource’s memory and disk usage.

```swift
// Use compression and high quality options to export optimized resources.
let cube = try TextureResource(
    cubeFromEquirectangular: image,
    quality: .high,
    options: TextureResource.CreateOptions(semantic: .color)
)

let options = EnvironmentResource.CreateOptions(
    samplingQuality: .high,
    specularCubeDimension: cube.width/2,
    compression: .astc(blockSize: .block4x4, quality: .high)
)

let environment = try EnvironmentResource(
    cube: cube,
    options: EnvironmentResource.CreateOptions(
        samplingQuality: .high,
        specularCubeDimension: cube.width/2,
        compression: .astc(blockSize: .block4x4, quality: .high)
    )
)

let lightEntity = Entity()
lightEntity.components.set(ImageBasedLightComponent(
    source: .single(environment)
))
...
```

> **Note**

> If you request `.astc` compression and `cubeTexture` isn’t already compressed, RealityKit compresses it.

## See Also

### Loading the resource

- [init(named:in:)](init%28named_in_%29.md): Deprecated. Asynchronously loads an environment resource from a bundle.
- [init(equirectangular:withName:)](init%28equirectangular_withname_%29-8o2v7.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:withName:)](init%28equirectangular_withname_%29-8o2v7.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [load(named:in:)](load%28named_in_%29.md): Deprecated. Synchronously loads an environment resource from a bundle.

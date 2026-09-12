> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource](https://developer.apple.com/documentation/realitykit/environmentresource)

# EnvironmentResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An environmental resource that contains background and lighting information for a scene.

## Declaration

```swift
@MainActor @preconcurrency class EnvironmentResource
```

<a id="overview"></a>

## Overview

RealityKit supports image-based lighting that enables realistic reflections on your scene’s 3D content. You can define the look of your scene’s background by supplying an environment resource image that determines the general color of the room, and the location of any spotlights or shadowed areas within the reflection. RealityKit applies the image’s characteristics to your scene’s reflective content.

![Two screenshots depicting the process of applying an environment resource image to a reflective surface in a RealityKit scene. The first screenshot defines the](https://developer.apple.com/images/com.apple.RealityKit/EnvironmentResource~dark@2x.png)

RealityKit checks a bundle for an environment resource by the filename you supply to one of the load functions.

<a id="Create-a-skybox-folder"></a>

### Create a skybox folder

To add an environment resource to your Xcode project, make a folder with a name that ends in `.skybox` and place a single image inside. Ensure that the image is an environment map of equirectangular projection, also known as a *latitude-longitude projection*. Drag the folder into the Project navigator. In the options pane, choose to create a folder reference (not a group), and add the folder to your app’s targets. At build time, Xcode compiles the image for use as an environment resource and inserts the result into the app bundle.

RealityKit supports the same input formats as Image I/O, such as `.png` and `.jpg` However, to achieve rich, vibrant lighting, use a `.exr` or `.hdr` format, which support a wide dynamic range.

## Topics

### Loading the resource

- [init(named:in:)](environmentresource/init%28named_in_%29.md): Deprecated. Asynchronously loads an environment resource from a bundle.
- [init(equirectangular:withName:)](environmentresource/init%28equirectangular_withname_%29-8o2v7.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:withName:)](environmentresource/init%28equirectangular_withname_%29-8o2v7.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [init(cube:options:)](environmentresource/init%28cube_options_%29-9j9rn.md): Asynchronously creates an environment resource from a cube texture.
- [init(cube:options:)](environmentresource/init%28cube_options_%29-9j9rn.md): Asynchronously creates an environment resource from a cube texture.
- [load(named:in:)](environmentresource/load%28named_in_%29.md): Deprecated. Synchronously loads an environment resource from a bundle.

### Configuring the resource creation

- [EnvironmentResource.CreateOptions](environmentresource/createoptions.md): A type that controls compression, sampling quality, and cubemap dimensions when creating an environment resource.
- [EnvironmentResource.Compression](environmentresource/compression.md): The compression to apply when creating an environment resource.

### Accessing resource data

- [skybox](environmentresource/skybox.md): The cube color texture that contains environment surrounding details, or a low-resolution proxy of the original skybox if the `EnvironmentResource` was created with `CreateOptions(skyboxMode: .discard)`.

### Deprecated

- [generate(fromEquirectangular:withName:)](environmentresource/generate%28fromequirectangular_withname_%29-3wtpe.md): Deprecated. Synchronously generates an environment resource from an equirectangular image.
- [generate(fromEquirectangular:withName:)](environmentresource/generate%28fromequirectangular_withname_%29-6mxsi.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [loadAsync(named:in:)](environmentresource/loadasync%28named_in_%29.md): Deprecated. Asynchronously loads an environment resource from a bundle.

### Creating an environment resource

- [init(named:in:skyboxMode:)](environmentresource/init%28named_in_skyboxmode_%29.md): Asynchronously loads an environment resource from a bundle.
- [EnvironmentResource.SkyboxMode](environmentresource/skyboxmode.md): An enumeration controlling how to preserve the skybox.
- [init(equirectangular:options:)](environmentresource/init%28equirectangular_options_%29-8e7wv.md): Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:options:)](environmentresource/init%28equirectangular_options_%29-5bxl3.md): Synchronously creates an environment resource from an equirectangular image.
- [init(skybox:specular:diffuse:)](environmentresource/init%28skybox_specular_diffuse_%29.md): Creates an EnvironmentResource a skybox, specular and diffuse texture resources.

### Initializers

- [init(cube:options:)](environmentresource/init%28cube_options_%29.md): Asynchronously creates an environment resource from a cube texture.
- [init(equirectangular:options:)](environmentresource/init%28equirectangular_options_%29.md): Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:withName:)](environmentresource/init%28equirectangular_withname_%29.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.

### Type Methods

- [generate(fromEquirectangular:withName:)](environmentresource/generate%28fromequirectangular_withname_%29.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Environment

- [EnvironmentLightingConfigurationComponent](environmentlightingconfigurationcomponent.md): A component that scales the amount of light that an entity receives from its environment.
- [VirtualEnvironmentProbeComponent](virtualenvironmentprobecomponent.md): A component that provides environment lighting for entities you place within the same virtual world.
- [VirtualEnvironmentProbeComponent.Probe](virtualenvironmentprobecomponent/probe.md): A sample of the environment around a point in a scene the system uses for environment-based lighting.
- [VirtualEnvironmentProbeComponent.Source](virtualenvironmentprobecomponent/source-swift.enum.md): Options that define the source of diffuse and specular lighting for environment lighting calculations.

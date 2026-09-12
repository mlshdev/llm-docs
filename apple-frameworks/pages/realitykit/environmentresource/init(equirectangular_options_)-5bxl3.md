> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/init(equirectangular:options:)-5bxl3](https://developer.apple.com/documentation/realitykit/environmentresource/init(equirectangular:options:)-5bxl3)

# init(equirectangular:options:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Synchronously creates an environment resource from an equirectangular image.

## Declaration

```swift
@MainActor convenience init(equirectangular cgImage: CGImage, options: EnvironmentResource.CreateOptions) throws
```

## Parameters

- `cgImage`: The source equirectangular (latitude, longitude) image. To preserve all details use an image where the width is half the height.

<a id="discussion"></a>

## Discussion

Loading an [EnvironmentResource](../environmentresource.md) with this method blocks the main actor because it’s synchronous, so only call it from a command-line application. The method can stall a regular app, which makes it visibly hitch, and the system terminates an app if its UI becomes unresponsive.

## See Also

### Creating an environment resource

- [init(named:in:skyboxMode:)](init%28named_in_skyboxmode_%29.md): Asynchronously loads an environment resource from a bundle.
- [EnvironmentResource.SkyboxMode](skyboxmode.md): An enumeration controlling how to preserve the skybox.
- [init(equirectangular:options:)](init%28equirectangular_options_%29-8e7wv.md): Asynchronously generates an environment resource from an equirectangular image.
- [init(skybox:specular:diffuse:)](init%28skybox_specular_diffuse_%29.md): Creates an EnvironmentResource a skybox, specular and diffuse texture resources.

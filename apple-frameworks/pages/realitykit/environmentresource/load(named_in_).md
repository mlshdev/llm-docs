> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/load(named:in:)](https://developer.apple.com/documentation/realitykit/environmentresource/load(named:in:))

# load(named:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ · macOS 10.15+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS  (deprecated in 27.0)

Synchronously loads an environment resource from a bundle.

> Use \`init(named:in:skyboxMode:)\` instead. Will be deprecated to support skybox-free EnvironmentResource.

## Declaration

```swift
@MainActor @preconcurrency static func load(named name: String, in bundle: Bundle? = nil) throws -> EnvironmentResource
```

## Parameters

- `name`: The image name without the file extension.
- `bundle`: The bundle to search for the resource. Use `nil` to indicate the app’s bundle.

<a id="return-value"></a>

## Return Value

The environment resource that loads from the specified bundle.

<a id="discussion"></a>

## Discussion

Loading an [EnvironmentResource](../environmentresource.md) with this method blocks the main actor because it’s synchronous, so only call it from a command-line application. The method can stall a regular app, which makes it visibly hitch, and the system terminates an app if its UI becomes unresponsive.

If your image file is at the path `Foo.skybox/Bar.exr` in your Xcode project, use `Bar` for the name parameter.

To add an environment resource to your Xcode project, see [EnvironmentResource](../environmentresource.md).

> **Important**

> This function blocks the calling thread while RealityKit loads the requested resource.

## See Also

### Loading the resource

- [init(named:in:)](init%28named_in_%29.md): Deprecated. Asynchronously loads an environment resource from a bundle.
- [init(equirectangular:withName:)](init%28equirectangular_withname_%29-8o2v7.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:withName:)](init%28equirectangular_withname_%29-8o2v7.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.
- [init(cube:options:)](init%28cube_options_%29-9j9rn.md): Asynchronously creates an environment resource from a cube texture.
- [init(cube:options:)](init%28cube_options_%29-9j9rn.md): Asynchronously creates an environment resource from a cube texture.

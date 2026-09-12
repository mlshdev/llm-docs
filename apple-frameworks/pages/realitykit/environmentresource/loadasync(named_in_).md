> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/loadasync(named:in:)](https://developer.apple.com/documentation/realitykit/environmentresource/loadasync(named:in:))

# loadAsync(named:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Asynchronously loads an environment resource from a bundle.

## Declaration

```swift
@MainActor @preconcurrency static func loadAsync(named name: String, in bundle: Bundle? = nil) -> LoadRequest<EnvironmentResource>
```

## Parameters

- `name`: The image name without the file extension.
- `bundle`: The bundle to search for the resource. Use `nil` to indicate the app’s bundle.

<a id="return-value"></a>

## Return Value

The environment resource that loads from the specified bundle.

<a id="discussion"></a>

## Discussion

If your image file is at the path `Foo.skybox/Bar.exr` in your Xcode project, use `Bar` for the name parameter. You need to call this function with the `async` keyword from an asynchronous context, such as from within a [Task](https://developer.apple.com/documentation/swift/task) closure.

To add an environment resource to your Xcode project, see [EnvironmentResource](../environmentresource.md).

## See Also

### Deprecated

- [generate(fromEquirectangular:withName:)](generate%28fromequirectangular_withname_%29-3wtpe.md): Deprecated. Synchronously generates an environment resource from an equirectangular image.
- [generate(fromEquirectangular:withName:)](generate%28fromequirectangular_withname_%29-6mxsi.md): Deprecated. Asynchronously generates an environment resource from an equirectangular image.

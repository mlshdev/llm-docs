> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/init(named:in:)](https://developer.apple.com/documentation/realitykit/textureresource/init(named:in:))

# init(named:in:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Asynchronously loads a texture resource from a bundle.

## Declaration

```swift
@MainActor @preconcurrency convenience init(named name: String, in bundle: Bundle? = nil) async throws
```

## Parameters

- `name`: The name of the resource. The filename extension is optional.
- `bundle`: The bundle to search for the resource. Use `nil` to indicate the app’s bundle.

<a id="discussion"></a>

## Discussion

RealityKit automatically creates a resource name for the texture resource based on the values of `name` and `bundle`. RealityKit uses the resource name to identify resources, and to match texture resources between networked peers. Specify a unique name for each texture resource you load or generate.

Load textures concurrently with other content for optimal load times without causing your app to hitch.

```swift
struct SomeRealityView: View {
    var body: some View {
        RealityView { content in
            // Begin loading the texture.
            async let textureA = try? TextureResource(named:"textureA.jpg")
            // Load the scene.
            guard let rootEntity = try? await Entity(named: "SceneA", in: realityKitContentBundle) else {
                return
            }
            // Wait for the texture to finish loading.
            guard let textureA = await textureA else {
                return
            }

            // Create and assign a material that uses the texture to a model entity.
            if let entityA = rootEntity.findEntity(named: "ModelA") as? ModelEntity {
                var material = PhysicallyBasedMaterial()
                material.baseColor = PhysicallyBasedMaterial.BaseColor(tint: .white,
                                                                       texture: .init(textureA))
                entityA.model?.materials[0] = material
            }

            content.add(rootEntity)
        }
    }
}
```

## See Also

### Loading a texture

- [init(named:in:options:)](init%28named_in_options_%29.md): Asynchronously loads a texture resource from a bundle with options.
- [init(contentsOf:withName:options:)](init%28contentsof_withname_options_%29.md): Asynchronously creates a texture resource from a file URL with creation options.
- [init(contentsOf:withName:)](init%28contentsof_withname_%29.md): Asynchronously creates a texture resource from a file URL.
- [load(named:in:)](load%28named_in_%29.md): Returns a texture resource by synchronously loading it from a bundle.
- [load(named:in:options:)](load%28named_in_options_%29.md): Returns a texture resource by synchronously loading it from a bundle with options.
- [load(contentsOf:withName:options:)](load%28contentsof_withname_options_%29.md): Synchronously loads a texture resource from a URL with options.
- [load(contentsOf:withName:)](load%28contentsof_withname_%29.md): Synchronously loads a texture resource from a URL.
- [loadAsync(named:in:)](loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle.
- [loadAsync(named:in:options:)](loadasync%28named_in_options_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle with options.
- [loadAsync(contentsOf:withName:)](loadasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads a texture resource from a URL.

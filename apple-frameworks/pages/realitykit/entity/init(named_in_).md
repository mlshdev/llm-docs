> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/init(named:in:)](https://developer.apple.com/documentation/realitykit/entity/init(named:in:))

# init(named:in:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates an entity by asynchronously loading it from a bundle.

## Declaration

```swift
@MainActor @preconcurrency convenience init(named name: String, in bundle: Bundle? = nil) async throws
```

## Parameters

- `name`: The base name of the file to load, omitting the filename extension, or scene name if loading from a `.reality` file.
- `bundle`: The bundle containing the file. Use `nil` to search the app’s main bundle.

<a id="return-value"></a>

## Return Value

The root entity in the loaded file.

<a id="discussion"></a>

## Discussion

RealityKit supports loading entities from USD (`.usd`, `.usda`, `.usdc`, `.usdz`) and Reality (`.reality`) files.

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

You can use a task group to await all loads before adding them to the scene to display content from multiple scenes without hitches or pop-in.

```swift
struct SomeRealityView: View {
    var body: some View {
        RealityView { content in
            // Add the initial RealityKit content.
            let entities : [Entity] = await withTaskGroup(of: Entity?.self) { taskGroup in
                // Load all the scenes concurrently.
                taskGroup.addTask { return try? await Entity(named: "SceneA", in: realityKitContentBundle) }
                taskGroup.addTask { return try? await Entity(named: "SceneB", in: realityKitContentBundle) }
                taskGroup.addTask { return try? await Entity(named: "SceneC", in: realityKitContentBundle) }

                var entities = [Entity]()
                // Wait for all the scenes to load.
                for await entity in taskGroup {
                    if let entity {
                        entities.append(entity)
                    }
                }
                return entities
            }
            // Add all the content.
            for entity in entities {
                content.add(entity)
            }
        }
    }
}
```

## See Also

### Loading an entity from a file

- [Generating procedural textures](../../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [Resource](../resource.md): A shared resource you use to configure a component, like a material, mesh, or texture.
- [Loading entities from a file](../loading-entities-from-a-file.md): Retrieve an entity from storage on disk using a synchronous or an asynchronous load operation.
- [Stored entities](../stored-entities.md): Manage entities that you store as assets on disk.
- [Creating USD files for Apple devices](../../usd/creating-usd-files-for-apple-devices.md): Generate 3D assets that render as expected.
- [init(contentsOf:withName:)](init%28contentsof_withname_%29.md): Creates an entity by asynchronously loading it from a file URL.
- [ReferenceComponent](../referencecomponent.md): A component that can load another entity from a file.

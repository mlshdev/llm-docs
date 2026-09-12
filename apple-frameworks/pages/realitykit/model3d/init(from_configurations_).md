> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3d/init(from:configurations:)](https://developer.apple.com/documentation/realitykit/model3d/init(from:configurations:))

# init(from:configurations:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Loads and displays a model using the provided `ConfigurationCatalog` and configuration choices.

## Declaration

```swift
nonisolated init(from catalog: Entity.ConfigurationCatalog, configurations: [String : String]? = nil) where Content == ResolvedModel3D
```

## Parameters

- `catalog`: A collection of alternative representations for an entity.
- `configurations`: A dictionary of configuration choices the initializer applies as it loads the entity, mapping the ID of a configuration set to the ID of a configuration within that set.

<a id="discussion"></a>

## Discussion

Until the model loads, `Model3D` displays a default placeholder. When the load operation completes successfully, `Model3D` updates the view to show the loaded model. If the operation fails, `Model3D` continues to display the placeholder. The following example loads and displays a model from an example server:

```swift
let configCatalog = try await Entity.ConfigurationCatalog(from: url)
...
Model3D(from: myConfigurationCatalog,
        configurations: ["size": "small", "color": "red"])
```

If you want to customize the placeholder or apply [ResolvedModel3D](../resolvedmodel3d.md)-specific modifiers — like `ResolvedModel3D/resizable()` — to the loaded model, use the [init(from:configurations:content:placeholder:)](init%28from_configurations_content_placeholder_%29.md) initializer instead.

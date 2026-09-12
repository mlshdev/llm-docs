> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3d/init(url:)](https://developer.apple.com/documentation/realitykit/model3d/init(url:))

# init(url:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Loads and displays a model from the specified URL.

## Declaration

```swift
nonisolated init(url: URL) where Content == ResolvedModel3D
```

## Parameters

- `url`: The URL of the model to display.

<a id="discussion"></a>

## Discussion

Until the model loads, SwiftUI displays a default placeholder. When the load operation completes successfully, SwiftUI updates the view to show the loaded model. If the operation fails, SwiftUI continues to display the placeholder. The following example loads and displays a model from an example server:

```swift
Model3D(url: URL(string: "https://example.com/robot.usdz")!)
```

If you want to customize the placeholder or apply [Model3D](../model3d.md)-specific modifiers — like `ResolvedModel3D/resizable()` — to the loaded model, use the [init(url:content:placeholder:)](init%28url_content_placeholder_%29.md) initializer instead.

## See Also

### Creating a Model3D

- [init(named:bundle:)](init%28named_bundle_%29.md): Loads and displays a model by name, by searching through the specified `Foundation/Bundle`.
- [init(named:bundle:content:placeholder:)](init%28named_bundle_content_placeholder_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../../foundation/bundle.md), using a custom placeholder until the model loads.
- [init(named:bundle:transaction:content:)](init%28named_bundle_transaction_content_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../../foundation/bundle.md), in phases.
- [init(url:content:placeholder:)](init%28url_content_placeholder_%29.md): Loads and displays a modifiable model from the specified URL using a custom placeholder until the model loads.
- [init(url:transaction:content:)](init%28url_transaction_content_%29.md): Loads and displays a modifiable model from the specified URL in phases.

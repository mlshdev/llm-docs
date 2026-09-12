> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3d/init(named:bundle:)](https://developer.apple.com/documentation/realitykit/model3d/init(named:bundle:))

# init(named:bundle:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Loads and displays a model by name, by searching through the specified `Foundation/Bundle`.

## Declaration

```swift
nonisolated init(named name: String, bundle: Bundle? = nil) where Content == ResolvedModel3D
```

## Parameters

- `name`: The name of the USD or Reality file to display.
- `bundle`: The Bundle used to look up the model by name. If not provided, defaults to the app’s main bundle.

<a id="discussion"></a>

## Discussion

Until the model loads, `Model3D` displays a default placeholder. When the load operation completes successfully, `Model3D` updates the view to show the loaded model. If the operation fails, `Model3D` continues to display the placeholder. The following example loads and displays a model from an example server:

```swift
Model3D(named: "Robot-Drummer")
```

If you want to customize the placeholder or apply [ResolvedModel3D](../resolvedmodel3d.md)-specific modifiers — like `ResolvedModel3D/resizable()` — to the loaded model, use the [init(named:bundle:content:placeholder:)](init%28named_bundle_content_placeholder_%29.md) initializer instead.

## See Also

### Creating a Model3D

- [init(named:bundle:content:placeholder:)](init%28named_bundle_content_placeholder_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../../foundation/bundle.md), using a custom placeholder until the model loads.
- [init(named:bundle:transaction:content:)](init%28named_bundle_transaction_content_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../../foundation/bundle.md), in phases.
- [init(url:)](init%28url_%29.md): Loads and displays a model from the specified URL.
- [init(url:content:placeholder:)](init%28url_content_placeholder_%29.md): Loads and displays a modifiable model from the specified URL using a custom placeholder until the model loads.
- [init(url:transaction:content:)](init%28url_transaction_content_%29.md): Loads and displays a modifiable model from the specified URL in phases.

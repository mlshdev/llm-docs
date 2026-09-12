> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3d/init(url:content:placeholder:)](https://developer.apple.com/documentation/realitykit/model3d/init(url:content:placeholder:))

# init(url:content:placeholder:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Loads and displays a modifiable model from the specified URL using a custom placeholder until the model loads.

## Declaration

```swift
nonisolated init<Model, Placeholder>(url: URL, @ViewBuilder content: @escaping (ResolvedModel3D) -> Model, @ViewBuilder placeholder: @escaping () -> Placeholder) where Content == Model3DPlaceholderContent<Model, Placeholder>, Model : View, Placeholder : View
```

## Parameters

- `url`: The URL of the model to display.
- `content`: A closure that takes the loaded model as an input, and returns the view to show. You can return the model directly, or modify it as needed before returning it.
- `placeholder`: A closure that returns the view to show until the load operation completes successfully.

<a id="discussion"></a>

## Discussion

Until the model loads, `Model3D` displays the placeholder view that you specify. When the load operation completes successfully, `Model3D` updates the view to show content that you specify, which you create using the loaded model. For example, you can show a green placeholder, followed by a scaled version of the loaded model:

```swift
let url = URL(string: "https://example.com/robot.usdz")!
Model3D(url: url) { model in
    model.resizable()
} placeholder: {
    Color.green
}
```

If the load operation fails, `Model3D` continues to display the placeholder. To be able to display a different view on a load error, use the [init(url:transaction:content:)](init%28url_transaction_content_%29.md) initializer instead.

## See Also

### Creating a Model3D

- [init(named:bundle:)](init%28named_bundle_%29.md): Loads and displays a model by name, by searching through the specified `Foundation/Bundle`.
- [init(named:bundle:content:placeholder:)](init%28named_bundle_content_placeholder_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../../foundation/bundle.md), using a custom placeholder until the model loads.
- [init(named:bundle:transaction:content:)](init%28named_bundle_transaction_content_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../../foundation/bundle.md), in phases.
- [init(url:)](init%28url_%29.md): Loads and displays a model from the specified URL.
- [init(url:transaction:content:)](init%28url_transaction_content_%29.md): Loads and displays a modifiable model from the specified URL in phases.

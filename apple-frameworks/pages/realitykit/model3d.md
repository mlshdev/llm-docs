> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3d](https://developer.apple.com/documentation/realitykit/model3d)

# Model3D

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A view that asynchronously loads and displays a 3D model.

## Declaration

```swift
struct Model3D<Content> where Content : View
```

## Mentioned In

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md)

<a id="overview"></a>

## Overview

Use `Model3D` to embed a 3D model from a USD file or Reality file in your SwiftUI app.

You can use methods on the [ResolvedModel3D](resolvedmodel3d.md) type as well as standard view modifiers to adjust the size of the model to fit your app’s interface. Here, the [resizable(\_:)](resolvedmodel3d/resizable%28__%29.md) method scales the model to fit the current view. Then, the [aspectRatio(\_:contentMode:)](https://developer.apple.com/documentation/swiftui/view/aspectratio%28_:contentmode:%29-771ow) view modifier adjusts this resizing behavior to maintain the model’s original aspect ratio, rather than scaling the `x`,` y`-, and `z` axes independently to fit the robot to the full frame of the view.

```swift
 Model3D(named: "Robot-Drummer") { model in
     model
         .resizable()
         .aspectRatio(contentMode: .fit)
 } placeholder: {
     ProgressView()
 }
```

If loading from a remote URL, this view uses the shared [URLSession](../foundation/urlsession.md) instance to load a model from the specified URL, and then display it. For example, you can display a model that’s stored on a server:

```swift
 Model3D(url: URL(string: "https://example.com/robot.usdz")!)
     .frame(width: 300, height: 600)
```

Until the model loads, the view displays a standard placeholder that fills the available space. After the load completes successfully, the view updates to display the model. In the example above, the model is smaller than the frame, and so appears smaller than the placeholder.

You can specify a custom placeholder using [init(url:content:placeholder:)](model3d/init%28url_content_placeholder_%29.md). With this initializer, you can also use the `content` parameter to manipulate the loaded model. For example, you can add a modifier to make the loaded image resizable:

```swift
 let url = URL(string: "https://example.com/robot.usdz")!
 Model3D(url: url) { model in
     model.resizable()
 } placeholder: {
     ProgressView()
 }
 .frame(width: 50, height: 50)
```

For this example, [Model3D](model3d.md) shows a  [ProgressView](https://developer.apple.com/documentation/swiftui/progressview) first, and then the model scaled to fit in the specified frame:

> **Important**

> You can’t apply [ResolvedModel3D](resolvedmodel3d.md)-specific modifiers, like [resizable(\_:)](resolvedmodel3d/resizable%28__%29.md), directly to a `Model3D`. Instead, apply them to the `ResolvedModel3D` instance that your `content` closure gets when defining the view’s appearance.

To gain more control over the loading process, use the [init(url:transaction:content:)](model3d/init%28url_transaction_content_%29.md) initializer, which takes a `content` closure that receives a [Model3DPhase](model3dphase.md) to indicate the state of the loading operation. Return a view that’s appropriate for the current phase:

```swift
 let url = URL(string: "https://example.com/robot.usdz")!
 Model3D(url: url) { phase in
     if let model = phase.model {
         model // Displays the loaded model.
     } else if phase.error != nil {
         Color.red // Indicates an error.
     } else {
         Color.blue // Acts as a placeholder.
     }
 }
```

## Topics

### Creating a Model3D

- [init(named:bundle:)](model3d/init%28named_bundle_%29.md): Loads and displays a model by name, by searching through the specified `Foundation/Bundle`.
- [init(named:bundle:content:placeholder:)](model3d/init%28named_bundle_content_placeholder_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../foundation/bundle.md), using a custom placeholder until the model loads.
- [init(named:bundle:transaction:content:)](model3d/init%28named_bundle_transaction_content_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../foundation/bundle.md), in phases.
- [init(url:)](model3d/init%28url_%29.md): Loads and displays a model from the specified URL.
- [init(url:content:placeholder:)](model3d/init%28url_content_placeholder_%29.md): Loads and displays a modifiable model from the specified URL using a custom placeholder until the model loads.
- [init(url:transaction:content:)](model3d/init%28url_transaction_content_%29.md): Loads and displays a modifiable model from the specified URL in phases.

### Accessing content

- [init(named:bundle:content:placeholder:)](model3d/init%28named_bundle_content_placeholder_%29.md): Loads and displays a modifiable model by name, by searching through the specified [Bundle](../foundation/bundle.md), using a custom placeholder until the model loads.
- [init(url:content:placeholder:)](model3d/init%28url_content_placeholder_%29.md): Loads and displays a modifiable model from the specified URL using a custom placeholder until the model loads.

### Initializers

- [init(asset:)](model3d/init%28asset_%29.md): Conforms when `Content` conforms to `View`.
- [init(asset:content:)](model3d/init%28asset_content_%29.md): Conforms when `Content` conforms to `View`.
- [init(from:configurations:)](model3d/init%28from_configurations_%29.md): Loads and displays a model using the provided `ConfigurationCatalog` and configuration choices.
- [init(from:configurations:content:placeholder:)](model3d/init%28from_configurations_content_placeholder_%29.md): Loads and displays a modifiable model using the provided `ConfigurationCatalog` and configuration choices using a custom placeholder until the model loads.
- [init(from:configurations:transaction:content:)](model3d/init%28from_configurations_transaction_content_%29.md): Loads and displays a modifiable model using the provided `ConfigurationCatalog` and configuration choices in phases.

## Relationships

### Conforms To

- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### SwiftUI 3D model presentation

- [Model3DPhase](model3dphase.md): The current phase of the asynchronous model loading operation.
- [ResolvedModel3D](resolvedmodel3d.md): A view for displaying static three-dimensional models.
- [Model3DPlaceholderContent](model3dplaceholdercontent.md): A container view that presents either a 3D model or a placeholder for one.
- [Model3DAsset](model3dasset.md): A container used to represent the asset loaded into the Model3D View.

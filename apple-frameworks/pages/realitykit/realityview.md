> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityview](https://developer.apple.com/documentation/realitykit/realityview)

# RealityView

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A view that contains RealityKit content.

## Declaration

```swift
@MainActor @preconcurrency struct RealityView<Content> where Content : View
```

## Mentioned In

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md)
- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md)
- [Implementing scene understanding and reconstruction in your RealityKit app](realitykit-scene-understanding.md)

<a id="overview"></a>

## Overview

Use `RealityView` to display rich 3D RealityKit content in your app, including content you author in Reality Composer Pro. `RealityView` passes a structure that conforms to [RealityViewContentProtocol](realityviewcontentprotocol.md) to its `make` and `update` closures, which you can use to add and remove RealityKit entities to your view.

Here is a simple example showing how you can display a custom [ModelEntity](modelentity.md) using `RealityView`:

```swift
struct ModelExample: View {
    var body: some View {
        RealityView { content in
            if let robot = try? await ModelEntity(named: "robot") {
                content.add(robot)
            }
            Task {
                // Asynchronously perform any additional work to configure
                // the content after the system renders the view.
            }
        }
    }
}
```

Note that the closure in the example above is `async`, and can be used to load contents from your app’s bundle or from any `URL` in the background. While your content is loading, `RealityView` will automatically display a placeholder view, which you can customize using the optional `placeholder` parameter.

> **Tip**

> Load your content asynchronously to avoid introducing a hang in your app.

You can also use the optional `update` closure on your `RealityView` to update your RealityKit content in response to changes in your view’s state. `RealityView` displays your RealityKit content inline in true 3D space, occupying the available space in your app’s 3D bounds. The [RealityViewContent](realityviewcontent.md) type on visionOS, and [RealityViewCameraContent](realityviewcameracontent.md) on other platforms represents the content of your `RealityView`.

If you want to run code every frame (to do animations or simulations), you can use a [System](system.md) or directly subscribe to the engine’s `SceneEvents.Update`:

```swift
RealityView { content in
   let entity = ModelEntity(mesh: .generateSphere(radius: 0.1))
   content.add(entity)
   _ = content.subscribe(to: SceneEvents.Update.self) { event in
       entity.position.y -= Float(event.deltaTime)
   }
}
```

`RealityView` has a flexible size by default, and does not size itself based on the RealityKit content it displays. For more advanced uses of RealityKit, such as subscribing to RealityKit events, performing coordinate conversions, or working with AR capabilities, refer to the [RealityViewContentProtocol](realityviewcontentprotocol.md) types.

## Topics

### Creating a reality view for visionOS

- [init(make:update:)](realityview/init%28make_update_%29-666xr.md): Conforms when `Content` conforms to `View`. Creates a new reality view for visionOS with an optional update closure.
- [init(make:update:placeholder:)](realityview/init%28make_update_placeholder_%29-4c8yv.md): Conforms when `Content` conforms to `View`. Creates a new reality view for visionOS with an optional update closure and placeholder view.
- [init(make:update:attachments:)](realityview/init%28make_update_attachments_%29.md): Conforms when `Content` conforms to `View`. Creates a reality view for visionOS, with attachments and an optional update closure.
- [init(make:update:placeholder:attachments:)](realityview/init%28make_update_placeholder_attachments_%29.md): Conforms when `Content` conforms to `View`. Creates a reality view for visionOS, with attachments, an optional update closure, and placeholder view.

### Creating a reality view for iOS and macOS

- [init(make:update:)](realityview/init%28make_update_%29-234sv.md): Conforms when `Content` conforms to `View`. Creates a reality view for iOS and macOS, with an optional update closure.
- [init(make:update:placeholder:)](realityview/init%28make_update_placeholder_%29-4x7ds.md): Conforms when `Content` conforms to `View`. Creates a reality view for iOS and macOS, with an optional update closure and placeholder view.

### Inspecting the content within a reality view

- [RealityView.DefaultPlaceholder](realityview/defaultplaceholder.md)

### Initializers

- [init(make:update:)](realityview/init%28make_update_%29.md): Conforms when `Content` conforms to `View`. Creates a reality view for iOS and macOS, with an optional update closure.
- [init(make:update:placeholder:)](realityview/init%28make_update_placeholder_%29.md): Conforms when `Content` conforms to `View`. Creates a reality view for iOS and macOS, with an optional update closure and placeholder view.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### SwiftUI scene presentation

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md): Choose a strategy for sizing frames and centering 3D content.
- [RealityViewContent](realityviewcontent.md): The content of a visionOS reality view.
- [RealityViewCameraContent](realityviewcameracontent.md): The content of a reality view that is displayed through a camera.
- [RealityViewContentProtocol](realityviewcontentprotocol.md): A protocol representing the content of a reality view.
- [RealityViewDefaultPlaceholder](realityviewdefaultplaceholder.md): A view that represents the default placeholder for a RealityView.
- [RealityViewEntityCollection](realityviewentitycollection.md): A collection of entities in a RealityView.
- [RealityViewLayoutOption](realityviewlayoutoption.md): Options that specify the frame sizing and content alignment option for `RealityView`.
- [EntityCollection](entitycollection.md): An ordered, mutable collection of entities.

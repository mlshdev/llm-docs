> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewlayoutoption](https://developer.apple.com/documentation/realitykit/realityviewlayoutoption)

# RealityViewLayoutOption

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Options that specify the frame sizing and content alignment option for `RealityView`.

## Declaration

```swift
struct RealityViewLayoutOption
```

## Mentioned In

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md)

<a id="overview"></a>

## Overview

Pass in a `RealityViewLayoutOption` when using the [realityViewLayoutBehavior(\_:)](https://developer.apple.com/documentation/swiftui/view/realityviewlayoutbehavior%28_:%29) modifier:

```swift
struct ModelWrapperView: View {
    let modelName: String
    var body: some View {
        RealityView { content in
            let model = try? await Entity(named: modelName)
            if let model {
                content.add(model)
            }
        }
        .realityViewLayoutBehavior(.fixedSize)
    }
}
```

## Topics

### Type Properties

- [centered](realityviewlayoutoption/centered.md): The option that centers the visual content within a flexible frame.
- [fixedSize](realityviewlayoutoption/fixedsize.md): The option that fixes the size of the frame to equal the size of the visual content and centers the content within the new frame size.
- [flexible](realityviewlayoutoption/flexible.md): The option that applies the default layout behavior of `RealityView`, where the content is not centered and the frame is flexible (takes up as much space as the SwiftUI layout provides).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### SwiftUI scene presentation

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md): Choose a strategy for sizing frames and centering 3D content.
- [RealityView](realityview.md): A view that contains RealityKit content.
- [RealityViewContent](realityviewcontent.md): The content of a visionOS reality view.
- [RealityViewCameraContent](realityviewcameracontent.md): The content of a reality view that is displayed through a camera.
- [RealityViewContentProtocol](realityviewcontentprotocol.md): A protocol representing the content of a reality view.
- [RealityViewDefaultPlaceholder](realityviewdefaultplaceholder.md): A view that represents the default placeholder for a RealityView.
- [RealityViewEntityCollection](realityviewentitycollection.md): A collection of entities in a RealityView.
- [EntityCollection](entitycollection.md): An ordered, mutable collection of entities.

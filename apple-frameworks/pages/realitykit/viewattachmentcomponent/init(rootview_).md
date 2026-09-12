> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/viewattachmentcomponent/init(rootview:)](https://developer.apple.com/documentation/realitykit/viewattachmentcomponent/init(rootview:))

# init(rootView:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

A RealityKit component that manages a SwiftUI view hierarchy.

## Declaration

```swift
init<Content>(rootView: Content) where Content : View
```

<a id="discussion"></a>

## Discussion

Create a `ViewAttachmentComponent` component when you want to integrate SwiftUI views into a RealityKit entity hierarchy. At creation time, specify the SwiftUI view you want to use as the root view for this component; you can change that view later by creating a new component with a new root view and replacing the old component with the new one. Use `ViewAttachmentComponent` like you would any other component, by assigning it on an entity and adding that entity to your scene using a [RealityView](../realityview.md).

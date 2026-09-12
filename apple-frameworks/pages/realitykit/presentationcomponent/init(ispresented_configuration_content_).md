> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/presentationcomponent/init(ispresented:configuration:content:)](https://developer.apple.com/documentation/realitykit/presentationcomponent/init(ispresented:configuration:content:))

# init(isPresented:configuration:content:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Present `content` when a binding that you provide is `true`, using modality and options specified by `configuration`.

## Declaration

```swift
nonisolated init<Content>(isPresented: Binding<Bool>, configuration: PresentationComponent.Configuration, content: Content) where Content : View
```

## Parameters

- `isPresented`: A binding to a Boolean value that determines whether to present the content.
- `configuration`: A configuration that specifies the modality, appearance, and behavior of the presentation.
- `content`: The SwiftUI view hierarchy that you want to present with the component.

<a id="discussion"></a>

## Discussion

Use this component when you want to present a modal that is anchored to an entity.

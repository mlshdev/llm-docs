> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/breakthrougheffect(_:)](https://developer.apple.com/documentation/swiftui/view/breakthrougheffect(_:))

# breakthroughEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Ensures that the view is always visible to the user, even when other content is occluding it, like 3D models.

## Declaration

```swift
nonisolated func breakthroughEffect(_ effect: BreakthroughEffect) -> some View

```

## Parameters

- `effect`: The type of effect to apply when the view is occluded by other content.

<a id="discussion"></a>

## Discussion

Breakthrough is an effect allowing elements to be visible to the user even when other app content (3D models, UI elements) is positioned in front. The way the element breaks through content in front depends on the chosen [BreakthroughEffect](../breakthrougheffect.md).

This modifier can be used in a number of scenarios, including ornaments and `RealityView` attachments to have them break through in their entirety.

<a id="Regular-Elements"></a>

### Regular Elements

To have SwiftUI element break through content in front, apply the `breakthroughEffect` modifier directly to the View:

```swift
ResizeHandle()
    .breakthroughEffect(.subtle)
```

<a id="Ornaments"></a>

### Ornaments

When applied to the whole content of an ornament, the ornament (including its background) will break through content in front:

```swift
Text("A view with an ornament")
    .ornament(attachmentAnchor: .scene(.bottom)) {
        OrnamentContent()
            .glassBackgroundEffect()
            .breakthroughEffect(.prominent)
    }
```

<a id="RealityView-Attachments"></a>

### RealityView Attachments

Similarly, a `RealityView` `Attachment` can break through other entities in the RealityView, including the entity it is attached to:

```swift
Attachment(id: "example") {
    AttachmentContent()
        .breakthroughEffect(.subtle)
}
```

<a id="Presentations"></a>

### Presentations

Most system presentations appear with a breakthrough effect by default. For these cases, you can customize the type of effect by applying the [presentationBreakthroughEffect(\_:)](presentationbreakthrougheffect%28__%29.md) modifier to the content of the presentation, like in the following example:

```swift
Button("Show Details") {
    isShowingDetails = true
}
.popover(isPresented: $isShowingDetails) {
    DetailsView()
        .presentationBreakthroughEffect(.prominent)
}
```

This also applies to RealityKit presentations using `RealityKit/PresentationComponent`

## See Also

### Configuring passthrough

- [preferredSurroundingsEffect(\_:)](preferredsurroundingseffect%28__%29.md): Applies an effect to passthrough video.
- [SurroundingsEffect](../surroundingseffect.md): Effects that the system can apply to passthrough video.
- [BreakthroughEffect](../breakthrougheffect.md)

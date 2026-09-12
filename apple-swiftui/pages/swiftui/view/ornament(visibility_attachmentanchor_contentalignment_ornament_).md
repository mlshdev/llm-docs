> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ornament(visibility:attachmentanchor:contentalignment:ornament:)](https://developer.apple.com/documentation/swiftui/view/ornament(visibility:attachmentanchor:contentalignment:ornament:))

# ornament(visibility:attachmentAnchor:contentAlignment:ornament:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Presents an ornament.

## Declaration

```swift
@export(implementation) nonisolated func ornament<Content>(visibility: Visibility = .automatic, attachmentAnchor: OrnamentAttachmentAnchor, contentAlignment: Alignment3D = .back, @ContentBuilder ornament: () -> Content) -> some View where Content : View

```

## Parameters

- `visibility`: The visibility of the ornament.
- `attachmentAnchor`: The positioning anchor that defines the attachment point of the ornament.
- `contentAlignment`: The alignment of the ornament with its attachment anchor.

<a id="discussion"></a>

## Discussion

Use this method to show an ornament at the specified position. The example below displays an ornament below the window:

```swift
Text("A view with an ornament")
    .ornament(attachmentAnchor: .scene(.bottom)) {
        OrnamentContent()
    }
```

## See Also

### Creating an ornament

- [OrnamentAttachmentAnchor](../ornamentattachmentanchor.md): An attachment anchor for an ornament.

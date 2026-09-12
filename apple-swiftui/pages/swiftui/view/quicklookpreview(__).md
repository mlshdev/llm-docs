> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/quicklookpreview(_:)](https://developer.apple.com/documentation/swiftui/view/quicklookpreview(_:))

# quickLookPreview(\_:)

**Framework:** QuickLook  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Presents a Quick Look preview of the contents of a single URL.

## Declaration

```swift
nonisolated func quickLookPreview(_ item: Binding<URL?>) -> some View

```

## Parameters

- `item`: A [Binding](../binding.md) to a URL that should be previewed.

<a id="return-value"></a>

## Return Value

A view that presents the preview of the contents of the URL.

<a id="discussion"></a>

## Discussion

The Quick Look preview appears when you set the binding to a non-`nil` item. When you set the item back to `nil`, Quick Look dismisses the preview.

Upon dismissal by the user, Quick Look automatically sets the item binding to `nil`. Quick Look displays the preview when a non-`nil` item is set. Set `item` to `nil` to dismiss the preview.

## See Also

### Previewing content

- [quickLookPreview(\_:in:)](quicklookpreview%28__in_%29.md): Presents a Quick Look preview of the URLs you provide.

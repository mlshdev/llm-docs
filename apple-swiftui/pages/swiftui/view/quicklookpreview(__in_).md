> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/quicklookpreview(_:in:)](https://developer.apple.com/documentation/swiftui/view/quicklookpreview(_:in:))

# quickLookPreview(\_:in:)

**Framework:** QuickLook  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Presents a Quick Look preview of the URLs you provide.

## Declaration

```swift
nonisolated func quickLookPreview<Items>(_ selection: Binding<Items.Element?>, in items: Items) -> some View where Items : RandomAccessCollection, Items.Element == URL

```

## Parameters

- `selection`: A [Binding](../binding.md) to an element that’s part of the items collection. This is the URL that you currently want to preview.
- `items`: A collection of URLs to preview.

<a id="return-value"></a>

## Return Value

A view that presents the preview of the contents of the URL.

<a id="discussion"></a>

## Discussion

The Quick Look preview appears when you set the binding to a non-`nil` item. When you set the item back to `nil`, Quick Look dismisses the preview. If the value of the selection binding isn’t contained in the items collection, Quick Look treats it the same as a `nil` selection.

Quick Look updates the value of the selection binding to match the URL of the file the user is previewing. Upon dismissal by the user, Quick Look automatically sets the item binding to `nil`.

## See Also

### Previewing content

- [quickLookPreview(\_:)](quicklookpreview%28__%29.md): Presents a Quick Look preview of the contents of a single URL.

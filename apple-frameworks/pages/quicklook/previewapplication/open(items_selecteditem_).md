> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/previewapplication/open(items:selecteditem:)](https://developer.apple.com/documentation/quicklook/previewapplication/open(items:selecteditem:))

# open(items:selectedItem:)

**Framework:** Quick Look  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Previews the provided items.

## Declaration

```swift
final class func open(items: [PreviewItem], selectedItem: PreviewItem? = nil) -> PreviewSession
```

## Parameters

- `items`: An array of preview items to present in the new `PreviewApplication` scene.
- `selectedItem`: If provided and in the array of passed items, the preview item to select in the presented collection..

<a id="return-value"></a>

## Return Value

A `PreviewSession` instance.

<a id="discussion"></a>

## Discussion

This method launches the preview application with the provided preview items and, optionally, a selected item.

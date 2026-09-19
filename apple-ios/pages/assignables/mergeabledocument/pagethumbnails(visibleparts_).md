> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/mergeabledocument/pagethumbnails(visibleparts:)

# pageThumbnails(visibleParts:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Exports thumbnails of each page such that the thumbnails contain the indicated layers.

## Declaration

```swift
func pageThumbnails(visibleParts: [Self.PartID]) async -> [Self.Page.ID : Self.Page.Thumbnail]
```

## Parameters

- `visibleParts`: The lDs of layers that should be included in the thumbnail.

## Default Implementations

### MergeableDocument Implementations

- [pageThumbnails(visibleParts:)](pagethumbnails%28visibleparts_%29-51xw7.md): Conforms when `Page.ID` is `Self.Page.Document.Page.ID`. Exports thumbnails of each page such that the thumbnails contain the indicated layers.

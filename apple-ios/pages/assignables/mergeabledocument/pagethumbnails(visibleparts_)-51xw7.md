> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeabledocument/pagethumbnails(visibleparts:)-51xw7](https://developer.apple.com/documentation/assignables/mergeabledocument/pagethumbnails(visibleparts:)-51xw7)

# pageThumbnails(visibleParts:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Exports thumbnails of each page such that the thumbnails contain the indicated layers.

## Declaration

```swift
func pageThumbnails(visibleParts: [MergeablePartsContainerPartID]) async -> [Self.Page.ID : Self.Page.Thumbnail]
```

## Parameters

- `visibleParts`: The lDs of layers that should be included in the thumbnail.

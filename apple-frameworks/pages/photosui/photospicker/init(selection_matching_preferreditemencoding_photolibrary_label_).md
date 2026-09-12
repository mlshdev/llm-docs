> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/photospicker/init(selection:matching:preferreditemencoding:photolibrary:label:)](https://developer.apple.com/documentation/photosui/photospicker/init(selection:matching:preferreditemencoding:photolibrary:label:))

# init(selection:matching:preferredItemEncoding:photoLibrary:label:)

**Framework:** PhotosUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

Creates a picker that selects an item from the photo library you specify and optionally configures the types of items to show, item encoding, and label behavior.

## Declaration

```swift
@preconcurrency nonisolated init(selection: Binding<PhotosPickerItem?>, matching filter: PHPickerFilter? = nil, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy = .automatic, photoLibrary: PHPhotoLibrary, @ViewBuilder label: @Sendable () -> Label)
```

## Parameters

- `selection`: The item the picker displays in a selected state.
- `filter`: The types of items that the picker shows.
- `preferredItemEncoding`: The encoding policy of the selection.
- `photoLibrary`: The photo library to select from.
- `label`: The view that describes the action of choosing an item.

## See Also

### Creating a picker

- [init(selection:matching:preferredItemEncoding:label:)](init%28selection_matching_preferreditemencoding_label_%29.md): Creates a picker that selects an item and optionally configures the types of items to show, item encoding, and label behavior.
- [init(selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:label:)](init%28selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_label_%29.md): Creates a picker that selects a collection of items and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.
- [init(selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:label:)](init%28selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_photolibrary_label_%29.md): Creates a picker that selects a collection of items from the photo library you specify and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:photolibrary:)-6bm2n](https://developer.apple.com/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:photolibrary:)-6bm2n)

# init(\_:selection:matching:preferredItemEncoding:photoLibrary:)

**Framework:** PhotosUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

Creates a picker with a title and selection from the photo library you specify, and optionally configures the types of items to show, item encoding, and label behavior.

## Declaration

```swift
nonisolated init<S>(_ title: S, selection: Binding<PhotosPickerItem?>, matching filter: PHPickerFilter? = nil, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy = .automatic, photoLibrary: PHPhotoLibrary) where S : StringProtocol
```

## Parameters

- `title`: A string that describes the purpose of showing the picker.
- `selection`: The item the picker displays in a selected state.
- `filter`: The types of items that the picker shows.
- `preferredItemEncoding`: The encoding policy of the selection.
- `photoLibrary`: The photo library to select from.

## See Also

### Creating a picker with a title

- [init(\_:selection:matching:preferredItemEncoding:)](init%28__selection_matching_preferreditemencoding_%29-7jbef.md): Conforms when `Label` is `Text`. Creates a picker with a title key and selection, and optionally configures the types of items to show and item encoding behavior.
- [init(\_:selection:matching:preferredItemEncoding:)](init%28__selection_matching_preferreditemencoding_%29-48f7l.md): Conforms when `Label` is `Text`. Creates a picker with a title and selection, and optionally configures the types of items to show and item encoding behavior.
- [init(\_:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:)](init%28__selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_%29-8ac23.md): Conforms when `Label` is `Text`. Creates a picker with a title key and selection, and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.
- [init(\_:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:)](init%28__selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_%29-6m11r.md): Conforms when `Label` is `Text`. Creates a picker with a title and selection, and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.
- [init(\_:selection:matching:preferredItemEncoding:photoLibrary:)](init%28__selection_matching_preferreditemencoding_photolibrary_%29-bu7c.md): Conforms when `Label` is `Text`. Creates a picker with a title key and selection from the photo library you specify, and optionally configures the types of items to show, item encoding, and label behavior.
- [init(\_:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:)](init%28__selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_photolibrary_%29-5tpfd.md): Conforms when `Label` is `Text`. Creates a picker with a title key and selection from the photo library you specify, and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.
- [init(\_:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:)](init%28__selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_photolibrary_%29-6fwsc.md): Conforms when `Label` is `Text`. Creates a picker with a title and selection from the photo library you specify, and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.

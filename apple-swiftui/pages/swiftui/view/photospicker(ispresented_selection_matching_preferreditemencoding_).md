> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/photospicker(ispresented:selection:matching:preferreditemencoding:)](https://developer.apple.com/documentation/swiftui/view/photospicker(ispresented:selection:matching:preferreditemencoding:))

# photosPicker(isPresented:selection:matching:preferredItemEncoding:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 9.0+

Presents a Photos picker that selects a `PhotosPickerItem`.

## Declaration

```swift
nonisolated func photosPicker(isPresented: Binding<Bool>, selection: Binding<PhotosPickerItem?>, matching filter: PHPickerFilter? = nil, preferredItemEncoding: PhotosPickerItem.EncodingDisambiguationPolicy = .automatic) -> some View

```

## Parameters

- `isPresented`: The binding to whether the Photos picker should be shown.
- `selection`: The item being shown and selected in the Photos picker.
- `filter`: Types of items that can be shown. Default is `nil`. Setting it to `nil` means all supported types can be shown.
- `preferredItemEncoding`: The encoding disambiguation policy of the selected item. Default is `.automatic`. Setting it to `.automatic` means the best encoding determined by the system will be used.

<a id="discussion"></a>

## Discussion

The user explicitly grants access only to items they choose, so photo library access authorization is not needed.

## See Also

### Selecting photos

- [PhotosPicker](https://developer.apple.com/documentation/photosui/photospicker): A view that displays a Photos picker for choosing assets from the photo library.
- [photosPicker(isPresented:selection:matching:preferredItemEncoding:photoLibrary:)](photospicker%28ispresented_selection_matching_preferreditemencoding_photolibrary_%29.md): Presents a Photos picker that selects a `PhotosPickerItem` from a given photo library.
- [photosPicker(isPresented:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:)](photospicker%28ispresented_selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_%29.md): Presents a Photos picker that selects a collection of `PhotosPickerItem`.
- [photosPicker(isPresented:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:)](photospicker%28ispresented_selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_photolibrary_%29.md): Presents a Photos picker that selects a collection of `PhotosPickerItem` from a given photo library.
- [photosPickerAccessoryVisibility(\_:edges:)](photospickeraccessoryvisibility%28__edges_%29.md): Sets the accessory visibility of the Photos picker. Accessories include anything between the content and the edge, like the navigation bar or the sidebar.
- [photosPickerDisabledCapabilities(\_:)](photospickerdisabledcapabilities%28__%29.md): Disables capabilities of the Photos picker.
- [photosPickerSearchText(\_:)](photospickersearchtext%28__%29.md): Sets search text of the Photos picker.
- [photosPickerStyle(\_:)](photospickerstyle%28__%29.md): Sets the mode of the Photos picker.
- [photosPickerMetadataOptions(\_:)](photospickermetadataoptions%28__%29.md): Sets metadata options for the Photos picker.
- [photosSharedAlbumCreationSheet(isPresented:defaultTitle:defaultSharingPolicy:photoLibrary:onCompletion:)](photossharedalbumcreationsheet%28ispresented_defaulttitle_defaultsharingpolicy_photolibrary_oncompletion_%29.md): Presents a view for allowing the user to create a new shared album.
- [photosSharedAlbumCustomizationSheet(isPresented:albumIdentifier:photoLibrary:onCompletion:)](photossharedalbumcustomizationsheet%28ispresented_albumidentifier_photolibrary_oncompletion_%29.md): Presents a view for allowing the user to customize a specified shared album.
- [photosSharedAlbumPostingSheet(isPresented:items:defaultAlbumIdentifier:photoLibrary:completion:)](photossharedalbumpostingsheet%28ispresented_items_defaultalbumidentifier_photolibrary_completion_%29.md): Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.

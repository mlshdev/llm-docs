> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/photossharedalbumcreationsheet(ispresented:defaulttitle:defaultsharingpolicy:photolibrary:oncompletion:)](https://developer.apple.com/documentation/swiftui/view/photossharedalbumcreationsheet(ispresented:defaulttitle:defaultsharingpolicy:photolibrary:oncompletion:))

# photosSharedAlbumCreationSheet(isPresented:defaultTitle:defaultSharingPolicy:photoLibrary:onCompletion:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Presents a view for allowing the user to create a new shared album.

## Declaration

```swift
nonisolated func photosSharedAlbumCreationSheet(isPresented: Binding<Bool>, defaultTitle: String? = nil, defaultSharingPolicy: PHSharedAlbumCreationSharingPolicy? = nil, photoLibrary: PHPhotoLibrary, onCompletion: ((PHSharedAlbumCreationResult?) -> Void)? = nil) -> some View

```

## Parameters

- `isPresented`: The binding for whether the shared album creation view should be shown.
- `defaultTitle`: The default title for the shared album. Useful for suggesting a relevant title to the user.
- `defaultSharingPolicy`: The default sharing policy of the shared album. If `nil`, this defaults to `.private`.
- `photoLibrary`: The photo library in which the shared album will be created.
- `onCompletion`: The callback that will be invoked when shared album creation has succeeded or failed. On success, the result’s `albumIdentifier` and `albumURL` will be non-nil. On failure, the result’s `error` will be non-nil.

<a id="discussion"></a>

## Discussion

> **Remark**

>  When creation is finished, `onCompletion` will be called before`isPresented` is set to `false`. If the user cancels creation, `isPresented` will be set to `false` and `onCompletion` will not be called.

## See Also

### Selecting photos

- [PhotosPicker](https://developer.apple.com/documentation/photosui/photospicker): A view that displays a Photos picker for choosing assets from the photo library.
- [photosPicker(isPresented:selection:matching:preferredItemEncoding:)](photospicker%28ispresented_selection_matching_preferreditemencoding_%29.md): Presents a Photos picker that selects a `PhotosPickerItem`.
- [photosPicker(isPresented:selection:matching:preferredItemEncoding:photoLibrary:)](photospicker%28ispresented_selection_matching_preferreditemencoding_photolibrary_%29.md): Presents a Photos picker that selects a `PhotosPickerItem` from a given photo library.
- [photosPicker(isPresented:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:)](photospicker%28ispresented_selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_%29.md): Presents a Photos picker that selects a collection of `PhotosPickerItem`.
- [photosPicker(isPresented:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:)](photospicker%28ispresented_selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_photolibrary_%29.md): Presents a Photos picker that selects a collection of `PhotosPickerItem` from a given photo library.
- [photosPickerAccessoryVisibility(\_:edges:)](photospickeraccessoryvisibility%28__edges_%29.md): Sets the accessory visibility of the Photos picker. Accessories include anything between the content and the edge, like the navigation bar or the sidebar.
- [photosPickerDisabledCapabilities(\_:)](photospickerdisabledcapabilities%28__%29.md): Disables capabilities of the Photos picker.
- [photosPickerSearchText(\_:)](photospickersearchtext%28__%29.md): Sets search text of the Photos picker.
- [photosPickerStyle(\_:)](photospickerstyle%28__%29.md): Sets the mode of the Photos picker.
- [photosPickerMetadataOptions(\_:)](photospickermetadataoptions%28__%29.md): Sets metadata options for the Photos picker.
- [photosSharedAlbumCustomizationSheet(isPresented:albumIdentifier:photoLibrary:onCompletion:)](photossharedalbumcustomizationsheet%28ispresented_albumidentifier_photolibrary_oncompletion_%29.md): Presents a view for allowing the user to customize a specified shared album.
- [photosSharedAlbumPostingSheet(isPresented:items:defaultAlbumIdentifier:photoLibrary:completion:)](photossharedalbumpostingsheet%28ispresented_items_defaultalbumidentifier_photolibrary_completion_%29.md): Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.

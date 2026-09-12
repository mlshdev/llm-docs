> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/photossharedalbumcustomizationsheet(ispresented:albumidentifier:photolibrary:oncompletion:)](https://developer.apple.com/documentation/swiftui/view/photossharedalbumcustomizationsheet(ispresented:albumidentifier:photolibrary:oncompletion:))

# photosSharedAlbumCustomizationSheet(isPresented:albumIdentifier:photoLibrary:onCompletion:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Presents a view for allowing the user to customize a specified shared album.

## Declaration

```swift
nonisolated func photosSharedAlbumCustomizationSheet(isPresented: Binding<Bool>, albumIdentifier: String?, photoLibrary: PHPhotoLibrary, onCompletion: (((any Error)?) -> Void)? = nil) -> some View

```

## Parameters

- `isPresented`: The binding for whether the shared album customization sheet should be shown.
- `albumIdentifier`: The identifier of the shared album to be customized. Must be non-nil by the time `isPresented` is set to `true`.
- `photoLibrary`: The photo library in which the specified shared album exists.
- `onCompletion`: The callback that will be invoked when the customization has succeeded or failed. On failure, the error will be non-nil.

<a id="discussion"></a>

## Discussion

> **Remark**

>  In order for the interface to appear, both `isPresented` must be `true` and `albumIdentifier` must not be `nil`. When the customization is finished, `isPresented` will be set to `false` before `onCompletion` is called. If the user cancels customization, `isPresented` will be set to `false` and `onCompletion` will not be called.

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
- [photosSharedAlbumCreationSheet(isPresented:defaultTitle:defaultSharingPolicy:photoLibrary:onCompletion:)](photossharedalbumcreationsheet%28ispresented_defaulttitle_defaultsharingpolicy_photolibrary_oncompletion_%29.md): Presents a view for allowing the user to create a new shared album.
- [photosSharedAlbumPostingSheet(isPresented:items:defaultAlbumIdentifier:photoLibrary:completion:)](photossharedalbumpostingsheet%28ispresented_items_defaultalbumidentifier_photolibrary_completion_%29.md): Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.

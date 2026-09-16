> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/photosreferenceimageviewer(asset:onprocessingcompletion:)

# photosReferenceImageViewer(asset:onProcessingCompletion:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Presents an image viewer for an asset in a photo library that contains Apple Reference Image data when `isPresented` is set to true.

## Declaration

```swift
@MainActor @preconcurrency func photosReferenceImageViewer(asset: Binding<PHAsset?>, onProcessingCompletion: ((Result<PHAsset, any Error>) -> Void)?) -> some View

```

<a id="discussion"></a>

## Discussion

- Parameters

  - isPresented: A binding that determines when this view is presented.
  - asset: A `PHAsset` that is an image that contains Apple Reference Image data.
  - onProcessingCompletion: An optional closure called when processing completes.

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
- [photosSharedAlbumCustomizationSheet(isPresented:albumIdentifier:photoLibrary:onCompletion:)](photossharedalbumcustomizationsheet%28ispresented_albumidentifier_photolibrary_oncompletion_%29.md): Presents a view for allowing the user to customize a specified shared album.
- [photosSharedAlbumPostingSheet(isPresented:items:defaultAlbumIdentifier:photoLibrary:completion:)](photossharedalbumpostingsheet%28ispresented_items_defaultalbumidentifier_photolibrary_completion_%29.md): Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.
- [photosReferenceImageViewer(fileURL:onProcessingCompletion:)](photosreferenceimageviewer%28fileurl_onprocessingcompletion_%29.md): Presents an image viewer for a given image file containing Apple Reference Image data when `fileURL` is set.
- [photosReferenceImageViewer(pickerItem:onProcessingCompletion:)](photosreferenceimageviewer%28pickeritem_onprocessingcompletion_%29.md): Presents an image viewer for an image containing Apple Reference Image data selected from the Photos picker when `isPresented` is set to true.

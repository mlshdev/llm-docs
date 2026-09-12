> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/posttophotossharedalbumsheet(ispresented:items:photolibrary:defaultalbumidentifier:completion:)](https://developer.apple.com/documentation/swiftui/view/posttophotossharedalbumsheet(ispresented:items:photolibrary:defaultalbumidentifier:completion:))

# postToPhotosSharedAlbumSheet(isPresented:items:photoLibrary:defaultAlbumIdentifier:completion:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0)

Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.

> Use View.photosSharedAlbumPostingSheet(isPresented:items:defaultAlbumIdentifier:photoLibrary:completion:) instead.

## Declaration

```swift
nonisolated func postToPhotosSharedAlbumSheet(isPresented: Binding<Bool>, items: [PHPickerResult], photoLibrary: PHPhotoLibrary, defaultAlbumIdentifier: String? = nil, completion: ((Result<Void, any Error>) -> Void)? = nil) -> some View

```

## Parameters

- `isPresented`: The binding to whether the sheet should be shown.
- `items`: The items to be posted to the shared album.
- `photoLibrary`: Library to choose from.
- `defaultAlbumIdentifier`: Identifier for the shared album to be pre-selected. If none provided user can manually choose the shared album in UI.
- `completion`: Called with the result on completion of the request.

## See Also

### Technology-specific modifiers

- [offerCodeRedemption(isPresented:onCompletion:)](offercoderedemption%28ispresented_oncompletion_%29.md): Deprecated.
- [subscriptionPromotionalOffer(offer:signature:)](subscriptionpromotionaloffer%28offer_signature_%29.md): Deprecated. Selects a promotional offer to apply to a purchase a customer makes from a subscription store view.

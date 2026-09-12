> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/photosreferenceimageviewer(asset:onprocessingcompletion:)](https://developer.apple.com/documentation/swiftui/view/photosreferenceimageviewer(asset:onprocessingcompletion:))

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

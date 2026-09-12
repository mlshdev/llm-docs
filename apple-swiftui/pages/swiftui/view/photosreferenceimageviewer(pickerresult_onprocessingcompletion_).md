> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/photosreferenceimageviewer(pickerresult:onprocessingcompletion:)](https://developer.apple.com/documentation/swiftui/view/photosreferenceimageviewer(pickerresult:onprocessingcompletion:))

# photosReferenceImageViewer(pickerResult:onProcessingCompletion:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Presents an image viewer for the resulting image containing Apple Reference Image data from `PHPickerViewController` when `isPresented` is set to true.

## Declaration

```swift
@MainActor @preconcurrency func photosReferenceImageViewer(pickerResult: Binding<PHPickerResult?>, onProcessingCompletion: ((Result<PHAsset, any Error>) -> Void)?) -> some View

```

<a id="discussion"></a>

## Discussion

- Parameters

  - isPresented: A binding that determines when this view is presented.
  - pickerResult: The result from a `PHPickerViewController`
  - onProcessingCompletion: An optional closure called when processing completes.

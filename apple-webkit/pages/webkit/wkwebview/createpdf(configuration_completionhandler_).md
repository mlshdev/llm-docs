> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/createpdf(configuration:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/createpdf(configuration:completionhandler:))

# createPDF(configuration:completionHandler:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS

Generates PDF data from the web view’s contents asynchronously.

## Declaration

```swift
@MainActor @preconcurrency func createPDF(configuration: WKPDFConfiguration = .init(), completionHandler: @escaping @MainActor @Sendable (Result<Data, any Error>) -> Void)
```

## Parameters

- `configuration`: The object that specifies the portion of the web view to capture as PDF data.
- `completionHandler`: The completion handler to call when the data is ready. This block has no return value and takes the following parameters:

  - **pdfDocumentData**: A data object that contains the PDF data to use for rendering the contents of the web view.
  - **error**: An error object if a problem occurred, or `nil` on success.

## See Also

### Capturing the web view’s content

- [takeSnapshot(with:completionHandler:)](takesnapshot%28with_completionhandler_%29.md): Generates a platform-native image from the web view’s contents asynchronously.
- [pdf(configuration:)](pdf%28configuration_%29.md): Generates PDF data from the web view’s contents asynchronously.
- [createWebArchiveData(completionHandler:)](createwebarchivedata%28completionhandler_%29.md): Creates a web archive of the web view’s current contents asynchronously.
- [printOperation(with:)](printoperation%28with_%29.md): Returns the print operation object to use when printing the contents of the web view.
- [WKSnapshotConfiguration](../wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](../wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

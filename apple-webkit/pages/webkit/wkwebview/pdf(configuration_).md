> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/pdf(configuration:)](https://developer.apple.com/documentation/webkit/wkwebview/pdf(configuration:))

# pdf(configuration:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS

Generates PDF data from the web view’s contents asynchronously.

## Declaration

```swift
@MainActor @preconcurrency func pdf(configuration: WKPDFConfiguration = .init()) async throws -> Data
```

## Parameters

- `configuration`: The object that specifies the portion of the web view to capture as PDF data.

<a id="return-value"></a>

## Return Value

A data object that contains the PDF data to use for rendering the contents of the web view.

## See Also

### Capturing the web view’s content

- [takeSnapshot(with:completionHandler:)](takesnapshot%28with_completionhandler_%29.md): Generates a platform-native image from the web view’s contents asynchronously.
- [createPDF(configuration:completionHandler:)](createpdf%28configuration_completionhandler_%29.md): Generates PDF data from the web view’s contents asynchronously.
- [createWebArchiveData(completionHandler:)](createwebarchivedata%28completionhandler_%29.md): Creates a web archive of the web view’s current contents asynchronously.
- [printOperation(with:)](printoperation%28with_%29.md): Returns the print operation object to use when printing the contents of the web view.
- [WKSnapshotConfiguration](../wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](../wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

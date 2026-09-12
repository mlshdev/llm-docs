> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/printoperation(with:)](https://developer.apple.com/documentation/webkit/wkwebview/printoperation(with:))

# printOperation(with:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns the print operation object to use when printing the contents of the web view.

## Declaration

```swift
func printOperation(with printInfo: NSPrintInfo) -> NSPrintOperation
```

## Parameters

- `printInfo`: The printer information object to use when configuring the print operation.

<a id="return-value"></a>

## Return Value

The print operation object to use when printing the web view, or `nil` if printing is not supported.

## See Also

### Capturing the web view’s content

- [takeSnapshot(with:completionHandler:)](takesnapshot%28with_completionhandler_%29.md): Generates a platform-native image from the web view’s contents asynchronously.
- [createPDF(configuration:completionHandler:)](createpdf%28configuration_completionhandler_%29.md): Generates PDF data from the web view’s contents asynchronously.
- [pdf(configuration:)](pdf%28configuration_%29.md): Generates PDF data from the web view’s contents asynchronously.
- [createWebArchiveData(completionHandler:)](createwebarchivedata%28completionhandler_%29.md): Creates a web archive of the web view’s current contents asynchronously.
- [WKSnapshotConfiguration](../wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](../wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

# printOperationWithPrintInfo: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns the print operation object to use when printing the contents of the web view.

## Declaration

```objectivec
- (NSPrintOperation *) printOperationWithPrintInfo:(NSPrintInfo *) printInfo;
```

## Parameters

- `printInfo`: The printer information object to use when configuring the print operation.

<a id="return-value"></a>

## Return Value

The print operation object to use when printing the web view, or `nil` if printing is not supported.

## See Also

### Capturing the web view’s content

- [takeSnapshotWithConfiguration:completionHandler:](takesnapshot%28with_completionhandler_%29.md): Generates a platform-native image from the web view’s contents asynchronously.
- [createPDFWithConfiguration:completionHandler:](createpdfwithconfiguration_completionhandler_.md): Generates PDF data from the web view’s contents asynchronously.
- [createWebArchiveDataWithCompletionHandler:](createwebarchivedatawithcompletionhandler_.md): Creates a web archive of the web view’s contents asynchronously.
- [WKSnapshotConfiguration](../wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](../wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

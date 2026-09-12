> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/createwebarchivedatawithcompletionhandler:](https://developer.apple.com/documentation/webkit/wkwebview/createwebarchivedatawithcompletionhandler:)

# createWebArchiveDataWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a web archive of the web view’s contents asynchronously.

## Declaration

```objectivec
- (void) createWebArchiveDataWithCompletionHandler:(void (^)(NSData *, NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler block to call when the web archive data is ready. This block has no return value and takes the following parameters:

  - **data**: A data object that contains the web archive.
  - **error**: An error object if an error occurs, or `nil` on success.

## See Also

### Capturing the web view’s content

- [takeSnapshotWithConfiguration:completionHandler:](takesnapshot%28with_completionhandler_%29.md): Generates a platform-native image from the web view’s contents asynchronously.
- [createPDFWithConfiguration:completionHandler:](createpdfwithconfiguration_completionhandler_.md): Generates PDF data from the web view’s contents asynchronously.
- [printOperationWithPrintInfo:](printoperation%28with_%29.md): Returns the print operation object to use when printing the contents of the web view.
- [WKSnapshotConfiguration](../wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](../wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

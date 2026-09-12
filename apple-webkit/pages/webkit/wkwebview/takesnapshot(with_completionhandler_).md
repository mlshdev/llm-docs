> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/takesnapshot(with:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/takesnapshot(with:completionhandler:))

# takeSnapshot(with:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Generates a platform-native image from the web view’s contents asynchronously.

## Declaration

```swift
func takeSnapshot(with snapshotConfiguration: WKSnapshotConfiguration?, completionHandler: @escaping @MainActor @Sendable (UIImage?, (any Error)?) -> Void)
```

```swift
func takeSnapshot(configuration snapshotConfiguration: WKSnapshotConfiguration?) async throws -> UIImage
```

```swift
func takeSnapshot(with snapshotConfiguration: WKSnapshotConfiguration?, completionHandler: @escaping @MainActor @Sendable (NSImage?, (any Error)?) -> Void)
```

```swift
func takeSnapshot(configuration snapshotConfiguration: WKSnapshotConfiguration?) async throws -> NSImage
```

## Parameters

- `snapshotConfiguration`: The object that specifies the portion of the web view to capture, and other capture-related behaviors.
- `completionHandler`: The completion handler to call when the image is ready. This block has no return value and takes the following parameters:

  - **snapshotImage**: A platform-native image that contains the specified portion of the web view.
  - **error**: An error object if a problem occurred, or `nil` on success.

## See Also

### Capturing the web view’s content

- [createPDF(configuration:completionHandler:)](createpdf%28configuration_completionhandler_%29.md): Generates PDF data from the web view’s contents asynchronously.
- [pdf(configuration:)](pdf%28configuration_%29.md): Generates PDF data from the web view’s contents asynchronously.
- [createWebArchiveData(completionHandler:)](createwebarchivedata%28completionhandler_%29.md): Creates a web archive of the web view’s current contents asynchronously.
- [printOperation(with:)](printoperation%28with_%29.md): Returns the print operation object to use when printing the contents of the web view.
- [WKSnapshotConfiguration](../wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](../wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

# takeSnapshotWithConfiguration:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Generates a platform-native image from the web view’s contents asynchronously.

## Declaration

```objectivec
- (void) takeSnapshotWithConfiguration:(WKSnapshotConfiguration *) snapshotConfiguration completionHandler:(void (^)(UIImage *, NSError *)) completionHandler;
```

```objectivec
- (void) takeSnapshotWithConfiguration:(WKSnapshotConfiguration *) snapshotConfiguration completionHandler:(void (^)(NSImage *, NSError *)) completionHandler;
```

## Parameters

- `snapshotConfiguration`: The object that specifies the portion of the web view to capture, and other capture-related behaviors.
- `completionHandler`: The completion handler to call when the image is ready. This block has no return value and takes the following parameters:

  - **snapshotImage**: A platform-native image that contains the specified portion of the web view.
  - **error**: An error object if a problem occurred, or `nil` on success.

## See Also

### Capturing the web view’s content

- [createPDFWithConfiguration:completionHandler:](createpdfwithconfiguration_completionhandler_.md): Generates PDF data from the web view’s contents asynchronously.
- [createWebArchiveDataWithCompletionHandler:](createwebarchivedatawithcompletionhandler_.md): Creates a web archive of the web view’s contents asynchronously.
- [printOperationWithPrintInfo:](printoperation%28with_%29.md): Returns the print operation object to use when printing the contents of the web view.
- [WKSnapshotConfiguration](../wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](../wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

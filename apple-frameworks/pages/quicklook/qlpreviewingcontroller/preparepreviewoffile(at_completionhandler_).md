> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewingcontroller/preparepreviewoffile(at:completionhandler:)](https://developer.apple.com/documentation/quicklook/qlpreviewingcontroller/preparepreviewoffile(at:completionhandler:))

# preparePreviewOfFile(at:completionHandler:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

## Declaration

```swift
optional func preparePreviewOfFile(at url: URL, completionHandler handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func preparePreviewOfFile(at url: URL) async throws
```

## Parameters

- `url`: The URL of the file the user is about to preview.
- `handler`: The completion handler should be called whenever the view is ready to be displayed. A loading spinner will be shown until the handler is called. It can be called asynchronously after the method has returned.

<a id="discussion"></a>

## Discussion

Use this method to prepare the content of the view controller with the given file URL.

This method will be called only once. It will be called in the main thread before presenting the view controller. Heavy work potentially blocking the main thread should be avoided in this method.

# preparePreviewOfFileAtURL:completionHandler: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) preparePreviewOfFileAtURL:(NSURL *) url completionHandler:(void (^)(NSError *)) handler;
```

## Parameters

- `url`: The URL of the file the user is about to preview.
- `handler`: The completion handler should be called whenever the view is ready to be displayed. A loading spinner will be shown until the handler is called. It can be called asynchronously after the method has returned.

<a id="discussion"></a>

## Discussion

Use this method to prepare the content of the view controller with the given file URL.

This method will be called only once. It will be called in the main thread before presenting the view controller. Heavy work potentially blocking the main thread should be avoided in this method.

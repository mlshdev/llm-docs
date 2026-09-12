> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewingcontroller/providepreview(for:completionhandler:)](https://developer.apple.com/documentation/quicklook/qlpreviewingcontroller/providepreview(for:completionhandler:))

# providePreview(for:completionHandler:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
optional func providePreview(for request: QLFilePreviewRequest, completionHandler handler: @escaping @Sendable (QLPreviewReply?, (any Error)?) -> Void)
```

```swift
optional func providePreview(for request: QLFilePreviewRequest) async throws -> QLPreviewReply
```

## Parameters

- `request`: An object which contains information about the preview that should be provided. It contains the URL of the file to provide a preview for.
- `handler`: Call the completion handler with a QLPreviewReply if you can provide a preview, or with an NSError if you cannot. If an error is passed or reply is nil, a generic preview will be provided instead. The handler can be called asynchronously after the method has returned.

<a id="discussion"></a>

## Discussion

Use this method to provide a QLPreviewReply that provides preview in the form of NSData, NSURL, PDFDocument, or a drawing into a context.

# providePreviewForFileRequest:completionHandler: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) providePreviewForFileRequest:(QLFilePreviewRequest *) request completionHandler:(void (^)(QLPreviewReply *reply, NSError *error)) handler;
```

## Parameters

- `request`: An object which contains information about the preview that should be provided. It contains the URL of the file to provide a preview for.
- `handler`: Call the completion handler with a QLPreviewReply if you can provide a preview, or with an NSError if you cannot. If an error is passed or reply is nil, a generic preview will be provided instead. The handler can be called asynchronously after the method has returned.

<a id="discussion"></a>

## Discussion

Use this method to provide a QLPreviewReply that provides preview in the form of NSData, NSURL, PDFDocument, or a drawing into a context.

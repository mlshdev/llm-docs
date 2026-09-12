> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewingcontroller/preparepreviewoffile(at:completionhandler:)](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller/preparepreviewoffile(at:completionhandler:))

# preparePreviewOfFile(at:completionHandler:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Prepares the preview of a file at the specified file’s URL.

## Declaration

```swift
optional func preparePreviewOfFile(at url: URL, completionHandler handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func preparePreviewOfFile(at url: URL) async throws
```

## Parameters

- `url`: The URL of the file to preview.
- `handler`: A completion handler that notifies the platform that a preview is available. The operating system shows a loading spinner, so call the handler as soon as possible. You can call the completion handler asynchronously after returning from the callback.

<a id="Discussion"></a>

## Discussion

The operating system calls this method only once from the main thread before it presents the previewing controller. To avoid blocking the main thread, don’t perform long-running or resource-intensive work.

When preparing and displaying the view controller, avoid holding open a file descriptors while the user is previewing the file.

## See Also

### Instance Methods

- [preparePreviewOfSearchableItem(identifier:queryString:completionHandler:)](preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md): Prepares the preview for a file by using the data from Spotlight’s searchable item.
- [providePreview(for:completionHandler:)](providepreview%28for_completionhandler_%29.md): Prepares the preview of a file identified within a file preview request.

# preparePreviewOfFileAtURL:completionHandler: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Prepares the preview of a file at the specified file’s URL.

## Declaration

```objectivec
- (void) preparePreviewOfFileAtURL:(NSURL *) url completionHandler:(void (^)(NSError *)) handler;
```

## Parameters

- `url`: The URL of the file to preview.
- `handler`: A completion handler that notifies the platform that a preview is available. The operating system shows a loading spinner, so call the handler as soon as possible. You can call the completion handler asynchronously after returning from the callback.

<a id="Discussion"></a>

## Discussion

The operating system calls this method only once from the main thread before it presents the previewing controller. To avoid blocking the main thread, don’t perform long-running or resource-intensive work.

When preparing and displaying the view controller, avoid holding open a file descriptors while the user is previewing the file.

## See Also

### Instance Methods

- [preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:](preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md): Prepares the preview for a file by using the data from Spotlight’s searchable item.
- [providePreviewForFileRequest:completionHandler:](providepreview%28for_completionhandler_%29.md): Prepares the preview of a file identified within a file preview request.

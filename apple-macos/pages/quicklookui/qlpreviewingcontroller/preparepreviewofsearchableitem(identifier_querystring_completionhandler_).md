> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewingcontroller/preparepreviewofsearchableitem(identifier:querystring:completionhandler:)](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller/preparepreviewofsearchableitem(identifier:querystring:completionhandler:))

# preparePreviewOfSearchableItem(identifier:queryString:completionHandler:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Prepares the preview for a file by using the data from Spotlight’s searchable item.

## Declaration

```swift
optional func preparePreviewOfSearchableItem(identifier: String, queryString: String?, completionHandler handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func preparePreviewOfSearchableItem(identifier: String, queryString: String?) async throws
```

## Parameters

- `identifier`: The identifier of the searchable item.
- `queryString`: A search string to associate with the searchable item.
- `handler`: A completion handler that notifies the platform that a preview is available. The operating system shows a loading spinner, so call the handler as soon as possible. You can call the completion handler asynchronously after returning from the callback.

<a id="Discussion"></a>

## Discussion

The operating system calls this method only once from the main thread before it presents the previewing controller. To avoid blocking the main thread, don’t perform long-running or resource-intensive work.

## See Also

### Instance Methods

- [preparePreviewOfFile(at:completionHandler:)](preparepreviewoffile%28at_completionhandler_%29.md): Prepares the preview of a file at the specified file’s URL.
- [providePreview(for:completionHandler:)](providepreview%28for_completionhandler_%29.md): Prepares the preview of a file identified within a file preview request.

# preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Prepares the preview for a file by using the data from Spotlight’s searchable item.

## Declaration

```objectivec
- (void) preparePreviewOfSearchableItemWithIdentifier:(NSString *) identifier queryString:(NSString *) queryString completionHandler:(void (^)(NSError *)) handler;
```

## Parameters

- `identifier`: The identifier of the searchable item.
- `queryString`: A search string to associate with the searchable item.
- `handler`: A completion handler that notifies the platform that a preview is available. The operating system shows a loading spinner, so call the handler as soon as possible. You can call the completion handler asynchronously after returning from the callback.

<a id="Discussion"></a>

## Discussion

The operating system calls this method only once from the main thread before it presents the previewing controller. To avoid blocking the main thread, don’t perform long-running or resource-intensive work.

## See Also

### Instance Methods

- [preparePreviewOfFileAtURL:completionHandler:](preparepreviewoffile%28at_completionhandler_%29.md): Prepares the preview of a file at the specified file’s URL.
- [providePreviewForFileRequest:completionHandler:](providepreview%28for_completionhandler_%29.md): Prepares the preview of a file identified within a file preview request.

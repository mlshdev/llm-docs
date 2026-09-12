> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewingcontroller/providepreview(for:completionhandler:)](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller/providepreview(for:completionhandler:))

# providePreview(for:completionHandler:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Prepares the preview of a file identified within a file preview request.

## Declaration

```swift
optional func providePreview(for request: QLFilePreviewRequest, completionHandler handler: @escaping @Sendable (QLPreviewReply?, (any Error)?) -> Void)
```

```swift
optional func providePreview(for request: QLFilePreviewRequest) async throws -> QLPreviewReply
```

## Parameters

- `request`: The file preview request that identifies the content to preview.
- `handler`: The closure to call with a doc://com.apple.documentation/documentation/quicklook/qlpreviewreply for the system to display as the preview.

## See Also

### Instance Methods

- [preparePreviewOfFile(at:completionHandler:)](preparepreviewoffile%28at_completionhandler_%29.md): Prepares the preview of a file at the specified file’s URL.
- [preparePreviewOfSearchableItem(identifier:queryString:completionHandler:)](preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md): Prepares the preview for a file by using the data from Spotlight’s searchable item.

# providePreviewForFileRequest:completionHandler: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Prepares the preview of a file identified within a file preview request.

## Declaration

```objectivec
- (void) providePreviewForFileRequest:(QLFilePreviewRequest *) request completionHandler:(void (^)(QLPreviewReply *reply, NSError *error)) handler;
```

## Parameters

- `request`: The file preview request that identifies the content to preview.
- `handler`: The closure to call with a doc://com.apple.documentation/documentation/quicklook/qlpreviewreply for the system to display as the preview.

## See Also

### Instance Methods

- [preparePreviewOfFileAtURL:completionHandler:](preparepreviewoffile%28at_completionhandler_%29.md): Prepares the preview of a file at the specified file’s URL.
- [preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:](preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md): Prepares the preview for a file by using the data from Spotlight’s searchable item.

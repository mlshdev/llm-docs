> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdatasource/contentitem(foridentifier:completionhandler:)](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdatasource/contentitem(foridentifier:completionhandler:))

# contentItem(forIdentifier:completionHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the content item associated with the provided identifier.

> Use CarPlay framework

## Declaration

```swift
optional func contentItem(forIdentifier identifier: String, completionHandler: @escaping @Sendable (MPContentItem?, (any Error)?) -> Void)
```

```swift
optional func contentItem(forIdentifier identifier: String) async throws -> MPContentItem
```

## Parameters

- `identifier`: The String that identifies a content item.
- `completionHandler`: A block that is called after the content item has been loaded.

  - **contentItem**: The content item associated with the identifier. If there is no content item, the value of this parameter is `nil`.
  - **error**: If an error occurred, this parameter holds the error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

Client apps should always call the completion handler after loading has finished.

## See Also

### Retrieving a media item

- [contentItem(at:)](contentitem%28at_%29.md): Deprecated. Retrieves the media item at the specified index.

# contentItemForIdentifier:completionHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the content item associated with the provided identifier.

> Use CarPlay framework

## Declaration

```objectivec
- (void) contentItemForIdentifier:(NSString *) identifier completionHandler:(void (^)(MPContentItem *, NSError *)) completionHandler;
```

## Parameters

- `identifier`: The String that identifies a content item.
- `completionHandler`: A block that is called after the content item has been loaded.

  - **contentItem**: The content item associated with the identifier. If there is no content item, the value of this parameter is `nil`.
  - **error**: If an error occurred, this parameter holds the error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

Client apps should always call the completion handler after loading has finished.

## See Also

### Retrieving a media item

- [contentItemAtIndexPath:](contentitem%28at_%29.md): Deprecated. Retrieves the media item at the specified index.

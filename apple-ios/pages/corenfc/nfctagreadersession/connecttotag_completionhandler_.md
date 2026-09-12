> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/connecttotag:completionhandler:](https://developer.apple.com/documentation/corenfc/nfctagreadersession/connecttotag:completionhandler:)

# connectToTag:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Connects the reader session to a tag and activates that tag.

## Declaration

```objectivec
- (void) connectToTag:(id<NFCTag>) tag completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `tag`: A tag to which the reader session should attempt to connect.
- `completionHandler`: A handler that the reader session invokes after completing the tag-connect request. The handler has the following parameter:

  - **error**: `nil` when the session successfully connects to the tag; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object.

  The session calls `completionHandler` on the dispatch queue provided when creating the [NFCTagReaderSession](../nfctagreadersession.md).

<a id="Discussion"></a>

## Discussion

A tag stays connected until your app connects to a different tag or restarts polling. Connecting to a tag that is already connected has no effect.

## See Also

### Connecting to a Tag

- [connectedTag](connectedtag-1mnjc.md): The tag connected to the reader session.

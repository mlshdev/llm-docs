> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/connect(to:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfctagreadersession/connect(to:completionhandler:))

# connect(to:completionHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Connects the reader session to a tag and activates that tag.

## Declaration

```swift
@preconcurrency func connect(to tag: NFCTag, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func connect(to tag: NFCTag, completionHandler: @escaping ((any Error)?) -> Void)
```

## Parameters

- `tag`: A tag to which the reader session should attempt to connect.
- `completionHandler`: A handler that the reader session invokes after completing the tag-connect request. The handler has the following parameter:

  - **error**: `nil` when the session successfully connects to the tag; otherwise, an [Error](https://developer.apple.com/documentation/swift/error) object.

  The session calls `completionHandler` on the dispatch queue provided when creating the [NFCTagReaderSession](../nfctagreadersession.md).

<a id="Discussion"></a>

## Discussion

A tag stays connected until your app connects to a different tag or restarts polling. Connecting to a tag that is already connected has no effect.

## See Also

### Connecting to a Tag

- [connectedTag](connectedtag-3mlqu.md): The tag connected to the reader session.

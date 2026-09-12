> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefreadersession/connect(to:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcndefreadersession/connect(to:completionhandler:))

# connect(to:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Connects the reader session to a tag and activates that tag.

## Declaration

```swift
func connect(to tag: any NFCNDEFTag, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func connect(to tag: any NFCNDEFTag) async throws
```

## Parameters

- `tag`: A tag that the reader session should attempt connecting to.
- `completionHandler`: A handler that the reader session invokes after completing the tag-connect request. The handler has the following parameter:

  - **error**: `nil` when the session successfully connects to the tag; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object.

  The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

<a id="Discussion"></a>

## Discussion

A tag stays connected until your app connects to a different tag or restarts polling. Connecting to a tag that is already connected has no effect.

# connectToTag:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Connects the reader session to a tag and activates that tag.

## Declaration

```objectivec
- (void) connectToTag:(id<NFCNDEFTag>) tag completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `tag`: A tag that the reader session should attempt connecting to.
- `completionHandler`: A handler that the reader session invokes after completing the tag-connect request. The handler has the following parameter:

  - **error**: `nil` when the session successfully connects to the tag; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object.

  The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

<a id="Discussion"></a>

## Discussion

A tag stays connected until your app connects to a different tag or restarts polling. Connecting to a tag that is already connected has no effect.

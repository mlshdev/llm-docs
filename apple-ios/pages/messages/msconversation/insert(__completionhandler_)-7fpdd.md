> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msconversation/insert(_:completionhandler:)-7fpdd](https://developer.apple.com/documentation/messages/msconversation/insert(_:completionhandler:)-7fpdd)

# insert(\_:completionHandler:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Inserts a sticker into the current context.

## Declaration

```swift
func insert(_ sticker: MSSticker, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func insert(_ sticker: MSSticker) async throws
```

## Parameters

- `sticker`: The sticker to be inserted.
- `completionHandler`: A block that is called as soon as the insertion is complete. This block is passed the following parameter:

  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func insert(_ sticker: MSSticker) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to insert a sticker into the current context.

- For the [MSMessagesAppPresentationContext.messages](../msmessagesapppresentationcontext/messages.md) context, the method places the sticker in the Message app’s input field. Users can then send the sticker by tapping Send.
- For the [MSMessagesAppPresentationContext.media](../msmessagesapppresentationcontext/media.md) context, the method places the image in the Messages camera or FaceTime.

This method operates asynchronously. Although the method returns immediately, the actual work is deferred and performed in the background. As soon as the attachment is inserted, the system calls the completion block on a background queue.

> **Note**

>  This method does not send the sticker. It inserts the sticker into the Messages app’s input field. The sticker is not sent until the user taps Send.

## See Also

### Inserting Content into the Input Field

- [insertAttachment(\_:withAlternateFilename:completionHandler:)](insertattachment%28__withalternatefilename_completionhandler_%29.md): Inserts an attachment into the current context.
- [insert(\_:completionHandler:)](insert%28__completionhandler_%29-3g248.md): Inserts a message object into the Messages app’s input field.
- [insertText(\_:completionHandler:)](inserttext%28__completionhandler_%29.md): Inserts text into the Messages app’s input field.

# insertSticker:completionHandler: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Inserts a sticker into the current context.

## Declaration

```objectivec
- (void) insertSticker:(MSSticker *) sticker completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `sticker`: The sticker to be inserted.
- `completionHandler`: A block that is called as soon as the insertion is complete. This block is passed the following parameter:

  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func insert(_ sticker: MSSticker) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to insert a sticker into the current context.

- For the [MSMessagesAppPresentationContextMessages](../msmessagesapppresentationcontext/messages.md) context, the method places the sticker in the Message app’s input field. Users can then send the sticker by tapping Send.
- For the [MSMessagesAppPresentationContextMedia](../msmessagesapppresentationcontext/media.md) context, the method places the image in the Messages camera or FaceTime.

This method operates asynchronously. Although the method returns immediately, the actual work is deferred and performed in the background. As soon as the attachment is inserted, the system calls the completion block on a background queue.

> **Note**

>  This method does not send the sticker. It inserts the sticker into the Messages app’s input field. The sticker is not sent until the user taps Send.

## See Also

### Inserting Content into the Input Field

- [insertAttachment:withAlternateFilename:completionHandler:](insertattachment%28__withalternatefilename_completionhandler_%29.md): Inserts an attachment into the current context.
- [insertMessage:completionHandler:](insert%28__completionhandler_%29-3g248.md): Inserts a message object into the Messages app’s input field.
- [insertText:completionHandler:](inserttext%28__completionhandler_%29.md): Inserts text into the Messages app’s input field.

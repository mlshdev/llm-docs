> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msconversation/inserttext(_:completionhandler:)](https://developer.apple.com/documentation/messages/msconversation/inserttext(_:completionhandler:))

# insertText(\_:completionHandler:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Inserts text into the Messages app’s input field.

## Declaration

```swift
func insertText(_ text: String, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func insertText(_ text: String) async throws
```

## Parameters

- `text`: The text to be inserted.
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
> func insertText(_ text: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to insert text into the Message app’s input field. Users can then send the text by tapping Send. iMessage apps suport this method only in the [MSMessagesAppPresentationContext.messages](../msmessagesapppresentationcontext/messages.md) context. If called in the [MSMessagesAppPresentationContext.media](../msmessagesapppresentationcontext/media.md) context, the method fails with an [MSMessageErrorCode.apiUnavailableInPresentationContext](../msmessageerrorcode/apiunavailableinpresentationcontext.md) error.

This method operates asynchronously. Although the method returns immediately, the actual work is deferred and performed in the background. As soon as the attachment is inserted, the system calls the completion block on a background queue.

> **Note**

>  This method does not send the text message. It inserts the text into the Messages app’s input field. The text is not sent until the user taps Send.

## See Also

### Inserting Content into the Input Field

- [insertAttachment(\_:withAlternateFilename:completionHandler:)](insertattachment%28__withalternatefilename_completionhandler_%29.md): Inserts an attachment into the current context.
- [insert(\_:completionHandler:)](insert%28__completionhandler_%29-3g248.md): Inserts a message object into the Messages app’s input field.
- [insert(\_:completionHandler:)](insert%28__completionhandler_%29-7fpdd.md): Inserts a sticker into the current context.

# insertText:completionHandler: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Inserts text into the Messages app’s input field.

## Declaration

```objectivec
- (void) insertText:(NSString *) text completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `text`: The text to be inserted.
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
> func insertText(_ text: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to insert text into the Message app’s input field. Users can then send the text by tapping Send. iMessage apps suport this method only in the [MSMessagesAppPresentationContextMessages](../msmessagesapppresentationcontext/messages.md) context. If called in the [MSMessagesAppPresentationContextMedia](../msmessagesapppresentationcontext/media.md) context, the method fails with an [MSMessageErrorCodeAPIUnavailableInPresentationContext](../msmessageerrorcode/apiunavailableinpresentationcontext.md) error.

This method operates asynchronously. Although the method returns immediately, the actual work is deferred and performed in the background. As soon as the attachment is inserted, the system calls the completion block on a background queue.

> **Note**

>  This method does not send the text message. It inserts the text into the Messages app’s input field. The text is not sent until the user taps Send.

## See Also

### Inserting Content into the Input Field

- [insertAttachment:withAlternateFilename:completionHandler:](insertattachment%28__withalternatefilename_completionhandler_%29.md): Inserts an attachment into the current context.
- [insertMessage:completionHandler:](insert%28__completionhandler_%29-3g248.md): Inserts a message object into the Messages app’s input field.
- [insertSticker:completionHandler:](insert%28__completionhandler_%29-7fpdd.md): Inserts a sticker into the current context.

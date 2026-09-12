> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msconversation/selectedmessage](https://developer.apple.com/documentation/messages/msconversation/selectedmessage)

# selectedMessage (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The message that the user selected in the conversation transcript.

## Declaration

```swift
var selectedMessage: MSMessage? { get }
```

<a id="Discussion"></a>

## Discussion

If the user selected one of your extension’s messages in the conversation transcript, this property is set to the selected message object. Otherwise, it is set to `nil`.

If your extension was launched because the user selected the message, then this property is set when the extension is launched.

If the user selects a message while your extension is running, the system takes the following steps:

1. Invokes your [MSMessagesAppViewController](../msmessagesappviewcontroller.md) object’s [willSelect(\_:conversation:)](../msmessagesappviewcontroller/willselect%28__conversation_%29.md) method.
2. Updates the conversation’s `selectedMessage` property.
3. Invokes your [MSMessagesAppViewController](../msmessagesappviewcontroller.md) object’s [didSelect(\_:conversation:)](../msmessagesappviewcontroller/didselect%28__conversation_%29.md) method.

Override [willSelect(\_:conversation:)](../msmessagesappviewcontroller/willselect%28__conversation_%29.md) or [didSelect(\_:conversation:)](../msmessagesappviewcontroller/didselect%28__conversation_%29.md) to handle changes to the selected message while your extension is active.

> **Note**

>  This property is always set to the message object selected by the user. If this message belongs to a session, then the selected message might not contain the most current data. The selected message is not updated when you receive new messages. Instead, override your view controller’s [didReceive(\_:conversation:)](../msmessagesappviewcontroller/didreceive%28__conversation_%29.md) message to handle updates.

# selectedMessage (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The message that the user selected in the conversation transcript.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MSMessage * selectedMessage;
```

<a id="Discussion"></a>

## Discussion

If the user selected one of your extension’s messages in the conversation transcript, this property is set to the selected message object. Otherwise, it is set to `nil`.

If your extension was launched because the user selected the message, then this property is set when the extension is launched.

If the user selects a message while your extension is running, the system takes the following steps:

1. Invokes your [MSMessagesAppViewController](../msmessagesappviewcontroller.md) object’s [willSelectMessage:conversation:](../msmessagesappviewcontroller/willselect%28__conversation_%29.md) method.
2. Updates the conversation’s `selectedMessage` property.
3. Invokes your [MSMessagesAppViewController](../msmessagesappviewcontroller.md) object’s [didSelectMessage:conversation:](../msmessagesappviewcontroller/didselect%28__conversation_%29.md) method.

Override [willSelectMessage:conversation:](../msmessagesappviewcontroller/willselect%28__conversation_%29.md) or [didSelectMessage:conversation:](../msmessagesappviewcontroller/didselect%28__conversation_%29.md) to handle changes to the selected message while your extension is active.

> **Note**

>  This property is always set to the message object selected by the user. If this message belongs to a session, then the selected message might not contain the most current data. The selected message is not updated when you receive new messages. Instead, override your view controller’s [didReceiveMessage:conversation:](../msmessagesappviewcontroller/didreceive%28__conversation_%29.md) message to handle updates.

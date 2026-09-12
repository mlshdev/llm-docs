> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mssession](https://developer.apple.com/documentation/messages/mssession)

# MSSession (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A session object used to create and update messages.

## Declaration

```swift
class MSSession
```

<a id="overview"></a>

## Overview

> **Note**

>  The [MSSession](mssession.md) class does not declare any instance methods or properties. iMessage apps use [MSSession](mssession.md) objects to identify and track updatable messages.

[MSMessage](msmessage.md) objects associated with a session receive the following treatment in the transcript:

- The first time a session is used, the message appears normally in the transcript.
- If a later message is sent using the same session, the previous message is removed from the transcript. The new message, with the updated content, is added to the bottom of the transcript, as normal.
- If the previous message has a non-`nil` [summaryText](msmessage/summarytext.md) property, the Messages app creates a summary message from the text and inserts it in the message’s previous location.

<a id="Create-New-Updatable-Messages"></a>

### Create New, Updatable Messages

Use the following workflow to create a new, updatable message.

1. Create the following:

- A new URL that encodes the message’s initial state. For example, you could encode data as key-value pairs in the URL’s query string. For more information, see the [MSMessage](msmessage.md) class’s [url](msmessage/url.md) property.
- A new layout object that describes the initial message’s appearance. For more information, see the [MSMessage](msmessage.md) class’s [layout](msmessage/layout.md) property.
- A string that describes the message’s current state. For more information, see the [MSMessage](msmessage.md) class’s [summaryText](msmessage/summarytext.md) property.

2. Instantiate a new [MSSession](mssession.md) object by calling its [init()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method.
3. Instantiate a new [MSMessage](msmessage.md) object by calling its [init(session:)](msmessage/init%28session_%29.md) method and passing the session object. Set the message’s [url](msmessage/url.md), [layout](msmessage/layout.md), and [summaryText](msmessage/summarytext.md) properties.
4. Send the message by calling the conversation’s [insert(\_:completionHandler:)](msconversation/insert%28__completionhandler_%29-3g248.md) method. Pass `nil` for the change description.

The Messages app adds the message to the transcript as soon as the user taps the send button.

<a id="Update-Messages"></a>

### Update Messages

Use the following workflow to receive and update a message.

1. When the user taps on one of your [MSMessage](msmessage.md) entries, the conversation’s [selectedMessage](msconversation/selectedmessage.md) property is changed to the tapped message. Use key-value observing to respond to these changes. Extract the current state from the message’s [url](msmessage/url.md) property, and present it to the user. For more information on receiving messages, see [MSMessage](msmessage.md).
2. After the user responds, create the following:

- A new URL that encodes the updated message state. For example, you could encode the data as key-value pairs in the URL’s query string. For more information, see the [MSMessage](msmessage.md) class’s [url](msmessage/url.md) property.
- A new layout object that describes the updated message’s appearance. For more information, see the [MSMessage](msmessage.md) class’s [layout](msmessage/layout.md) property.
- A string that describes the message’s current state. For more information, see the [MSMessage](msmessage.md) class’s [summaryText](msmessage/summarytext.md) property.

3. Instantiate a new [MSMessage](msmessage.md) object by calling its [init(session:)](msmessage/init%28session_%29.md) method and passing the currently selected message’s [MSSession](mssession.md) object. Set the message’s [url](msmessage/url.md), [layout](msmessage/layout.md), and [summaryText](msmessage/summarytext.md) properties.
4. Send the updated message by calling the conversation’s [insert(\_:completionHandler:)](msconversation/insert%28__completionhandler_%29-3g248.md) method.

The Messages app updates the message in the transcript as soon as the user taps the send button.

## Topics

### Initializers

- [init(coder:)](mssession/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Interactive messages

- [MSMessage](msmessage.md): A custom message object.
- [MSMessageLayout](msmessagelayout.md): An abstract base class that defines the appearance of [MSMessage](msmessage.md) objects in the conversation transcript.
- [MSMessageTemplateLayout](msmessagetemplatelayout.md): A template-based layout for custom messages.
- [MSMessageLiveLayout](msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.

# MSSession (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A session object used to create and update messages.

## Declaration

```objectivec
@interface MSSession : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

>  The [MSSession](mssession.md) class does not declare any instance methods or properties. iMessage apps use [MSSession](mssession.md) objects to identify and track updatable messages.

[MSMessage](msmessage.md) objects associated with a session receive the following treatment in the transcript:

- The first time a session is used, the message appears normally in the transcript.
- If a later message is sent using the same session, the previous message is removed from the transcript. The new message, with the updated content, is added to the bottom of the transcript, as normal.
- If the previous message has a non-`nil` [summaryText](msmessage/summarytext.md) property, the Messages app creates a summary message from the text and inserts it in the message’s previous location.

<a id="Create-New-Updatable-Messages"></a>

### Create New, Updatable Messages

Use the following workflow to create a new, updatable message.

1. Create the following:

- A new URL that encodes the message’s initial state. For example, you could encode data as key-value pairs in the URL’s query string. For more information, see the [MSMessage](msmessage.md) class’s [URL](msmessage/url.md) property.
- A new layout object that describes the initial message’s appearance. For more information, see the [MSMessage](msmessage.md) class’s [layout](msmessage/layout.md) property.
- A string that describes the message’s current state. For more information, see the [MSMessage](msmessage.md) class’s [summaryText](msmessage/summarytext.md) property.

2. Instantiate a new [MSSession](mssession.md) object by calling its [init](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method.
3. Instantiate a new [MSMessage](msmessage.md) object by calling its [initWithSession:](msmessage/init%28session_%29.md) method and passing the session object. Set the message’s [URL](msmessage/url.md), [layout](msmessage/layout.md), and [summaryText](msmessage/summarytext.md) properties.
4. Send the message by calling the conversation’s [insertMessage:completionHandler:](msconversation/insert%28__completionhandler_%29-3g248.md) method. Pass `nil` for the change description.

The Messages app adds the message to the transcript as soon as the user taps the send button.

<a id="Update-Messages"></a>

### Update Messages

Use the following workflow to receive and update a message.

1. When the user taps on one of your [MSMessage](msmessage.md) entries, the conversation’s [selectedMessage](msconversation/selectedmessage.md) property is changed to the tapped message. Use key-value observing to respond to these changes. Extract the current state from the message’s [URL](msmessage/url.md) property, and present it to the user. For more information on receiving messages, see [MSMessage](msmessage.md).
2. After the user responds, create the following:

- A new URL that encodes the updated message state. For example, you could encode the data as key-value pairs in the URL’s query string. For more information, see the [MSMessage](msmessage.md) class’s [URL](msmessage/url.md) property.
- A new layout object that describes the updated message’s appearance. For more information, see the [MSMessage](msmessage.md) class’s [layout](msmessage/layout.md) property.
- A string that describes the message’s current state. For more information, see the [MSMessage](msmessage.md) class’s [summaryText](msmessage/summarytext.md) property.

3. Instantiate a new [MSMessage](msmessage.md) object by calling its [initWithSession:](msmessage/init%28session_%29.md) method and passing the currently selected message’s [MSSession](mssession.md) object. Set the message’s [URL](msmessage/url.md), [layout](msmessage/layout.md), and [summaryText](msmessage/summarytext.md) properties.
4. Send the updated message by calling the conversation’s [insertMessage:completionHandler:](msconversation/insert%28__completionhandler_%29-3g248.md) method.

The Messages app updates the message in the transcript as soon as the user taps the send button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Interactive messages

- [MSMessage](msmessage.md): A custom message object.
- [MSMessageLayout](msmessagelayout.md): An abstract base class that defines the appearance of [MSMessage](msmessage.md) objects in the conversation transcript.
- [MSMessageTemplateLayout](msmessagetemplatelayout.md): A template-based layout for custom messages.
- [MSMessageLiveLayout](msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/messaging](https://developer.apple.com/documentation/sirikit/messaging)

# Messaging (Swift)

**Framework:** Intents  
**Kind:** API Collection

Send messages and search the user’s received messages.

<a id="overview"></a>

## Overview

With messaging intents, users can ask Siri to compose new messages, read existing messages, and indicate to other users whether they’re available.

To allow users to compose and send text or audio messages with your service, support [INSendMessageIntent](../intents/insendmessageintent.md). Donate interactions when the user sends and receives messages in your app to give the system cues about which contacts to suggest in Share Sheets.

Support [INSearchForMessagesIntent](../intents/insearchformessagesintent.md) and [INSetMessageAttributeIntent](../intents/insetmessageattributeintent.md) to allow Siri to announce incoming messages on AirPods, and mark announced messages as [INMessageAttribute.read](../intents/inmessageattribute/read.md) or [INMessageAttribute.played](../intents/inmessageattribute/played.md). Adopting [INSearchForMessagesIntent](../intents/insearchformessagesintent.md) also enables users to see incoming messages on a [INCarAudioSource.sourceCarPlay](../intents/incaraudiosource/sourcecarplay.md)-enabled display.

![A flow diagram going from left to right. On the left is an image of a user asking Siri to send a text. In the middle is an icon of Siri sending the user’s request to an app. On the right is the text the user asked Siri to send.](https://developer.apple.com/images/com.apple.sirikit/media-3743234@2x.png)

In iOS, you can use an Intents UI app extension to display a custom message composition interface.

## Topics

### Essentials

- [Improving interactions between Siri and your messaging app](improving-interactions-between-siri-and-your-messaging-app.md): Donate app-specific content, use Siri’s contact suggestions, and adopt the latest platform features to create a more consistent messaging experience.

### Sending a Message

- [INSendMessageIntentHandling](../intents/insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](../intents/insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](../intents/insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](../intents/inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](../intents/insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](../intents/insendmessageintentdonationmetadata.md)

### Editing a Message

- [INEditMessageIntent](../intents/ineditmessageintent.md)
- [INEditMessageIntentResponse](../intents/ineditmessageintentresponse.md)
- [INEditMessageIntentHandling](../intents/ineditmessageintenthandling.md)
- [INEditMessageIntentResponseCode](../intents/ineditmessageintentresponsecode.md)

### Unsending a Message

- [INUnsendMessagesIntent](../intents/inunsendmessagesintent.md)
- [INUnsendMessagesIntentResponse](../intents/inunsendmessagesintentresponse.md)
- [INUnsendMessagesIntentHandling](../intents/inunsendmessagesintenthandling.md)
- [INUnsendMessagesIntentResponseCode](../intents/inunsendmessagesintentresponsecode.md)

### Reacting to a Message

- [INMessageReactionType](../intents/inmessagereactiontype.md)
- [INMessageLinkMetadata](../intents/inmessagelinkmetadata.md)
- [INMessageReaction](../intents/inmessagereaction.md)
- [INSticker](../intents/insticker.md)

### Searching for Messages

- [INSearchForMessagesIntentHandling](../intents/insearchformessagesintenthandling.md): An interface that handles requests to search the current user’s messages.
- [INSearchForMessagesIntent](../intents/insearchformessagesintent.md): A request to list the messages that match the specified criteria.
- [INSearchForMessagesIntentResponse](../intents/insearchformessagesintentresponse.md): Your app’s response to a search for messages intent.

### Setting Message Attributes

- [INSetMessageAttributeIntentHandling](../intents/insetmessageattributeintenthandling.md): An interface that handles modifying message attributes.
- [INSetMessageAttributeIntent](../intents/insetmessageattributeintent.md): A request to modify the attributes of a message.
- [INSetMessageAttributeIntentResponse](../intents/insetmessageattributeintentresponse.md): Your app’s response to a set message attribute intent.

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](../intents/insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](../intents/insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](../intents/insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](../intents/insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](../intents/infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](../intents/infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](../intents/infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.

### Managing Message Information

- [INMessage](../intents/inmessage.md): An object that describes a sent or received message.
- [INMessageAttribute](../intents/inmessageattribute.md): Constants that indicate an attribute of a message.
- [INMessageAttributeOptions](../intents/inmessageattributeoptions.md): Constants that indicate a message search filter.
- [INPerson](../intents/inperson.md): Information about a person participating in a SiriKit interaction.

### Providing Resolution Results

- [INMessageAttributeResolutionResult](../intents/inmessageattributeresolutionresult.md): A resolution result for assorted attributes of a message.
- [INMessageAttributeOptionsResolutionResult](../intents/inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INDateComponentsRangeResolutionResult](../intents/indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](../intents/insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](../intents/inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](../intents/inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.

## See Also

### Standard Intents

- [Car Commands](car-commands.md): Manage vehicle door locks and get the vehicle’s status.
- [Lists and Notes](lists-and-notes.md): Create and manage notes and to-do list items.
- [Media](media.md): Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.
- [Payments](payments.md): Send payments between users or pay bills.
- [Restaurant Reservations](restaurant-reservations.md): Create and manage restaurant reservations with help from the Maps app.
- [Ride Booking](ride-booking.md): Book rides and report their status.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Workouts](workouts.md): Start, end, and manage fitness routines.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.

# Messaging (Objective-C)

**Framework:** Intents  
**Kind:** API Collection

Send messages and search the user’s received messages.

<a id="overview"></a>

## Overview

With messaging intents, users can ask Siri to compose new messages, read existing messages, and indicate to other users whether they’re available.

To allow users to compose and send text or audio messages with your service, support [INSendMessageIntent](../intents/insendmessageintent.md). Donate interactions when the user sends and receives messages in your app to give the system cues about which contacts to suggest in Share Sheets.

Support [INSearchForMessagesIntent](../intents/insearchformessagesintent.md) and [INSetMessageAttributeIntent](../intents/insetmessageattributeintent.md) to allow Siri to announce incoming messages on AirPods, and mark announced messages as [INMessageAttributeRead](../intents/inmessageattribute/read.md) or [INMessageAttributePlayed](../intents/inmessageattribute/played.md). Adopting [INSearchForMessagesIntent](../intents/insearchformessagesintent.md) also enables users to see incoming messages on a [INCarAudioSourceCarPlay](../intents/incaraudiosource/sourcecarplay.md)-enabled display.

![A flow diagram going from left to right. On the left is an image of a user asking Siri to send a text. In the middle is an icon of Siri sending the user’s request to an app. On the right is the text the user asked Siri to send.](https://developer.apple.com/images/com.apple.sirikit/media-3743234@2x.png)

In iOS, you can use an Intents UI app extension to display a custom message composition interface.

## Topics

### Essentials

- [Improving interactions between Siri and your messaging app](improving-interactions-between-siri-and-your-messaging-app.md): Donate app-specific content, use Siri’s contact suggestions, and adopt the latest platform features to create a more consistent messaging experience.

### Sending a Message

- [INSendMessageIntentHandling](../intents/insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](../intents/insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](../intents/insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](../intents/inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](../intents/insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](../intents/insendmessageintentdonationmetadata.md)

### Editing a Message

- [INEditMessageIntent](../intents/ineditmessageintent.md)
- [INEditMessageIntentResponse](../intents/ineditmessageintentresponse.md)
- [INEditMessageIntentHandling](../intents/ineditmessageintenthandling.md)
- [INEditMessageIntentResponseCode](../intents/ineditmessageintentresponsecode.md)

### Unsending a Message

- [INUnsendMessagesIntent](../intents/inunsendmessagesintent.md)
- [INUnsendMessagesIntentResponse](../intents/inunsendmessagesintentresponse.md)
- [INUnsendMessagesIntentHandling](../intents/inunsendmessagesintenthandling.md)
- [INUnsendMessagesIntentResponseCode](../intents/inunsendmessagesintentresponsecode.md)

### Reacting to a Message

- [INMessageReactionType](../intents/inmessagereactiontype.md)
- [INMessageLinkMetadata](../intents/inmessagelinkmetadata.md)
- [INMessageReaction](../intents/inmessagereaction.md)
- [INSticker](../intents/insticker.md)

### Searching for Messages

- [INSearchForMessagesIntentHandling](../intents/insearchformessagesintenthandling.md): An interface that handles requests to search the current user’s messages.
- [INSearchForMessagesIntent](../intents/insearchformessagesintent.md): A request to list the messages that match the specified criteria.
- [INSearchForMessagesIntentResponse](../intents/insearchformessagesintentresponse.md): Your app’s response to a search for messages intent.

### Setting Message Attributes

- [INSetMessageAttributeIntentHandling](../intents/insetmessageattributeintenthandling.md): An interface that handles modifying message attributes.
- [INSetMessageAttributeIntent](../intents/insetmessageattributeintent.md): A request to modify the attributes of a message.
- [INSetMessageAttributeIntentResponse](../intents/insetmessageattributeintentresponse.md): Your app’s response to a set message attribute intent.

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](../intents/insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](../intents/insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](../intents/insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](../intents/insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](../intents/infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](../intents/infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](../intents/infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.

### Managing Message Information

- [INMessage](../intents/inmessage.md): An object that describes a sent or received message.
- [INMessageAttribute](../intents/inmessageattribute.md): Constants that indicate an attribute of a message.
- [INMessageAttributeOptions](../intents/inmessageattributeoptions.md): Constants that indicate a message search filter.
- [INPerson](../intents/inperson.md): Information about a person participating in a SiriKit interaction.

### Providing Resolution Results

- [INMessageAttributeResolutionResult](../intents/inmessageattributeresolutionresult.md): A resolution result for assorted attributes of a message.
- [INMessageAttributeOptionsResolutionResult](../intents/inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INDateComponentsRangeResolutionResult](../intents/indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](../intents/insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](../intents/inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](../intents/inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.

## See Also

### Standard Intents

- [Car Commands](car-commands.md): Manage vehicle door locks and get the vehicle’s status.
- [Lists and Notes](lists-and-notes.md): Create and manage notes and to-do list items.
- [Media](media.md): Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.
- [Payments](payments.md): Send payments between users or pay bills.
- [Restaurant Reservations](restaurant-reservations.md): Create and manage restaurant reservations with help from the Maps app.
- [Ride Booking](ride-booking.md): Book rides and report their status.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Workouts](workouts.md): Start, end, and manage fitness routines.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.

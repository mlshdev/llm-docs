> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent](https://developer.apple.com/documentation/intents/instartcallintent)

# INStartCallIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A request to start an audio or video call with one or more users.

## Declaration

```swift
class INStartCallIntent
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

SiriKit creates [INStartCallIntent](instartcallintent.md) objects when the user wants to place a call using your app. A call intent object contains either the users to call or redialing information. It’s up to you to match the information in this object to contacts in your app and initiate the resulting call.

Your Intents extension receives this intent when the user tries to initiate a call from the Siri interface. If your app supports CallKit, you may also receive this intent when the user tries to initiate a call from system interfaces, such as the Recents tab of the Phone app.

To handle this intent, the handler object in your Intents extension must adopt the [INStartCallIntentHandling](instartcallintenthandling.md) protocol. Your handler should confirm the request and create an [INStartCallIntentResponse](instartcallintentresponse.md) object that indicates it’s possible to begin the call. Don’t try to initiate calls directly from your Intents extension. Instead, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that your app must then use to initiate the call. SiriKit places an [INInteraction](ininteraction.md) object in the user activity object with this intent. For calls initiated through Siri, the interaction object also includes the response provided by your Intents extension.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | No |

## Topics

### Initializing the Intent Object

- [init(audioRoute:destinationType:contacts:recordTypeForRedialing:callCapability:)](instartcallintent/init%28audioroute_destinationtype_contacts_recordtypeforredialing_callcapability_%29.md): Deprecated. Creates a start call intent object with the specified parameters.
- [init(callRecordFilter:callRecordToCallBack:audioRoute:destinationType:contacts:callCapability:)](instartcallintent/init%28callrecordfilter_callrecordtocallback_audioroute_destinationtype_contacts_callcapability_%29.md): Creates a start call intent object with the specified parameters.

### Getting the Call Details

- [callCapability](instartcallintent/callcapability.md): The type of call the user initiated.
- [contacts](instartcallintent/contacts.md): The users to call.
- [destinationType](instartcallintent/destinationtype.md): The type of call to place.
- [audioRoute](instartcallintent/audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](instartcallintent/recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](instartcallintent/callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](instartcallintent/callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](incallaudioroute.md): Constants that describe the audio route for the call.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [UNNotificationContentProviding](../usernotifications/unnotificationcontentproviding.md)

## See Also

### Starting a Call

- [INStartCallIntentHandling](instartcallintenthandling.md): An interface that handles requests to start audio and video calls.
- [INStartCallIntentResponse](instartcallintentresponse.md): Your app’s response to a start call intent.
- [INStartCallCallRecordToCallBackUnsupportedReason](instartcallcallrecordtocallbackunsupportedreason.md): A reason why your app can’t use a record to call a person back.

# INStartCallIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A request to start an audio or video call with one or more users.

## Declaration

```objectivec
@interface INStartCallIntent : INIntent
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

SiriKit creates [INStartCallIntent](instartcallintent.md) objects when the user wants to place a call using your app. A call intent object contains either the users to call or redialing information. It’s up to you to match the information in this object to contacts in your app and initiate the resulting call.

Your Intents extension receives this intent when the user tries to initiate a call from the Siri interface. If your app supports CallKit, you may also receive this intent when the user tries to initiate a call from system interfaces, such as the Recents tab of the Phone app.

To handle this intent, the handler object in your Intents extension must adopt the [INStartCallIntentHandling](instartcallintenthandling.md) protocol. Your handler should confirm the request and create an [INStartCallIntentResponse](instartcallintentresponse.md) object that indicates it’s possible to begin the call. Don’t try to initiate calls directly from your Intents extension. Instead, SiriKit launches your app and passes it an [NSUserActivity](../foundation/nsuseractivity.md) object that your app must then use to initiate the call. SiriKit places an [INInteraction](ininteraction.md) object in the user activity object with this intent. For calls initiated through Siri, the interaction object also includes the response provided by your Intents extension.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | No |

## Topics

### Initializing the Intent Object

- [initWithAudioRoute:destinationType:contacts:recordTypeForRedialing:callCapability:](instartcallintent/init%28audioroute_destinationtype_contacts_recordtypeforredialing_callcapability_%29.md): Deprecated. Creates a start call intent object with the specified parameters.
- [initWithCallRecordFilter:callRecordToCallBack:audioRoute:destinationType:contacts:callCapability:](instartcallintent/init%28callrecordfilter_callrecordtocallback_audioroute_destinationtype_contacts_callcapability_%29.md): Creates a start call intent object with the specified parameters.

### Getting the Call Details

- [callCapability](instartcallintent/callcapability.md): The type of call the user initiated.
- [contacts](instartcallintent/contacts.md): The users to call.
- [destinationType](instartcallintent/destinationtype.md): The type of call to place.
- [audioRoute](instartcallintent/audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](instartcallintent/recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](instartcallintent/callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](instartcallintent/callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](incallaudioroute.md): Constants that describe the audio route for the call.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [UNNotificationContentProviding](../usernotifications/unnotificationcontentproviding.md)

## See Also

### Starting a Call

- [INStartCallIntentHandling](instartcallintenthandling.md): An interface that handles requests to start audio and video calls.
- [INStartCallIntentResponse](instartcallintentresponse.md): Your app’s response to a start call intent.
- [INStartCallCallRecordToCallBackUnsupportedReason](instartcallcallrecordtocallbackunsupportedreason.md): A reason why your app can’t use a record to call a person back.

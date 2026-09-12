> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent/destinationtype](https://developer.apple.com/documentation/intents/instartcallintent/destinationtype)

# destinationType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The type of call to place.

## Declaration

```swift
var destinationType: INCallDestinationType { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the call destination type. Use it to differentiate regular calls from specialized types of calls. For example, when the value of this property is [voicemailDestination](../incalldestinationtype/voicemaildestination.md), the user is attempting to connect to their voicemail messages.

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [contacts](contacts.md): The users to call.
- [audioRoute](audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

# destinationType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The type of call to place.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCallDestinationType destinationType;
```

```objectivec
@property (atomic, assign, readonly) INCallDestinationType destinationType;
```

<a id="Discussion"></a>

## Discussion

This property contains the call destination type. Use it to differentiate regular calls from specialized types of calls. For example, when the value of this property is [INCallDestinationTypeVoicemailDestination](../incalldestinationtype/voicemaildestination.md), the user is attempting to connect to their voicemail messages.

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [contacts](contacts.md): The users to call.
- [audioRoute](audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

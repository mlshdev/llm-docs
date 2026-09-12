> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent/callcapability](https://developer.apple.com/documentation/intents/instartcallintent/callcapability)

# callCapability (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The type of call the user initiated.

## Declaration

```swift
var callCapability: INCallCapability { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the user-initiated call type. If the type of call isn’t known, the value of this property is [INCallCapability.unknown](../incallcapability/unknown.md).

## See Also

### Getting the Call Details

- [contacts](contacts.md): The users to call.
- [destinationType](destinationtype.md): The type of call to place.
- [audioRoute](audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

# callCapability (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The type of call the user initiated.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCallCapability callCapability;
```

```objectivec
@property (atomic, assign, readonly) INCallCapability callCapability;
```

<a id="Discussion"></a>

## Discussion

This property contains the user-initiated call type. If the type of call isn’t known, the value of this property is [INCallCapabilityUnknown](../incallcapability/unknown.md).

## See Also

### Getting the Call Details

- [contacts](contacts.md): The users to call.
- [destinationType](destinationtype.md): The type of call to place.
- [audioRoute](audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

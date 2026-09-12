> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent/callrecordfilter](https://developer.apple.com/documentation/intents/instartcallintent/callrecordfilter)

# callRecordFilter (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Filters specified by the user to redial a call.

## Declaration

```swift
@NSCopying var callRecordFilter: INCallRecordFilter? { get }
```

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [contacts](contacts.md): The users to call.
- [destinationType](destinationtype.md): The type of call to place.
- [audioRoute](audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

# callRecordFilter (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Filters specified by the user to redial a call.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INCallRecordFilter * callRecordFilter;
```

```objectivec
@property (atomic, copy, readonly, nullable) INCallRecordFilter * callRecordFilter;
```

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [contacts](contacts.md): The users to call.
- [destinationType](destinationtype.md): The type of call to place.
- [audioRoute](audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

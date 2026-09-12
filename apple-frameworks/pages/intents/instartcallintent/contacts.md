> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent/contacts](https://developer.apple.com/documentation/intents/instartcallintent/contacts)

# contacts (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The users to call.

## Declaration

```swift
var contacts: [INPerson]? { get }
```

<a id="Discussion"></a>

## Discussion

The property contains the users to call. Use the information in each [INPerson](../inperson.md) object to look for a matching contact in your app.

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [destinationType](destinationtype.md): The type of call to place.
- [audioRoute](audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

# contacts (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The users to call.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * contacts;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * contacts;
```

<a id="Discussion"></a>

## Discussion

The property contains the users to call. Use the information in each [INPerson](../inperson.md) object to look for a matching contact in your app.

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [destinationType](destinationtype.md): The type of call to place.
- [audioRoute](audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

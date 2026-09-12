> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent/recordtypeforredialing](https://developer.apple.com/documentation/intents/instartcallintent/recordtypeforredialing)

# recordTypeForRedialing (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

The category of past call record contact information used for redialing.

## Declaration

```swift
var recordTypeForRedialing: INCallRecordType { get }
```

<a id="Discussion"></a>

## Discussion

This value indicates which past call record your app should use in determining which contact or contacts to call. For example, if the user asks Siri to redial their last missed call, the system provides your intent handler with a start call intent whose [recordTypeForRedialing](recordtypeforredialing.md) is [INCallRecordType.missed](../incallrecordtype/missed.md).

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [contacts](contacts.md): The users to call.
- [destinationType](destinationtype.md): The type of call to place.
- [audioRoute](audioroute.md): The audio route the call is using.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

# recordTypeForRedialing (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

The category of past call record contact information used for redialing.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCallRecordType recordTypeForRedialing;
```

```objectivec
@property (atomic, assign, readonly) INCallRecordType recordTypeForRedialing;
```

<a id="Discussion"></a>

## Discussion

This value indicates which past call record your app should use in determining which contact or contacts to call. For example, if the user asks Siri to redial their last missed call, the system provides your intent handler with a start call intent whose [recordTypeForRedialing](recordtypeforredialing.md) is [INCallRecordTypeMissed](../incallrecordtype/missed.md).

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [contacts](contacts.md): The users to call.
- [destinationType](destinationtype.md): The type of call to place.
- [audioRoute](audioroute.md): The audio route the call is using.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

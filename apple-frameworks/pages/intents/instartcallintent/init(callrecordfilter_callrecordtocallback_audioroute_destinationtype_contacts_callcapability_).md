> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent/init(callrecordfilter:callrecordtocallback:audioroute:destinationtype:contacts:callcapability:)](https://developer.apple.com/documentation/intents/instartcallintent/init(callrecordfilter:callrecordtocallback:audioroute:destinationtype:contacts:callcapability:))

# init(callRecordFilter:callRecordToCallBack:audioRoute:destinationType:contacts:callCapability:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a start call intent object with the specified parameters.

## Declaration

```swift
init(callRecordFilter: INCallRecordFilter?, callRecordToCallBack: INCallRecord?, audioRoute: INCallAudioRoute, destinationType: INCallDestinationType, contacts: [INPerson]?, callCapability: INCallCapability)
```

## Parameters

- `callRecordFilter`: Filters specified by the user to redial a call.
- `callRecordToCallBack`: Details about a call to redial a missed call.
- `audioRoute`: The audio route for the call.
- `destinationType`: The target type of the call to place.
- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.
- `callCapability`: The type of call to place.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if it couldn’t create the object.

## See Also

### Initializing the Intent Object

- [init(audioRoute:destinationType:contacts:recordTypeForRedialing:callCapability:)](init%28audioroute_destinationtype_contacts_recordtypeforredialing_callcapability_%29.md): Deprecated. Creates a start call intent object with the specified parameters.

# initWithCallRecordFilter:callRecordToCallBack:audioRoute:destinationType:contacts:callCapability: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a start call intent object with the specified parameters.

## Declaration

```objectivec
- (instancetype) initWithCallRecordFilter:(INCallRecordFilter *) callRecordFilter callRecordToCallBack:(INCallRecord *) callRecordToCallBack audioRoute:(INCallAudioRoute) audioRoute destinationType:(INCallDestinationType) destinationType contacts:(NSArray<INPerson *> *) contacts callCapability:(INCallCapability) callCapability;
```

## Parameters

- `callRecordFilter`: Filters specified by the user to redial a call.
- `callRecordToCallBack`: Details about a call to redial a missed call.
- `audioRoute`: The audio route for the call.
- `destinationType`: The target type of the call to place.
- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.
- `callCapability`: The type of call to place.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if it couldn’t create the object.

## See Also

### Initializing the Intent Object

- [initWithAudioRoute:destinationType:contacts:recordTypeForRedialing:callCapability:](init%28audioroute_destinationtype_contacts_recordtypeforredialing_callcapability_%29.md): Deprecated. Creates a start call intent object with the specified parameters.

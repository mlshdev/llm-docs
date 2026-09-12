> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent/init(audioroute:destinationtype:contacts:recordtypeforredialing:callcapability:)](https://developer.apple.com/documentation/intents/instartcallintent/init(audioroute:destinationtype:contacts:recordtypeforredialing:callcapability:))

# init(audioRoute:destinationType:contacts:recordTypeForRedialing:callCapability:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

Creates a start call intent object with the specified parameters.

## Declaration

```swift
convenience init(audioRoute: INCallAudioRoute, destinationType: INCallDestinationType, contacts: [INPerson]?, recordTypeForRedialing: INCallRecordType, callCapability: INCallCapability)
```

## Parameters

- `audioRoute`: The audio route for the call.
- `destinationType`: The target type of the call to place.
- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.
- `recordTypeForRedialing`: The category of past call record contact information used for redialing.
- `callCapability`: The type of call to place.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if it couldn’t create the object.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to place a call to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [init(callRecordFilter:callRecordToCallBack:audioRoute:destinationType:contacts:callCapability:)](init%28callrecordfilter_callrecordtocallback_audioroute_destinationtype_contacts_callcapability_%29.md): Creates a start call intent object with the specified parameters.

# initWithAudioRoute:destinationType:contacts:recordTypeForRedialing:callCapability: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

Creates a start call intent object with the specified parameters.

## Declaration

```objectivec
- (instancetype) initWithAudioRoute:(INCallAudioRoute) audioRoute destinationType:(INCallDestinationType) destinationType contacts:(NSArray<INPerson *> *) contacts recordTypeForRedialing:(INCallRecordType) recordTypeForRedialing callCapability:(INCallCapability) callCapability;
```

## Parameters

- `audioRoute`: The audio route for the call.
- `destinationType`: The target type of the call to place.
- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.
- `recordTypeForRedialing`: The category of past call record contact information used for redialing.
- `callCapability`: The type of call to place.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if it couldn’t create the object.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to place a call to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [initWithCallRecordFilter:callRecordToCallBack:audioRoute:destinationType:contacts:callCapability:](init%28callrecordfilter_callrecordtocallback_audioroute_destinationtype_contacts_callcapability_%29.md): Creates a start call intent object with the specified parameters.

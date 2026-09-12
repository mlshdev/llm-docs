> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintent/audioroute](https://developer.apple.com/documentation/intents/instartcallintent/audioroute)

# audioRoute (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The audio route the call is using.

## Declaration

```swift
var audioRoute: INCallAudioRoute { get }
```

<a id="Discussion"></a>

## Discussion

The property contains the call’s audio route. For example, when the value of this property is [INCallAudioRoute.bluetoothAudioRoute](../incallaudioroute/bluetoothaudioroute.md), the user is attempting to use a bluetooth device for the call.

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [contacts](contacts.md): The users to call.
- [destinationType](destinationtype.md): The type of call to place.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

# audioRoute (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The audio route the call is using.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCallAudioRoute audioRoute;
```

```objectivec
@property (atomic, assign, readonly) INCallAudioRoute audioRoute;
```

<a id="Discussion"></a>

## Discussion

The property contains the call’s audio route. For example, when the value of this property is [INCallAudioRouteBluetoothAudioRoute](../incallaudioroute/bluetoothaudioroute.md), the user is attempting to use a bluetooth device for the call.

## See Also

### Getting the Call Details

- [callCapability](callcapability.md): The type of call the user initiated.
- [contacts](contacts.md): The users to call.
- [destinationType](destinationtype.md): The type of call to place.
- [recordTypeForRedialing](recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](callrecordtocallback.md): Details about a call to redial a missed call.
- [INCallAudioRoute](../incallaudioroute.md): Constants that describe the audio route for the call.

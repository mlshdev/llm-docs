> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallaudioroute](https://developer.apple.com/documentation/intents/incallaudioroute)

# INCallAudioRoute (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the audio route for the call.

## Declaration

```swift
enum INCallAudioRoute
```

## Topics

### Audio Routes

- [INCallAudioRoute.unknown](incallaudioroute/unknown.md): An unknown audio route.
- [INCallAudioRoute.speakerphoneAudioRoute](incallaudioroute/speakerphoneaudioroute.md): The device’s speakerphone mode.
- [INCallAudioRoute.bluetoothAudioRoute](incallaudioroute/bluetoothaudioroute.md): A connected Bluetooth device.

### Initializers

- [init(rawValue:)](incallaudioroute/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Call Details

- [callCapability](instartcallintent/callcapability.md): The type of call the user initiated.
- [contacts](instartcallintent/contacts.md): The users to call.
- [destinationType](instartcallintent/destinationtype.md): The type of call to place.
- [audioRoute](instartcallintent/audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](instartcallintent/recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](instartcallintent/callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](instartcallintent/callrecordtocallback.md): Details about a call to redial a missed call.

# INCallAudioRoute (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the audio route for the call.

## Declaration

```objectivec
enum INCallAudioRoute : NSInteger;
```

## Topics

### Audio Routes

- [INCallAudioRouteUnknown](incallaudioroute/unknown.md): An unknown audio route.
- [INCallAudioRouteSpeakerphoneAudioRoute](incallaudioroute/speakerphoneaudioroute.md): The device’s speakerphone mode.
- [INCallAudioRouteBluetoothAudioRoute](incallaudioroute/bluetoothaudioroute.md): A connected Bluetooth device.

## See Also

### Getting the Call Details

- [callCapability](instartcallintent/callcapability.md): The type of call the user initiated.
- [contacts](instartcallintent/contacts.md): The users to call.
- [destinationType](instartcallintent/destinationtype.md): The type of call to place.
- [audioRoute](instartcallintent/audioroute.md): The audio route the call is using.
- [recordTypeForRedialing](instartcallintent/recordtypeforredialing.md): Deprecated. The category of past call record contact information used for redialing.
- [callRecordFilter](instartcallintent/callrecordfilter.md): Filters specified by the user to redial a call.
- [callRecordToCallBack](instartcallintent/callrecordtocallback.md): Details about a call to redial a missed call.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintent/init(radiotype:frequency:stationname:channel:presetnumber:)](https://developer.apple.com/documentation/intents/insetradiostationintent/init(radiotype:frequency:stationname:channel:presetnumber:))

# init(radioType:frequency:stationName:channel:presetNumber:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

Initializes the intent object with the specified climate settings information.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc convenience init(radioType: INRadioType = .unknown, frequency: Double? = nil, stationName: String? = nil, channel: String? = nil, presetNumber: Int? = nil)
```

## Parameters

- `radioType`: The type of tuner that applies to the radio station.
- `frequency`: The broadcast frequency of the radio station. Specify the frequency as a floating-point number.
- `stationName`: The name of the radio station.
- `channel`: The channel number assigned to the station. The value in this property is typically used to specify satellite channel numbers but may represent any designation for a radio channel. If you specify a value for the `presetNumber` parameter, don’t specify a value for this parameter.
- `presetNumber`: The radio preset to use. Specify an integer that corresponds to a programmable preset slot. If you specify a value for the `channelNumber` parameter, don’t specify a value for this parameter.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to change the radio station. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintenthandling/resolvechannel(for:with:)](https://developer.apple.com/documentation/intents/insetradiostationintenthandling/resolvechannel(for:with:))

# resolveChannel(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the channel number for the radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveChannel(for intent: INSetRadioStationIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveChannel(for intent: INSetRadioStationIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the channel number of the station. If the station doesn’t have an associated channel number, perhaps because it’s an FM radio station, you can return a resolution that the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the channel for the radio station. Use this method to set the radio to the station associated with the resolved channel.

## See Also

### Resolving the Intent Parameters

- [resolveRadioType(for:with:)](resolveradiotype%28for_with_%29.md): Deprecated. Resolves the radio type.
- [resolveFrequency(for:with:)](resolvefrequency%28for_with_%29.md): Deprecated. Resolves the radio station frequency.
- [resolveStationName(for:with:)](resolvestationname%28for_with_%29.md): Deprecated. Resolves the name of the radio station.
- [resolvePresetNumber(for:with:)](resolvepresetnumber%28for_with_%29.md): Deprecated. Resolves the preset number used to select the radio station.

# resolveChannelForSetRadioStation:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the channel number for the radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveChannelForSetRadioStation:(INSetRadioStationIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the channel number of the station. If the station doesn’t have an associated channel number, perhaps because it’s an FM radio station, you can return a resolution that the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the channel for the radio station. Use this method to set the radio to the station associated with the resolved channel.

## See Also

### Resolving the Intent Parameters

- [resolveRadioTypeForSetRadioStation:withCompletion:](resolveradiotype%28for_with_%29.md): Deprecated. Resolves the radio type.
- [resolveFrequencyForSetRadioStation:withCompletion:](resolvefrequency%28for_with_%29.md): Deprecated. Resolves the radio station frequency.
- [resolveStationNameForSetRadioStation:withCompletion:](resolvestationname%28for_with_%29.md): Deprecated. Resolves the name of the radio station.
- [resolvePresetNumberForSetRadioStation:withCompletion:](resolvepresetnumber%28for_with_%29.md): Deprecated. Resolves the preset number used to select the radio station.

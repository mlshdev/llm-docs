> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/outputmeterlevel](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/outputmeterlevel)

# outputMeterLevel (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The volume, in decibels (db), being received from all other participants.

> Use SharePlay instead

## Declaration

```swift
var outputMeterLevel: Float { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is undefined if [isOutputMeteringEnabled](isoutputmeteringenabled.md) is set to [false](https://developer.apple.com/documentation/swift/false).

The volume level is the aggregate volume of all remote participants, modified by the [remoteParticipantVolume](remoteparticipantvolume.md) property.

## See Also

### Monitoring the Audio Level

- [isInputMeteringEnabled](isinputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the microphone’s sound level is being monitored.
- [inputMeterLevel](inputmeterlevel.md): Deprecated. The volume, in decibels (db), being received by the microphone.
- [isOutputMeteringEnabled](isoutputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the voice level of remote participants is monitored.

# outputMeterLevel (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The volume, in decibels (db), being received from all other participants.

> Use SharePlay instead

## Declaration

```objectivec
@property (readonly) float outputMeterLevel;
```

<a id="Discussion"></a>

## Discussion

The value of this property is undefined if [outputMeteringEnabled](isoutputmeteringenabled.md) is set to [false](https://developer.apple.com/documentation/swift/false).

The volume level is the aggregate volume of all remote participants, modified by the [remoteParticipantVolume](remoteparticipantvolume.md) property.

## See Also

### Monitoring the Audio Level

- [inputMeteringEnabled](isinputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the microphone’s sound level is being monitored.
- [inputMeterLevel](inputmeterlevel.md): Deprecated. The volume, in decibels (db), being received by the microphone.
- [outputMeteringEnabled](isoutputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the voice level of remote participants is monitored.

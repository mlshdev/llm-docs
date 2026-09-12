> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/inputmeterlevel](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/inputmeterlevel)

# inputMeterLevel (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The volume, in decibels (db), being received by the microphone.

> Use SharePlay instead

## Declaration

```swift
var inputMeterLevel: Float { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is undefined if [isInputMeteringEnabled](isinputmeteringenabled.md) is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Monitoring the Audio Level

- [isInputMeteringEnabled](isinputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the microphone’s sound level is being monitored.
- [isOutputMeteringEnabled](isoutputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the voice level of remote participants is monitored.
- [outputMeterLevel](outputmeterlevel.md): Deprecated. The volume, in decibels (db), being received from all other participants.

# inputMeterLevel (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The volume, in decibels (db), being received by the microphone.

> Use SharePlay instead

## Declaration

```objectivec
@property (readonly) float inputMeterLevel;
```

<a id="Discussion"></a>

## Discussion

The value of this property is undefined if [inputMeteringEnabled](isinputmeteringenabled.md) is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Monitoring the Audio Level

- [inputMeteringEnabled](isinputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the microphone’s sound level is being monitored.
- [outputMeteringEnabled](isoutputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the voice level of remote participants is monitored.
- [outputMeterLevel](outputmeterlevel.md): Deprecated. The volume, in decibels (db), being received from all other participants.

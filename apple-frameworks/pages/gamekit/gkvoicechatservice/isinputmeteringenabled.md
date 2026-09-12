> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/isinputmeteringenabled](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/isinputmeteringenabled)

# isInputMeteringEnabled (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A Boolean value that indicates whether the microphone’s sound level is being monitored.

> Use SharePlay instead

## Declaration

```swift
var isInputMeteringEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), your application can read the [inputMeterLevel](inputmeterlevel.md) property to monitor the sound level of the microphone. If [false](https://developer.apple.com/documentation/swift/false), the value of the [inputMeterLevel](inputmeterlevel.md) property is undefined. Default is [false](https://developer.apple.com/documentation/swift/false). When your application doesn’t need to monitor the microphone, it should set this property to [false](https://developer.apple.com/documentation/swift/false) to improve performance.

## See Also

### Monitoring the Audio Level

- [inputMeterLevel](inputmeterlevel.md): Deprecated. The volume, in decibels (db), being received by the microphone.
- [isOutputMeteringEnabled](isoutputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the voice level of remote participants is monitored.
- [outputMeterLevel](outputmeterlevel.md): Deprecated. The volume, in decibels (db), being received from all other participants.

# inputMeteringEnabled (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A Boolean value that indicates whether the microphone’s sound level is being monitored.

> Use SharePlay instead

## Declaration

```objectivec
@property (nonatomic, getter=isInputMeteringEnabled) BOOL inputMeteringEnabled;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), your application can read the [inputMeterLevel](inputmeterlevel.md) property to monitor the sound level of the microphone. If [false](https://developer.apple.com/documentation/swift/false), the value of the [inputMeterLevel](inputmeterlevel.md) property is undefined. Default is [false](https://developer.apple.com/documentation/swift/false). When your application doesn’t need to monitor the microphone, it should set this property to [false](https://developer.apple.com/documentation/swift/false) to improve performance.

## See Also

### Monitoring the Audio Level

- [inputMeterLevel](inputmeterlevel.md): Deprecated. The volume, in decibels (db), being received by the microphone.
- [outputMeteringEnabled](isoutputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the voice level of remote participants is monitored.
- [outputMeterLevel](outputmeterlevel.md): Deprecated. The volume, in decibels (db), being received from all other participants.

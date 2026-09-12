> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/isoutputmeteringenabled](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/isoutputmeteringenabled)

# isOutputMeteringEnabled (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A Boolean value that indicates whether the voice level of remote participants is monitored.

> Use SharePlay instead

## Declaration

```swift
var isOutputMeteringEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), your application can read the [outputMeterLevel](outputmeterlevel.md) property to monitor sound level of remote participants. If [false](https://developer.apple.com/documentation/swift/false), the value of the [outputMeterLevel](outputmeterlevel.md) property is undefined. Default is [false](https://developer.apple.com/documentation/swift/false). When your application doesn’t need to monitor remote participants, it should set this property to [false](https://developer.apple.com/documentation/swift/false) to improve performance.

## See Also

### Monitoring the Audio Level

- [isInputMeteringEnabled](isinputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the microphone’s sound level is being monitored.
- [inputMeterLevel](inputmeterlevel.md): Deprecated. The volume, in decibels (db), being received by the microphone.
- [outputMeterLevel](outputmeterlevel.md): Deprecated. The volume, in decibels (db), being received from all other participants.

# outputMeteringEnabled (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A Boolean value that indicates whether the voice level of remote participants is monitored.

> Use SharePlay instead

## Declaration

```objectivec
@property (nonatomic, getter=isOutputMeteringEnabled) BOOL outputMeteringEnabled;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), your application can read the [outputMeterLevel](outputmeterlevel.md) property to monitor sound level of remote participants. If [false](https://developer.apple.com/documentation/swift/false), the value of the [outputMeterLevel](outputmeterlevel.md) property is undefined. Default is [false](https://developer.apple.com/documentation/swift/false). When your application doesn’t need to monitor remote participants, it should set this property to [false](https://developer.apple.com/documentation/swift/false) to improve performance.

## See Also

### Monitoring the Audio Level

- [inputMeteringEnabled](isinputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the microphone’s sound level is being monitored.
- [inputMeterLevel](inputmeterlevel.md): Deprecated. The volume, in decibels (db), being received by the microphone.
- [outputMeterLevel](outputmeterlevel.md): Deprecated. The volume, in decibels (db), being received from all other participants.

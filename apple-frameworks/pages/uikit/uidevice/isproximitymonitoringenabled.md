> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/isproximitymonitoringenabled](https://developer.apple.com/documentation/uikit/uidevice/isproximitymonitoringenabled)

# isProximityMonitoringEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether proximity monitoring is enabled.

## Declaration

```swift
var isProximityMonitoringEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Enable proximity monitoring only when your application needs to be notified of changes to the proximity state. Otherwise, disable proximity monitoring. The default value is [false](https://developer.apple.com/documentation/swift/false).

Not all iOS devices have proximity sensors. To determine if proximity monitoring is available, attempt to enable it. If the value of the [isProximityMonitoringEnabled](isproximitymonitoringenabled.md) property remains [false](https://developer.apple.com/documentation/swift/false), proximity monitoring isn’t available.

## See Also

### Using the proximity sensor

- [proximityState](proximitystate.md): A Boolean value that indicates whether the proximity sensor is close to the user.

# proximityMonitoringEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether proximity monitoring is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isProximityMonitoringEnabled) BOOL proximityMonitoringEnabled;
```

<a id="Discussion"></a>

## Discussion

Enable proximity monitoring only when your application needs to be notified of changes to the proximity state. Otherwise, disable proximity monitoring. The default value is [false](https://developer.apple.com/documentation/swift/false).

Not all iOS devices have proximity sensors. To determine if proximity monitoring is available, attempt to enable it. If the value of the [proximityMonitoringEnabled](isproximitymonitoringenabled.md) property remains [false](https://developer.apple.com/documentation/swift/false), proximity monitoring isn’t available.

## See Also

### Using the proximity sensor

- [proximityState](proximitystate.md): A Boolean value that indicates whether the proximity sensor is close to the user.

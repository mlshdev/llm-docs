> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/networkunavailablereason-swift.enum/expensive](https://developer.apple.com/documentation/foundation/urlerror/networkunavailablereason-swift.enum/expensive)

# URLError.NetworkUnavailableReason.expensive

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A reason that indicates network is unavailable because the system marked the interface as expensive.

## Declaration

```swift
case expensive
```

<a id="Discussion"></a>

## Discussion

The system determines what constitutes “expensive” based on the nature of the network interface and other factors. iOS 13 considers most cellular networks and personal hotspots expensive.

This reason occurs when the following conditions are true:

- The only available network interfaces are expensive.
- The [URLSessionConfiguration](../../urlsessionconfiguration.md) property [allowsExpensiveNetworkAccess](../../urlsessionconfiguration/allowsexpensivenetworkaccess.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Unavailability reasons

- [URLError.NetworkUnavailableReason.cellular](cellular.md): A reason that indicates network is unavailable because the interface is cellular and cellular network is disabled.
- [URLError.NetworkUnavailableReason.constrained](constrained.md): A reason that indicates network is unavailable because the user enabled “Low Data Mode” in the Settings app.

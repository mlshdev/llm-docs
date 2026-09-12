> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/telephonymessagingsession/cellularservices](https://developer.apple.com/documentation/telephonymessagingkit/telephonymessagingsession/cellularservices)

# cellularServices

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An array of cellular services available on the system.

## Declaration

```swift
final var cellularServices: [CellularServiceState] { get throws }
```

## Mentioned In

- [Creating a carrier messaging app](../creating-a-carrier-messaging-app.md)

<a id="discussion"></a>

## Discussion

To receive notification of changes to the available services, monitor the [cellularServiceStateUpdates](cellularservicestateupdates.md) property.

## See Also

### Determining service availability

- [cellularServiceStateUpdates](cellularservicestateupdates.md): An asynchronous sequence of cellular service state updates produced by this session.
- [CellularServiceState](../cellularservicestate.md): A structure that contains information about a cellular service.

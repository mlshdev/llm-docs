> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/telephonymessagingsession/cellularservicestateupdates](https://developer.apple.com/documentation/telephonymessagingkit/telephonymessagingsession/cellularservicestateupdates)

# cellularServiceStateUpdates

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An asynchronous sequence of cellular service state updates produced by this session.

## Declaration

```swift
final var cellularServiceStateUpdates: some AsyncSequence<CellularServiceState, Never> { get }
```

## Mentioned In

- [Creating a carrier messaging app](../creating-a-carrier-messaging-app.md)

<a id="discussion"></a>

## Discussion

Use a `for`-`await`-`in` loop to iterate over this asynchronous sequence and receive updates about service availability.

## See Also

### Determining service availability

- [cellularServices](cellularservices.md): An array of cellular services available on the system.
- [CellularServiceState](../cellularservicestate.md): A structure that contains information about a cellular service.

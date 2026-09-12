> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/event](https://developer.apple.com/documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/event)

# RemoteKeylessEntryConfigurableEnduringAction.EnduringExecutionRequest.Event

**Framework:** CarKey  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

## Declaration

```swift
enum Event
```

## Topics

### Enumeration Cases

- [RemoteKeylessEntryConfigurableEnduringAction.EnduringExecutionRequest.Event.receivedContinuationRequest(\_:)](event/receivedcontinuationrequest%28__%29.md): Received continuation request from the Vehicle executing the Enduring Action The enduring action may time out on the vehicle side if continuationRequest.continue() or stop() is not invoked promptly upon the receipt of this event.

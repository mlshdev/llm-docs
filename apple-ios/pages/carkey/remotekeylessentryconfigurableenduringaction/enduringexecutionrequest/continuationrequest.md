> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/continuationrequest](https://developer.apple.com/documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/continuationrequest)

# RemoteKeylessEntryConfigurableEnduringAction.EnduringExecutionRequest.ContinuationRequest

**Framework:** CarKey  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Continuation Request

## Declaration

```swift
struct ContinuationRequest
```

## Topics

### Instance Properties

- [data](continuationrequest/data.md): Optional data sent from the vehicle along with this continuation request. Max 64 bytes

### Instance Methods

- [confirm(\_:)](continuationrequest/confirm%28__%29.md): Method for your app to acknowledge receipt of this continuation request and commit to continue execution of this enduring action with optional arbitrary data to send to the vehicle. There is a maximum length of 64 bytes for the data to be sent.

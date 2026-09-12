> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/continuationrequest/confirm(_:)](https://developer.apple.com/documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/continuationrequest/confirm(_:))

# confirm(\_:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Method for your app to acknowledge receipt of this continuation request and commit to continue execution of this enduring action with optional arbitrary data to send to the vehicle. There is a maximum length of 64 bytes for the data to be sent.

## Declaration

```swift
func confirm(_ data: Data? = nil) throws
```

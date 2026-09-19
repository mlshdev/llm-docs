> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/eventstream

# eventStream

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

The asynchronous event stream on which Continuation Requests are sent

## Declaration

```swift
final var eventStream: AsyncStream<RemoteKeylessEntryConfigurableEnduringAction.EnduringExecutionRequest.Event> { get }
```

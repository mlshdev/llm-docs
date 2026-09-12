> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/urlschemehandler/tasksequence](https://developer.apple.com/documentation/webkit/urlschemehandler/tasksequence)

# TaskSequence

**Framework:** WebKit  
**Kind:** Associated Type  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The type of sequence produced by the handler.

## Declaration

```swift
associatedtype TaskSequence : AsyncSequence where Self.TaskSequence.Element == URLSchemeTaskResult, Self.TaskSequence.Failure == any Error
```

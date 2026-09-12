> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkbrowser/stateupdatehandler](https://developer.apple.com/documentation/network/networkbrowser/stateupdatehandler)

# NetworkBrowser.StateUpdateHandler

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
typealias StateUpdateHandler = @isolated(any) @Sendable (NetworkBrowser<Provider>, NetworkBrowser<Provider>.State) -> Void
```

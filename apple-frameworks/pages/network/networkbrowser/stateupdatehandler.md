> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkbrowser/stateupdatehandler

# NetworkBrowser.StateUpdateHandler

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
typealias StateUpdateHandler = @isolated(any) @Sendable (NetworkBrowser<Provider>, NetworkBrowser<Provider>.State) -> Void
```

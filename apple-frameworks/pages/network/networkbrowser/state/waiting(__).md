> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkbrowser/state/waiting(_:)

# NetworkBrowser.State.waiting(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The browser is waiting for connectivity. Results will not be delivered until the browser moves into the ready state. A browser can move from the ready state into the waiting state. The associated error indicates why the browser is unable to browse.

## Declaration

```swift
case waiting(NWError)
```

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwbrowser/stateupdatehandler

# stateUpdateHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A handler that receives browser state updates.

## Declaration

```swift
@preconcurrency final var stateUpdateHandler: (@Sendable (NWBrowser.State) -> Void)? { get set }
```

## See Also

### Managing Browsers

- [NWBrowser.State](state-swift.enum.md): States indicating whether a browser is able to discover services.
- [state](state-swift.property.md): The current state of the browser.
- [cancel()](cancel%28%29.md): Stops browsing for services.

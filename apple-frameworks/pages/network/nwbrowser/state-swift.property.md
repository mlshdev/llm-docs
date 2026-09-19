> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwbrowser/state-swift.property

# state

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current state of the browser.

## Declaration

```swift
final var state: NWBrowser.State { get }
```

## See Also

### Managing Browsers

- [stateUpdateHandler](stateupdatehandler.md): A handler that receives browser state updates.
- [NWBrowser.State](state-swift.enum.md): States indicating whether a browser is able to discover services.
- [cancel()](cancel%28%29.md): Stops browsing for services.

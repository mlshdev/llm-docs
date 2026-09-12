> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/state-swift.enum/failed(_:)](https://developer.apple.com/documentation/network/nwbrowser/state-swift.enum/failed(_:))

# NWBrowser.State.failed(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The browser has encountered a fatal error.

## Declaration

```swift
case failed(NWError)
```

## See Also

### States

- [NWBrowser.State.setup](setup.md): The browser has been initialized but not started.
- [NWBrowser.State.ready](ready.md): The browser is registered for discovering services.
- [NWBrowser.State.cancelled](cancelled.md): The browser has been canceled.

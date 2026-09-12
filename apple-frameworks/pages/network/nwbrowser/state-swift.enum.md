> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/state-swift.enum](https://developer.apple.com/documentation/network/nwbrowser/state-swift.enum)

# NWBrowser.State

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

States indicating whether a browser is able to discover services.

## Declaration

```swift
enum State
```

## Topics

### States

- [NWBrowser.State.setup](state-swift.enum/setup.md): The browser has been initialized but not started.
- [NWBrowser.State.ready](state-swift.enum/ready.md): The browser is registered for discovering services.
- [NWBrowser.State.failed(\_:)](state-swift.enum/failed%28__%29.md): The browser has encountered a fatal error.
- [NWBrowser.State.cancelled](state-swift.enum/cancelled.md): The browser has been canceled.

### Enumeration Cases

- [NWBrowser.State.waiting(\_:)](state-swift.enum/waiting%28__%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Browsers

- [stateUpdateHandler](stateupdatehandler.md): A handler that receives browser state updates.
- [state](state-swift.property.md): The current state of the browser.
- [cancel()](cancel%28%29.md): Stops browsing for services.

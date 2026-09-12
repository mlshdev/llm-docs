> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkbrowser/state](https://developer.apple.com/documentation/network/networkbrowser/state)

# NetworkBrowser.State

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Possible states for the browser to be in.

## Declaration

```swift
enum State
```

## Topics

### Enumeration Cases

- [NetworkBrowser.State.cancelled](state/cancelled.md): The browser has been cancelled. Do not call `start()` on the browser to restart it. Instead, create a new browser.
- [NetworkBrowser.State.failed(\_:)](state/failed%28__%29.md): The browser has irrecoverably failed. Do not call `start()` on the browser to restart it. Instead, `cancel()` the browser and create a new browser.
- [NetworkBrowser.State.ready](state/ready.md): The browser is active and will monitor services on the network. Set the `browseResultsChangedHandler` to get updates for these services.
- [NetworkBrowser.State.setup](state/setup.md): The browser has been created but not started. Set any relevant callback handlers on the browser before calling `start()`.
- [NetworkBrowser.State.waiting(\_:)](state/waiting%28__%29.md): The browser is waiting for connectivity. Results will not be delivered until the browser moves into the ready state. A browser can move from the ready state into the waiting state. The associated error indicates why the browser is unable to browse.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

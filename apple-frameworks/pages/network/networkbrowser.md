> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkbrowser](https://developer.apple.com/documentation/network/networkbrowser)

# NetworkBrowser

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Discover advertised services and devices on the network.

## Declaration

```swift
final class NetworkBrowser<Provider> where Provider : BrowserProvider
```

<a id="overview"></a>

## Overview

Whenever services become available, get modified, or go away, the browser will generate a set of browse results tracking those changes. You can subscribe to and receive these updates as long as the browser is active.

## Topics

### Initializers

- [init(for:using:)](networkbrowser/init%28for_using_%29.md): Create a browser that will browse for the service specified by a BrowserProvider, with parameters.

### Instance Methods

- [onStateUpdate(\_:)](networkbrowser/onstateupdate%28__%29.md): Set a closure to be called when the browser’s state changes.
- [run(\_:)](networkbrowser/run%28__%29-31x4b.md): Run the browser and receive updates when when the set of discovered endpoints change.
- [run(\_:)](networkbrowser/run%28__%29-wqyo.md)

### Type Aliases

- [NetworkBrowser.StateUpdateHandler](networkbrowser/stateupdatehandler.md)

### Enumerations

- [NetworkBrowser.RunResult](networkbrowser/runresult.md)
- [NetworkBrowser.State](networkbrowser/state.md): Possible states for the browser to be in.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

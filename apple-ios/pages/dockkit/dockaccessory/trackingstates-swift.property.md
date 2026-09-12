> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/trackingstates-swift.property](https://developer.apple.com/documentation/dockkit/dockaccessory/trackingstates-swift.property)

# trackingStates

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Provides an access to the asynchronous sequence of tracking session states

## Declaration

```swift
final var trackingStates: DockAccessory.TrackingStates { get throws }
```

<a id="return-value"></a>

## Return Value

A `DockAccessory.TrackingStates` instance representing the current state of tracking.

<a id="discussion"></a>

## Discussion

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if device is disconnected, or [DockKitError.notSupportedByDevice](../dockkiterror/notsupportedbydevice.md) if device doesn’t support updates.

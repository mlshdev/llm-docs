> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/batterystates-swift.property](https://developer.apple.com/documentation/dockkit/dockaccessory/batterystates-swift.property)

# batteryStates

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Battery states from the accessory that indicate changes in battery charge or readiness

## Declaration

```swift
final var batteryStates: DockAccessory.BatteryStates { get throws }
```

<a id="return-value"></a>

## Return Value

Accessory events related to button presses and common camera controls.

<a id="discussion"></a>

## Discussion

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if device is disconnected, or [DockKitError.notSupportedByDevice](../dockkiterror/notsupportedbydevice.md) if device doesn’t support updates.

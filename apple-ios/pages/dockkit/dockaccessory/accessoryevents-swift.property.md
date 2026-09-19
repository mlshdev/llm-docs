> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessory/accessoryevents-swift.property

# accessoryEvents

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+

Events from the accessory that signify button presses or common camera controls.

## Declaration

```swift
final var accessoryEvents: DockAccessory.AccessoryEvents { get throws }
```

<a id="return-value"></a>

## Return Value

Accessory events related to button presses and common camera controls.

<a id="discussion"></a>

## Discussion

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if device is disconnected, or [DockKitError.notSupportedByDevice](../dockkiterror/notsupportedbydevice.md) if device doesn’t support updates.

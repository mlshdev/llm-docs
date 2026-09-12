> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessorymanager/accessorystatechanges](https://developer.apple.com/documentation/dockkit/dockaccessorymanager/accessorystatechanges)

# accessoryStateChanges

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Obtain a reference to a dock accessory and receive notifications about its state.

## Declaration

```swift
var accessoryStateChanges: DockAccessory.StateChanges { get throws }
```

<a id="return-value"></a>

## Return Value

A value that indicates the dock accessory that changed and its new state.

## Mentioned In

- [Modify rotation and positioning programmatically](../modify-rotation-and-positioning-behavior-programmatically.md)

<a id="discussion"></a>

## Discussion

A docking or undocking notification occurs when a person docks or removes a device such as iPhone from a compatible dock accessory. The notification is a prequisite for modifying the tracking behavior of a dock accessory. For more information on controlling a dock accessory, see [DockAccessory](../dockaccessory.md).

The following code demonstrates how to iterate through the accessory state changes to obtain the dock accessory.

```
do {
   for await accessory in try DockAccessoryManager.shared.accessoryStateChanges {
       // If this is an accessory you’re interested in, save it for later use.
   }
} catch {
   log(“Failed fetching state changes, \(error)“)
}
```

> **Throws**

> [DockKitError.notSupported](../dockkiterror/notsupported.md) if called on macOS.

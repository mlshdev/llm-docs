> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/batterystate](https://developer.apple.com/documentation/dockkit/dockaccessory/batterystate)

# DockAccessory.BatteryState

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A struct that represents an accessory battery state.

## Declaration

```swift
struct BatteryState
```

<a id="overview"></a>

## Overview

This state is emitted when the battery level changes on accessory.

## Topics

### Instance Properties

- [batteryLevel](batterystate/batterylevel.md): Current charge percentage (0..1) of the battery
- [chargeState](batterystate/chargestate.md): An enumeration representing the charge state of the battery
- [lowBattery](batterystate/lowbattery.md): True when accessory deems its charge to be too low to function properly
- [name](batterystate/name.md): The name of the battery that is sending this state from accessory

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

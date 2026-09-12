> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityfilter/devices-swift.struct](https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/devices-swift.struct)

# DeviceActivityFilter.Devices

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A type your app uses to indiciate which devices to include in a device activity report.

## Declaration

```swift
struct Devices
```

<a id="overview"></a>

## Overview

Users can control whether a device shares its data with other devices in their circle in iCloud settings.

## Topics

### Initializers

- [init(\_:)](devices-swift.struct/init%28__%29.md): Filters data for the provided device models.

### Type Properties

- [all](devices-swift.struct/all.md): Filters data for all devices that are sharing activity data with the current device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

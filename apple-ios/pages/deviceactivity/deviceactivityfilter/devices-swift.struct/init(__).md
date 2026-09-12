> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityfilter/devices-swift.struct/init(_:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/devices-swift.struct/init(_:))

# init(\_:)

**Framework:** Device Activity  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Filters data for the provided device models.

## Declaration

```swift
init(_ models: Set<DeviceActivityData.Device.Model>)
```

<a id="discussion"></a>

## Discussion

Use an empty set to filter data for all devices that are sharing activity data with the current device.

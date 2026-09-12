> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice/id-swift.property](https://developer.apple.com/documentation/wifiaware/wapaireddevice/id-swift.property)

# id

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A stable ID that you can use to uniquely identify a device.

## Declaration

```swift
let id: WAPairedDevice.ID
```

<a id="discussion"></a>

## Discussion

The ID is stable for the lifetime of a single app install on a single device. This value is the same as the value provided in [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit/)’s `ASAccessory/wifiAwarePairedDeviceID`.

## See Also

### Getting the app-specific identifier

- [WAPairedDevice.ID](id-swift.typealias.md): A type of value that uniquely identifies the paired device.

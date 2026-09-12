> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waerror/deviceinvalid(_:)](https://developer.apple.com/documentation/wifiaware/waerror/deviceinvalid(_:))

# WAError.deviceInvalid(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs if your app specifies a paired device it doesn’t have access to.

## Declaration

```swift
case deviceInvalid(WAError.DeviceInvalidDetails)
```

## See Also

### Checking for invalid device

- [WAError.DeviceInvalidDetails](deviceinvaliddetails.md): The optional details describing the device that’s invalid.

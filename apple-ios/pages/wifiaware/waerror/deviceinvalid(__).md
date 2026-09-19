> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/deviceinvalid(_:)

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

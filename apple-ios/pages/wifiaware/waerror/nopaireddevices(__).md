> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/nopaireddevices(_:)

# WAError.noPairedDevices(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs if your app doesn’t have access to any paired devices.

## Declaration

```swift
case noPairedDevices(WAError.NoPairedDevicesDetails)
```

## See Also

### Checking if paired devices are present or specified

- [WAError.NoPairedDevicesDetails](nopaireddevicesdetails.md): The optional details describing the lack of paired devices.

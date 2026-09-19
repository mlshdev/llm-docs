> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/nopaireddevicesdetails

# WAError.NoPairedDevicesDetails

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The optional details describing the lack of paired devices.

## Declaration

```swift
struct NoPairedDevicesDetails
```

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking if paired devices are present or specified

- [WAError.noPairedDevices(\_:)](nopaireddevices%28__%29.md): An error that occurs if your app doesn’t have access to any paired devices.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waendpoint](https://developer.apple.com/documentation/wifiaware/waendpoint)

# WAEndpoint

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The endpoint of a Wi-Fi Aware connection.

## Declaration

```swift
struct WAEndpoint
```

## Topics

### Getting the service

- [publishedService](waendpoint/publishedservice.md): The publishable service that is, or can be, connected.
- [subscribedService](waendpoint/subscribedservice.md): The subscribable service that is, or can be, connected.

### Getting the device anchoring the endpoint

- [device](waendpoint/device.md): The remote device that is, or can be, connected.

### Getting a string description

- [description](waendpoint/description.md): The description of the object.

### Hashing and comparing

- [==(\_:\_:)](waendpoint/==%28____%29.md): Two endpoints are logically equivalent if they have the same service type (publish vs subscribe) with the same name, and refer to the same device.
- [hash(into:)](waendpoint/hash%28into_%29.md): Compute unique hash of this object.

### Instance Properties

- [performanceForecast](waendpoint/performanceforecast.md): The forecasted performance for connections setup to the remote device, per WAPerformanceMode.

## Relationships

### Conforms To

- [Connectable](https://developer.apple.com/documentation/network/connectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connections

- [WAConnection](waconnection.md): Provides access to the Wi-Fi Aware-specific configuration and information that underlies a given `Network/NetworkConnection`.

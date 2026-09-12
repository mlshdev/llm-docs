> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wacapabilities](https://developer.apple.com/documentation/wifiaware/wacapabilities)

# WACapabilities

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A structure that checks the host device’s supported features and capabilities.

## Declaration

```swift
struct WACapabilities
```

## Topics

### Checking features supported by host device

- [WACapabilities.Feature](wacapabilities/feature.md): Features that your app’s current host device can support.
- [supportedFeatures](wacapabilities/supportedfeatures.md): A property that returns a set of supported features, or an empty set if the current platform doesn’t support Wi-Fi Aware.

### Checking for the maximum devices and services

- [maximumConnectableDevices](wacapabilities/maximumconnectabledevices.md): The maximum number of unique devices your app can connect to simultaneously.
- [maximumPublishableServices](wacapabilities/maximumpublishableservices.md): The maximum number of unique services your app can publish simultaneously.
- [maximumSubscribableServices](wacapabilities/maximumsubscribableservices.md): The maximum number of unique services your app can simultaneously subscribe to.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Host capabilities

- [WACapabilities.Feature](wacapabilities/feature.md): Features that your app’s current host device can support.

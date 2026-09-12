> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wacapabilities/feature](https://developer.apple.com/documentation/wifiaware/wacapabilities/feature)

# WACapabilities.Feature

**Framework:** Wi-Fi Aware  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Features that your app’s current host device can support.

## Declaration

```swift
enum Feature
```

<a id="overview"></a>

## Overview

Supported features are typically created by the system on behalf of the client, so they usually don’t need to be instantiated directly.

## Topics

### Checking for Wi-Fi Aware support

- [WACapabilities.Feature.wifiAware](feature/wifiaware.md): Indicates that the host supports Wi-Fi Aware.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Host capabilities

- [WACapabilities](../wacapabilities.md): A structure that checks the host device’s supported features and capabilities.

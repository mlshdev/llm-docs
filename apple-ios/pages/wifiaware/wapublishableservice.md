> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapublishableservice](https://developer.apple.com/documentation/wifiaware/wapublishableservice)

# WAPublishableService

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A service, hosted by your app, that remote devices can connect to.

## Declaration

```swift
struct WAPublishableService
```

## Mentioned In

- [Adopting Wi-Fi Aware](adopting-wi-fi-aware.md)

<a id="overview"></a>

## Overview

You specify the services your app uses in `Info.plist` via a dictionary under the [WiFiAwareServices](https://developer.apple.com/documentation/bundleresources/information-property-list/wifiawareservices) key:

- Each *key* in that dictionary is the full service name of a service, and the *value* is a dictionary of configuration properties for that service.
- If the configuration dictionary contains the `Publishable` key, the system creates a `WAPublishableService` is created for that service and makes it available in [allServices](wapublishableservice/allservices.md).

## Topics

### Selecting from your app’s publishable services

- [allServices](wapublishableservice/allservices.md): A dictionary of all publishable services declared by your app, indexed by service name.

### Checking a service name and ID

- [WAPublishableService.ID](wapublishableservice/id-swift.typealias.md): The type of value that uniquely identifies the service.
- [id](wapublishableservice/id-swift.property.md): A stable ID that can be used to identify this publishable service.
- [name](wapublishableservice/name.md): The full name of the service, as sent over the air.

### Getting a string description

- [description](wapublishableservice/description.md): A description of the service.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [WAService](waservice.md)

## See Also

### Services to discover

- [WAService](waservice.md): A protocol that defines a service that a device can publish or subscribe to.
- [WASubscribableService](wasubscribableservice.md): A service your app discovers on remote devices and can connect to.

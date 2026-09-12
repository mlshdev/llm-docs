> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/browserprovider](https://developer.apple.com/documentation/network/browserprovider)

# BrowserProvider

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

BrowserProviders can be used when creating NetworkBrowsers.

## Declaration

```swift
protocol BrowserProvider : Sendable
```

## Topics

### Associated Types

- [Endpoint](browserprovider/endpoint.md)

### Type Methods

- [bonjour(\_:domain:includeTxtRecord:)](browserprovider/bonjour%28__domain_includetxtrecord_%29.md): Conforms when `Self` is `Bonjour`. Create a Bonjour browser provider used to browse for Bonjour services.
- [wifiAware(\_:active:)](browserprovider/wifiaware%28__active_%29.md): Conforms when `Self` is `WASubscriberBrowser`. Setup a `NetworkBrowser` to subscribe to Wi-Fi Aware services on selected, paired devices.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [Bonjour](bonjour.md)

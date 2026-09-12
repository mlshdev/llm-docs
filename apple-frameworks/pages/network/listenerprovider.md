> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/listenerprovider](https://developer.apple.com/documentation/network/listenerprovider)

# ListenerProvider

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Extensible support for configuring advertise descriptors to define the service a listener should advertise.

## Declaration

```swift
protocol ListenerProvider
```

<a id="overview"></a>

## Overview

Listeners use advertise descriptors to advertise services that can subsequently be discovered by browsers.

## Topics

### Instance Properties

- [service](listenerprovider/service.md)

### Type Methods

- [bonjour(name:type:domain:txtRecord:)](listenerprovider/bonjour%28name_type_domain_txtrecord_%29.md): Conforms when `Self` is `BonjourListenerProvider`. Create a Bonjour service to advertise.
- [wifiAware(\_:active:)](listenerprovider/wifiaware%28__active_%29.md): Conforms when `Self` is `WAPublisherListener`. Sets a network listener to publish Wi-Fi Aware services to the selected paired devices.

## Relationships

### Conforming Types

- [BonjourListenerProvider](bonjourlistenerprovider.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddiscoverysession](https://developer.apple.com/documentation/devicediscoveryextension/dddiscoverysession)

# DDDiscoverySession (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An object that relays device discovery events from the extension to the system.

## Declaration

```swift
class DDDiscoverySession
```

<a id="overview"></a>

## Overview

The system passes the extension an instance of this class when it attempts to discover a device. Device discovery starts when an app displays [AVRoutePickerView](../avkit/avroutepickerview.md) and the system calls the extension’s `startDiscovery(session:)` implementation.

## Topics

### Providing an event to the system

- [report(\_:)](dddiscoverysession/report%28__%29.md): Reports an event to the system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Extension

- [DDDiscoveryExtension](dddiscoveryextension.md): A specification that enables the framework to start and stop the extension’s discovery process.
- [DDDiscoveryExtensionConfigurationProtocol](dddiscoveryextensionconfigurationprotocol.md): A specification that provides a communication channel between the extension and the framework.

# DDDiscoverySession (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An object that relays device discovery events from the extension to the system.

## Declaration

```objectivec
@interface DDDiscoverySession : NSObject
```

<a id="overview"></a>

## Overview

The system passes the extension an instance of this class when it attempts to discover a device. Device discovery starts when an app displays [AVRoutePickerView](../avkit/avroutepickerview.md) and the system calls the extension’s `startDiscovery(session:)` implementation.

## Topics

### Providing an event to the system

- [reportEvent:](dddiscoverysession/report%28__%29.md): Reports an event to the system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

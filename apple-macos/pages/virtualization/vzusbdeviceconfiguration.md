> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzusbdeviceconfiguration)

# VZUSBDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 15.0+

The protocol for configuring USB devices.

## Declaration

```swift
protocol VZUSBDeviceConfiguration : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Classes that conform to this protocol represent hot-pluggable USB device configurations.

> **Important**

>  Don’t use the `VZUSBDeviceConfiguration` protocol with objects outside the Virtualization framework. This protocol only describes capabilities of Virtualization framework objects.

## Topics

### Properties

- [uuid](vzusbdeviceconfiguration/uuid.md): The device’s unique identifier.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md)
- [VZUSBPassthroughDeviceConfiguration](vzusbpassthroughdeviceconfiguration.md)

## See Also

### Protocols

- [VZUSBDevice](vzusbdevice.md): A protocol that represents a USB device in a VM.

# VZUSBDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 15.0+

The protocol for configuring USB devices.

## Declaration

```objectivec
@protocol VZUSBDeviceConfiguration <NSObject>
```

<a id="overview"></a>

## Overview

Classes that conform to this protocol represent hot-pluggable USB device configurations.

> **Important**

>  Don’t use the `VZUSBDeviceConfiguration` protocol with objects outside the Virtualization framework. This protocol only describes capabilities of Virtualization framework objects.

## Topics

### Properties

- [uuid](vzusbdeviceconfiguration/uuid.md): The device’s unique identifier.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md)
- [VZUSBPassthroughDeviceConfiguration](vzusbpassthroughdeviceconfiguration.md)

## See Also

### Protocols

- [VZUSBDevice](vzusbdevice.md): A protocol that represents a USB device in a VM.

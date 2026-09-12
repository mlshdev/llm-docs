> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevicesource](https://developer.apple.com/documentation/coremediaio/cmioextensiondevicesource)

# CMIOExtensionDeviceSource (Swift)

**Framework:** Core Media I/O  
**Kind:** Protocol  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A protocol for objects that act as device sources.

## Declaration

```swift
protocol CMIOExtensionDeviceSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Create a class that adopts this protocol to configure device properties.

## Topics

### Managing Properties

- [availableProperties](cmioextensiondevicesource/availableproperties.md): A set of available properties that a device provides.
- [deviceProperties(forProperties:)](cmioextensiondevicesource/deviceproperties%28forproperties_%29.md): Retrieves the state of device properties.
- [setDeviceProperties(\_:)](cmioextensiondevicesource/setdeviceproperties%28__%29.md): Sets the state of device properties.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Devices

- [CMIOExtensionDevice](cmioextensiondevice.md): An object that represents a physical or virtual device.
- [CMIOExtensionDeviceProperties](cmioextensiondeviceproperties.md): An object that defines the properties of a device.

# CMIOExtensionDeviceSource (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Protocol  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A protocol for objects that act as device sources.

## Declaration

```objectivec
@protocol CMIOExtensionDeviceSource <NSObject>
```

<a id="overview"></a>

## Overview

Create a class that adopts this protocol to configure device properties.

## Topics

### Managing Properties

- [availableProperties](cmioextensiondevicesource/availableproperties.md): A set of available properties that a device provides.
- [devicePropertiesForProperties:error:](cmioextensiondevicesource/deviceproperties%28forproperties_%29.md): Retrieves the state of device properties.
- [setDeviceProperties:error:](cmioextensiondevicesource/setdeviceproperties%28__%29.md): Sets the state of device properties.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Devices

- [CMIOExtensionDevice](cmioextensiondevice.md): An object that represents a physical or virtual device.
- [CMIOExtensionDeviceProperties](cmioextensiondeviceproperties.md): An object that defines the properties of a device.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice)

# CMIOExtensionDevice (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that represents a physical or virtual device.

## Declaration

```swift
class CMIOExtensionDevice
```

## Mentioned In

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md)

<a id="overview"></a>

## Overview

A device provides one or more streams of media data to a [CMIOExtensionProvider](cmioextensionprovider.md).

## Topics

### Creating a Device

- [init(localizedName:deviceID:source:)](cmioextensiondevice/init%28localizedname_deviceid_source_%29.md): Creates an extension device.
- [init(localizedName:deviceID:legacyDeviceID:source:)](cmioextensiondevice/init%28localizedname_deviceid_legacydeviceid_source_%29.md): Creates an extension device with an optional legacy device identifier.

### Identifying a Device

- [localizedName](cmioextensiondevice/localizedname.md): A localized name for a device.
- [deviceID](cmioextensiondevice/deviceid.md): A universally unique device identifier value.
- [legacyDeviceID](cmioextensiondevice/legacydeviceid.md): A legacy device identifier.

### Managing Streams

- [streams](cmioextensiondevice/streams.md): An array of media streams attached to this device.
- [addStream(\_:)](cmioextensiondevice/addstream%28__%29.md): Adds a stream to a device.
- [removeStream(\_:)](cmioextensiondevice/removestream%28__%29.md): Removes a stream from the device.

### Accessing the Device Source

- [source](cmioextensiondevice/source.md): A source object for a device.

### Posting Property Changes

- [notifyPropertiesChanged(\_:)](cmioextensiondevice/notifypropertieschanged%28__%29.md): Notifies clients of property changes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Devices

- [CMIOExtensionDeviceSource](cmioextensiondevicesource.md): A protocol for objects that act as device sources.
- [CMIOExtensionDeviceProperties](cmioextensiondeviceproperties.md): An object that defines the properties of a device.

# CMIOExtensionDevice (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that represents a physical or virtual device.

## Declaration

```objectivec
@interface CMIOExtensionDevice : NSObject
```

## Mentioned In

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md)

<a id="overview"></a>

## Overview

A device provides one or more streams of media data to a [CMIOExtensionProvider](cmioextensionprovider.md).

## Topics

### Creating a Device

- [deviceWithLocalizedName:deviceID:source:](cmioextensiondevice/devicewithlocalizedname_deviceid_source_.md): Returns a new extension device.
- [deviceWithLocalizedName:deviceID:legacyDeviceID:source:](cmioextensiondevice/devicewithlocalizedname_deviceid_legacydeviceid_source_.md): Returns a new extension device with an optional legacy device identifier.
- [initWithLocalizedName:deviceID:source:](cmioextensiondevice/init%28localizedname_deviceid_source_%29.md): Creates an extension device.
- [initWithLocalizedName:deviceID:legacyDeviceID:source:](cmioextensiondevice/init%28localizedname_deviceid_legacydeviceid_source_%29.md): Creates an extension device with an optional legacy device identifier.

### Identifying a Device

- [localizedName](cmioextensiondevice/localizedname.md): A localized name for a device.
- [deviceID](cmioextensiondevice/deviceid.md): A universally unique device identifier value.
- [legacyDeviceID](cmioextensiondevice/legacydeviceid.md): A legacy device identifier.

### Managing Streams

- [streams](cmioextensiondevice/streams.md): An array of media streams attached to this device.
- [addStream:error:](cmioextensiondevice/addstream%28__%29.md): Adds a stream to a device.
- [removeStream:error:](cmioextensiondevice/removestream%28__%29.md): Removes a stream from the device.

### Accessing the Device Source

- [source](cmioextensiondevice/source.md): A source object for a device.

### Posting Property Changes

- [notifyPropertiesChanged:](cmioextensiondevice/notifypropertieschanged%28__%29.md): Notifies clients of property changes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Devices

- [CMIOExtensionDeviceSource](cmioextensiondevicesource.md): A protocol for objects that act as device sources.
- [CMIOExtensionDeviceProperties](cmioextensiondeviceproperties.md): An object that defines the properties of a device.

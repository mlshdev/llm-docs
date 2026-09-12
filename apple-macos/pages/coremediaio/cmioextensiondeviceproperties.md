> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties)

# CMIOExtensionDeviceProperties (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that defines the properties of a device.

## Declaration

```swift
class CMIOExtensionDeviceProperties
```

<a id="overview"></a>

## Overview

Create an instance of this object to manage the device’s property state.

## Topics

### Creating Device Properties

- [init(dictionary:)](cmioextensiondeviceproperties/init%28dictionary_%29.md): Creates a properties object with a dictionary of property states.

### Configuring Device Properties

- [model](cmioextensiondeviceproperties/model.md): A device model string.
- [linkedCoreAudioDeviceUID](cmioextensiondeviceproperties/linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](cmioextensiondeviceproperties/transporttype-96gm.md): The transport type of the device, such as USB or HDMI.
- [suspended](cmioextensiondeviceproperties/suspended-eru0.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState(\_:forProperty:)](cmioextensiondeviceproperties/setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](cmioextensiondeviceproperties/propertiesdictionary.md): A dictionary of properties for a device.

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

- [CMIOExtensionDevice](cmioextensiondevice.md): An object that represents a physical or virtual device.
- [CMIOExtensionDeviceSource](cmioextensiondevicesource.md): A protocol for objects that act as device sources.

# CMIOExtensionDeviceProperties (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that defines the properties of a device.

## Declaration

```objectivec
@interface CMIOExtensionDeviceProperties : NSObject
```

<a id="overview"></a>

## Overview

Create an instance of this object to manage the device’s property state.

## Topics

### Creating Device Properties

- [devicePropertiesWithDictionary:](cmioextensiondeviceproperties/devicepropertieswithdictionary_.md): Returns a new properties object with a dictionary of property states.
- [initWithDictionary:](cmioextensiondeviceproperties/init%28dictionary_%29.md): Creates a properties object with a dictionary of property states.

### Configuring Device Properties

- [model](cmioextensiondeviceproperties/model.md): A device model string.
- [linkedCoreAudioDeviceUID](cmioextensiondeviceproperties/linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](cmioextensiondeviceproperties/transporttype-25qzh.md): The transport type of the device, such as USB or HDMI.
- [suspended](cmioextensiondeviceproperties/suspended-2ja7h.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState:forProperty:](cmioextensiondeviceproperties/setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](cmioextensiondeviceproperties/propertiesdictionary.md): A dictionary of properties for a device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Devices

- [CMIOExtensionDevice](cmioextensiondevice.md): An object that represents a physical or virtual device.
- [CMIOExtensionDeviceSource](cmioextensiondevicesource.md): A protocol for objects that act as device sources.

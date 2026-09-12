> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria)

# AAUSBAccessoryMatchingCriteria (Swift)

**Framework:** Accessory Access  
**Kind:** Class  
**Availability:** macOS 27.0+

A class that represents the accessory matching criteria for a USB accessory.

## Declaration

```swift
class AAUSBAccessoryMatchingCriteria
```

<a id="Discussion"></a>

## Discussion

A class that conforms to the [AAUSBAccessoryListener](aausbaccessorylistener.md) protocol can use [AAUSBAccessoryMatchingCriteria](aausbaccessorymatchingcriteria.md) objects to register itself with [AAUSBAccessoryManager](aausbaccessorymanager.md).

## Topics

### Creating matching criteria

- [init(deviceMatchingDictionary:)](aausbaccessorymatchingcriteria/init%28devicematchingdictionary_%29.md): Initializes a criteria object using a USB device matching dictionary.
- [init(deviceMatchingDictionary:interfaceMatchingDictionaries:interfaceMatchingOption:)](aausbaccessorymatchingcriteria/init%28devicematchingdictionary_interfacematchingdictionaries_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching dictionaries, for the provided USB device matching criteria.
- [init(deviceMatchingCriteria:)](aausbaccessorymatchingcriteria/init%28devicematchingcriteria_%29.md): Initializes a criteria object with the provided USB device matching properties.
- [init(deviceMatchingCriteria:interfaceMatchingCriteria:interfaceMatchingOption:)](aausbaccessorymatchingcriteria/init%28devicematchingcriteria_interfacematchingcriteria_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching criteria, for the given USB device matching criteria.

### Specifying device and interface criteria

- [AAUSBAccessoryMatchingCriteria.DeviceMatchingCriteria](aausbaccessorymatchingcriteria/devicematchingcriteria.md): A structure you provide that enumerates which device characteristics to search for.
- [AAUSBAccessoryMatchingCriteria.InterfaceMatchingCriteria](aausbaccessorymatchingcriteria/interfacematchingcriteria.md): A structure you provide that enumerates which device interface characteristics to search for.

### Matching options

- [AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption](aausbaccessorymatchingcriteria/interfacematchingoption.md): Values that represent options for performing interface matching using interface matching criteria.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AAUSBAccessoryMatchingCriteria (Objective-C)

**Framework:** Accessory Access  
**Kind:** Class  
**Availability:** macOS 27.0+

A class that represents the accessory matching criteria for a USB accessory.

## Declaration

```objectivec
@interface AAUSBAccessoryMatchingCriteria : NSObject
```

<a id="Discussion"></a>

## Discussion

A class that conforms to the [AAUSBAccessoryListener](aausbaccessorylistener.md) protocol can use [AAUSBAccessoryMatchingCriteria](aausbaccessorymatchingcriteria.md) objects to register itself with [AAUSBAccessoryManager](aausbaccessorymanager.md).

## Topics

### Creating matching criteria

- [initWithDeviceMatchingDictionary:](aausbaccessorymatchingcriteria/init%28devicematchingdictionary_%29.md): Initializes a criteria object using a USB device matching dictionary.
- [initWithDeviceMatchingDictionary:interfaceMatchingDictionaries:interfaceMatchingOption:](aausbaccessorymatchingcriteria/init%28devicematchingdictionary_interfacematchingdictionaries_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching dictionaries, for the provided USB device matching criteria.

### Matching options

- [AAUSBAccessoryMatchingCriteriaInterfaceMatchingOption](aausbaccessorymatchingcriteria/interfacematchingoption.md): Values that represent options for performing interface matching using interface matching criteria.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

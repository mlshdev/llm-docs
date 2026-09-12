> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostinterfacepropertykey](https://developer.apple.com/documentation/iousbhost/iousbhostinterfacepropertykey)

# IOUSBHostInterfacePropertyKey (Swift)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Properties of a USB interface that describe its state.

## Declaration

```swift
struct IOUSBHostInterfacePropertyKey
```

## Topics

### Properties

- [alternateSetting](iousbhostinterfacepropertykey/alternatesetting.md): The USB interface’s current alternative setting value.

### Initializing the Structure

- [init(rawValue:)](iousbhostinterfacepropertykey/init%28rawvalue_%29.md): Creates the structure.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### IOServicePlane Properties

- [IOUSBHostDevicePropertyKey](iousbhostdevicepropertykey.md): Properties of a USB device that describe its state.
- [IOUSBHostMatchingPropertyKey](iousbhostmatchingpropertykey.md): Properties for implementing the matching service.
- [IOUSBHostPropertyKey](iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

# IOUSBHostInterfacePropertyKey (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Properties of a USB interface that describe its state.

## Declaration

```objectivec
typedef NSString * IOUSBHostInterfacePropertyKey;
```

## Topics

### Properties

- [IOUSBHostInterfacePropertyKeyAlternateSetting](iousbhostinterfacepropertykey/alternatesetting.md): The USB interface’s current alternative setting value.

## See Also

### IOServicePlane Properties

- [IOUSBHostDevicePropertyKey](iousbhostdevicepropertykey.md): Properties of a USB device that describe its state.
- [IOUSBHostMatchingPropertyKey](iousbhostmatchingpropertykey.md): Properties for implementing the matching service.
- [IOUSBHostPropertyKey](iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

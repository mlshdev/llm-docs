> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodeviceconfigurationdelegate](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceconfigurationdelegate)

# VZCustomVirtioDeviceConfigurationDelegate (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A class that conforms to the custom Virtio device configuration delegate protocol that can provide methods for tracking the state of a custom Virtio device configuration object.

## Declaration

```swift
protocol VZCustomVirtioDeviceConfigurationDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [customVirtioConfiguration(\_:didCreateDevice:)](vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md): A method the framework calls when it creates a custom Virtio device from a custom Virtio device configuration.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to Virtio events

- [VZCustomVirtioDeviceDelegate](vzcustomvirtiodevicedelegate.md): A delegate protocol that defines the methods you implement to respond to the life cycle events of a custom Virtio device.

# VZCustomVirtioDeviceConfigurationDelegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A class that conforms to the custom Virtio device configuration delegate protocol that can provide methods for tracking the state of a custom Virtio device configuration object.

## Declaration

```objectivec
@protocol VZCustomVirtioDeviceConfigurationDelegate <NSObject>
```

## Topics

### Instance Methods

- [customVirtioConfiguration:didCreateDevice:](vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md): A method the framework calls when it creates a custom Virtio device from a custom Virtio device configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to Virtio events

- [VZCustomVirtioDeviceDelegate](vzcustomvirtiodevicedelegate.md): A delegate protocol that defines the methods you implement to respond to the life cycle events of a custom Virtio device.

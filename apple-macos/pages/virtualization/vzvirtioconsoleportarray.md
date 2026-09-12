> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleportarray](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleportarray)

# VZVirtioConsolePortArray (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a collection of Virtio console ports.

## Declaration

```swift
class VZVirtioConsolePortArray
```

## Topics

### Determining the number of ports

- [maximumPortCount](vzvirtioconsoleportarray/maximumportcount.md): An unsigned integer that represents the maximum number of ports allocated by this device.

### Accessing a specific port

- [subscript(\_:)](vzvirtioconsoleportarray/subscript%28__%29.md): Returns the Virtio console port at the specified index.

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

### Related Documentation

- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md): A class that represents a Virtio console device in a virtual machine.

### Console ports

- [VZVirtioConsolePort](vzvirtioconsoleport.md): A class that represents a Virtio console port in a VM.

# VZVirtioConsolePortArray (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a collection of Virtio console ports.

## Declaration

```objectivec
@interface VZVirtioConsolePortArray : NSObject
```

## Topics

### Determining the number of ports

- [maximumPortCount](vzvirtioconsoleportarray/maximumportcount.md): An unsigned integer that represents the maximum number of ports allocated by this device.

### Accessing a specific port

- [objectAtIndexedSubscript:](vzvirtioconsoleportarray/subscript%28__%29.md): Returns the Virtio console port at the specified index.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md): A class that represents a Virtio console device in a virtual machine.

### Console ports

- [VZVirtioConsolePort](vzvirtioconsoleport.md): A class that represents a Virtio console port in a VM.

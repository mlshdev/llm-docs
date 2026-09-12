> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostiosource](https://developer.apple.com/documentation/iousbhost/iousbhostiosource)

# IOUSBHostIOSource (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

This class provides basic functionality for deriving pipe and stream classes.

## Declaration

```swift
class IOUSBHostIOSource
```

<a id="overview"></a>

## Overview

Don’t create objects of this class or use this class as a subclass. Instead, use [copyPipe(withAddress:)](iousbhostinterface/copypipe%28withaddress_%29.md) and [copyStream(withStreamID:)](iousbhostpipe/copystream%28withstreamid_%29.md) when creating an [IOUSBHostIOSource](iousbhostiosource.md).

## Topics

### Obtaining Device Information

- [deviceAddress](iousbhostiosource/deviceaddress.md): The device’s bus address.
- [endpointAddress](iousbhostiosource/endpointaddress.md): The pipe or stream’s endpoint address.
- [hostInterface](iousbhostiosource/hostinterface.md): The interface for the input/output source.

### Related Documentation

- [IOUSBHostPipe](iousbhostpipe.md): The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.
- [IOUSBHostStream](iousbhoststream.md): The class responsible for sending stream data for function drivers.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [IOUSBHostPipe](iousbhostpipe.md)
- [IOUSBHostStream](iousbhoststream.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Base Classes

- [IOUSBHostObject](iousbhostobject.md): This class provides basic functionality for sending device requests and retrieving descriptors.

# IOUSBHostIOSource (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

This class provides basic functionality for deriving pipe and stream classes.

## Declaration

```objectivec
@interface IOUSBHostIOSource : NSObject
```

<a id="overview"></a>

## Overview

Don’t create objects of this class or use this class as a subclass. Instead, use [copyPipeWithAddress:error:](iousbhostinterface/copypipe%28withaddress_%29.md) and [copyStreamWithStreamID:error:](iousbhostpipe/copystream%28withstreamid_%29.md) when creating an [IOUSBHostIOSource](iousbhostiosource.md).

## Topics

### Obtaining Device Information

- [deviceAddress](iousbhostiosource/deviceaddress.md): The device’s bus address.
- [endpointAddress](iousbhostiosource/endpointaddress.md): The pipe or stream’s endpoint address.
- [hostInterface](iousbhostiosource/hostinterface.md): The interface for the input/output source.

### Related Documentation

- [IOUSBHostPipe](iousbhostpipe.md): The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.
- [IOUSBHostStream](iousbhoststream.md): The class responsible for sending stream data for function drivers.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [IOUSBHostPipe](iousbhostpipe.md)
- [IOUSBHostStream](iousbhoststream.md)

## See Also

### Base Classes

- [IOUSBHostObject](iousbhostobject.md): This class provides basic functionality for sending device requests and retrieving descriptors.

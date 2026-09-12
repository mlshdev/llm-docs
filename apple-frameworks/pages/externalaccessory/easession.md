> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/easession](https://developer.apple.com/documentation/externalaccessory/easession)

# EASession (Swift)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The object you use to manage communications between your app and a connected hardware accessory.

## Declaration

```swift
class EASession
```

<a id="overview"></a>

## Overview

An [EASession](easession.md) object creates a communications channel between your app and a connected hardware accessory. The manufacturer of the device must share the accessory’s supported protocols with you. When you create your session, specify one of these protocols to initiate communication with the accessory. After initializing an [EASession](easession.md) object, use the provided output and input streams to transfer data to and from the accessory using that protocol.

After creating a session object, immediately retrieve and configure the stream objects provided by the session. Streams send events to their associated delegate to notify it of changes in the stream status. For example, streams notify the delegate when data is waiting to be read or when more space is available for writing data. For more information about how to use stream objects, see [Stream Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Streams/Streams.html#//apple_ref/doc/uid/10000188i).

When sending and receiving data using the provided streams, it is your responsibility to ensure the data is formatted according to the specified protocol. The [EASession](easession.md) class has no knowledge of specific accessory protocols and doesn’t attempt to format the data in any way before or after transferring it.

## Topics

### Creating the Session Object

- [init(accessory:forProtocol:)](easession/init%28accessory_forprotocol_%29.md): Initializes the session for the specified accessory and protocol.

### Getting Session Information

- [accessory](easession/accessory.md): The accessory attached to the session.
- [protocolString](easession/protocolstring.md): The protocol being used for communication with the accessory.

### Getting the Communication Streams

- [inputStream](easession/inputstream.md): The stream to use for receiving data from the accessory.
- [outputStream](easession/outputstream.md): The stream to use for sending data to the accessory.

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

### Accessory Communication

- [EAAccessory](eaaccessory.md): An object that contains information about a single, connected hardware accessory.

# EASession (Objective-C)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The object you use to manage communications between your app and a connected hardware accessory.

## Declaration

```objectivec
@interface EASession : NSObject
```

<a id="overview"></a>

## Overview

An [EASession](easession.md) object creates a communications channel between your app and a connected hardware accessory. The manufacturer of the device must share the accessory’s supported protocols with you. When you create your session, specify one of these protocols to initiate communication with the accessory. After initializing an [EASession](easession.md) object, use the provided output and input streams to transfer data to and from the accessory using that protocol.

After creating a session object, immediately retrieve and configure the stream objects provided by the session. Streams send events to their associated delegate to notify it of changes in the stream status. For example, streams notify the delegate when data is waiting to be read or when more space is available for writing data. For more information about how to use stream objects, see [Stream Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Streams/Streams.html#//apple_ref/doc/uid/10000188i).

When sending and receiving data using the provided streams, it is your responsibility to ensure the data is formatted according to the specified protocol. The [EASession](easession.md) class has no knowledge of specific accessory protocols and doesn’t attempt to format the data in any way before or after transferring it.

## Topics

### Creating the Session Object

- [initWithAccessory:forProtocol:](easession/init%28accessory_forprotocol_%29.md): Initializes the session for the specified accessory and protocol.

### Getting Session Information

- [accessory](easession/accessory.md): The accessory attached to the session.
- [protocolString](easession/protocolstring.md): The protocol being used for communication with the accessory.

### Getting the Communication Streams

- [inputStream](easession/inputstream.md): The stream to use for receiving data from the accessory.
- [outputStream](easession/outputstream.md): The stream to use for sending data to the accessory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessory Communication

- [EAAccessory](eaaccessory.md): An object that contains information about a single, connected hardware accessory.

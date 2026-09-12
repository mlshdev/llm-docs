> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessory](https://developer.apple.com/documentation/accessoryaccess/aausbaccessory)

# AAUSBAccessory (Swift)

**Framework:** Accessory Access  
**Kind:** Class  
**Availability:** macOS 27.0+

A class that represents a USB accessory.

## Declaration

```swift
class AAUSBAccessory
```

<a id="Discussion"></a>

## Discussion

A USB accessory can either be obtained from the [usbAccessoryDidConnect(\_:)](aausbaccessorylistener/usbaccessorydidconnect%28__%29.md) method, or instantiated from an [XPC](https://developer.apple.com/documentation/xpc) representation that describes an existing USB accessory.

## Topics

### Creating USB accessories

- [init(XPCRepresentation:)](aausbaccessory/init%28xpcrepresentation_%29-5lxcr.md): Creates a USB accessory from an XPC representation.
- [init(xpcRepresentation:)](aausbaccessory/init%28xpcrepresentation_%29-6dmbu.md): Creates a USB accessory from an XPC representation.
- [init(coder:)](aausbaccessory/init%28coder_%29.md): Creates a new USB accessory with the provided coder.

### Getting information about a USB accessory

- [configurationDescriptorData](aausbaccessory/configurationdescriptordata.md): Returns the currently selected configuration descriptor data.
- [deviceDescriptorData](aausbaccessory/devicedescriptordata.md): Returns the device descriptor data.
- [registryID](aausbaccessory/registryid.md): Returns the IORegistry ID for the USB accessory.

### Managing a USB accessory

- [open(serviceQueue:completionHandler:)](aausbaccessory/open%28servicequeue_completionhandler_%29.md): Opens a connection to the USB accessory for this process to access it exclusively.
- [close(completionHandler:)](aausbaccessory/close%28completionhandler_%29.md): Closes all connections to the USB accessory for this process.

### Connection and disconnection events

- [AAUSBAccessory.Event](aausbaccessory/event.md): Events that represent accessory connection and disconnection.

### Encoding a USB accessory for delivery to an XPC service

- [createXPCRepresentation()](aausbaccessory/createxpcrepresentation%28%29.md): Creates an encoded representation of the USB accessory.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing accessories

- [AAUSBAccessoryManager](aausbaccessorymanager.md): A class your app uses to manage USB accessories and the listener objects for those accessories.

# AAUSBAccessory (Objective-C)

**Framework:** Accessory Access  
**Kind:** Class  
**Availability:** macOS 27.0+

A class that represents a USB accessory.

## Declaration

```objectivec
@interface AAUSBAccessory : NSObject
```

<a id="Discussion"></a>

## Discussion

A USB accessory can either be obtained from the [usbAccessoryDidConnect:](aausbaccessorylistener/usbaccessorydidconnect%28__%29.md) method, or instantiated from an [XPC](https://developer.apple.com/documentation/xpc) representation that describes an existing USB accessory.

## Topics

### Creating USB accessories

- [initWithXPCRepresentation:](aausbaccessory/init%28xpcrepresentation_%29-6dmbu.md): Creates a USB accessory from an XPC representation.

### Getting information about a USB accessory

- [configurationDescriptorData](aausbaccessory/configurationdescriptordata.md): Returns the currently selected configuration descriptor data.
- [deviceDescriptorData](aausbaccessory/devicedescriptordata.md): Returns the device descriptor data.
- [registryID](aausbaccessory/registryid.md): Returns the IORegistry ID for the USB accessory.

### Managing a USB accessory

- [openWithServiceQueue:completionHandler:](aausbaccessory/open%28servicequeue_completionhandler_%29.md): Opens a connection to the USB accessory for this process to access it exclusively.
- [closeWithCompletionHandler:](aausbaccessory/close%28completionhandler_%29.md): Closes all connections to the USB accessory for this process.

### Encoding a USB accessory for delivery to an XPC service

- [createXPCRepresentation](aausbaccessory/createxpcrepresentation%28%29.md): Creates an encoded representation of the USB accessory.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing accessories

- [AAUSBAccessoryManager](aausbaccessorymanager.md): A class your app uses to manage USB accessories and the listener objects for those accessories.

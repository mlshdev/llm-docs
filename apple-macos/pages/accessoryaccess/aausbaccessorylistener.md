> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorylistener](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorylistener)

# AAUSBAccessoryListener (Swift)

**Framework:** Accessory Access  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A class that conforms to the framework’s USB accessory listener protocol can listen to the accessory events.

## Declaration

```swift
protocol AAUSBAccessoryListener : NSObjectProtocol, Sendable
```

<a id="Discussion"></a>

## Discussion

This protocol provides methods that notify your app when a USB accessory connects to or disconnects from the system.  The framework invokes the methods for a listener on the internal serial queue of [AAUSBAccessoryManager](aausbaccessorymanager.md).

## Topics

### Protocol methods

- [usbAccessoryDidConnect(\_:)](aausbaccessorylistener/usbaccessorydidconnect%28__%29.md): The method the framework invokes when a USB accessory connects to the system.
- [usbAccessoryDidDisconnect(\_:)](aausbaccessorylistener/usbaccessorydiddisconnect%28__%29.md): The method the framework invokes when a USB accessory disconnects from the system.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AAUSBAccessoryListener (Objective-C)

**Framework:** Accessory Access  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A class that conforms to the framework’s USB accessory listener protocol can listen to the accessory events.

## Declaration

```objectivec
@protocol AAUSBAccessoryListener <NSObject>
```

<a id="Discussion"></a>

## Discussion

This protocol provides methods that notify your app when a USB accessory connects to or disconnects from the system.  The framework invokes the methods for a listener on the internal serial queue of [AAUSBAccessoryManager](aausbaccessorymanager.md).

## Topics

### Protocol methods

- [usbAccessoryDidConnect:](aausbaccessorylistener/usbaccessorydidconnect%28__%29.md): The method the framework invokes when a USB accessory connects to the system.
- [usbAccessoryDidDisconnect:](aausbaccessorylistener/usbaccessorydiddisconnect%28__%29.md): The method the framework invokes when a USB accessory disconnects from the system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

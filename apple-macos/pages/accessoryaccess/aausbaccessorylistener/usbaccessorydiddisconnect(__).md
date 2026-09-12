> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorylistener/usbaccessorydiddisconnect(_:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorylistener/usbaccessorydiddisconnect(_:))

# usbAccessoryDidDisconnect(\_:) (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework invokes when a USB accessory disconnects from the system.

## Declaration

```swift
optional func usbAccessoryDidDisconnect(_ usbAccessory: AAUSBAccessory)
```

## Parameters

- `usbAccessory`: The USB accessory that disconnected from the system.

<a id="Discussion"></a>

## Discussion

This method is invoked every time a USB accessory, for which the listener received the connect notification, is disconnected from the system.

This method will be invoked on an arbitrary thread.

## See Also

### Protocol methods

- [usbAccessoryDidConnect(\_:)](usbaccessorydidconnect%28__%29.md): The method the framework invokes when a USB accessory connects to the system.

# usbAccessoryDidDisconnect: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework invokes when a USB accessory disconnects from the system.

## Declaration

```objectivec
- (void) usbAccessoryDidDisconnect:(AAUSBAccessory *) usbAccessory;
```

## Parameters

- `usbAccessory`: The USB accessory that disconnected from the system.

<a id="Discussion"></a>

## Discussion

This method is invoked every time a USB accessory, for which the listener received the connect notification, is disconnected from the system.

This method will be invoked on an arbitrary thread.

## See Also

### Protocol methods

- [usbAccessoryDidConnect:](usbaccessorydidconnect%28__%29.md): The method the framework invokes when a USB accessory connects to the system.

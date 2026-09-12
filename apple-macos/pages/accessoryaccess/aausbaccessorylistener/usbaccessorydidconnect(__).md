> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorylistener/usbaccessorydidconnect(_:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorylistener/usbaccessorydidconnect(_:))

# usbAccessoryDidConnect(\_:) (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework invokes when a USB accessory connects to the system.

## Declaration

```swift
optional func usbAccessoryDidConnect(_ usbAccessory: AAUSBAccessory)
```

## Parameters

- `usbAccessory`: The USB accessory that connected to the system.

<a id="Discussion"></a>

## Discussion

This method is invoked every time a USB accessory, that satisfies the matching criteria this listener registered with `AAUSBAccessoryManager` with, is connected to the system.

The framework invokes method on an arbitrary thread.

## See Also

### Protocol methods

- [usbAccessoryDidDisconnect(\_:)](usbaccessorydiddisconnect%28__%29.md): The method the framework invokes when a USB accessory disconnects from the system.

# usbAccessoryDidConnect: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework invokes when a USB accessory connects to the system.

## Declaration

```objectivec
- (void) usbAccessoryDidConnect:(AAUSBAccessory *) usbAccessory;
```

## Parameters

- `usbAccessory`: The USB accessory that connected to the system.

<a id="Discussion"></a>

## Discussion

This method is invoked every time a USB accessory, that satisfies the matching criteria this listener registered with `AAUSBAccessoryManager` with, is connected to the system.

The framework invokes method on an arbitrary thread.

## See Also

### Protocol methods

- [usbAccessoryDidDisconnect:](usbaccessorydiddisconnect%28__%29.md): The method the framework invokes when a USB accessory disconnects from the system.

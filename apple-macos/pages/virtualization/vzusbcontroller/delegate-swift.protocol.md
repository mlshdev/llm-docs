> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbcontroller/delegate-swift.protocol](https://developer.apple.com/documentation/virtualization/vzusbcontroller/delegate-swift.protocol)

# VZUSBController.Delegate (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 27.0+

## Declaration

```swift
protocol Delegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegate object for a VZUSBController.

A class conforming to the VZUSBControllerDelegate protocol can provide methods that get invoked when the USB controller’s state changes.

## Topics

### Instance Methods

- [usbController(\_:usbPassthroughDeviceDidDisconnect:)](delegate-swift.protocol/usbcontroller%28__usbpassthroughdevicediddisconnect_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# VZUSBControllerDelegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 27.0+

## Declaration

```objectivec
@protocol VZUSBControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegate object for a VZUSBController.

A class conforming to the VZUSBControllerDelegate protocol can provide methods that get invoked when the USB controller’s state changes.

## Topics

### Instance Methods

- [usbController:usbPassthroughDeviceDidDisconnect:](delegate-swift.protocol/usbcontroller%28__usbpassthroughdevicediddisconnect_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

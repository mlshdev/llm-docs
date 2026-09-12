> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingactionitem](https://developer.apple.com/documentation/avrouting/avcustomroutingactionitem)

# AVCustomRoutingActionItem (Swift)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents a custom action item to display in a device route picker.

## Declaration

```swift
class AVCustomRoutingActionItem
```

<a id="overview"></a>

## Overview

Use this class to specify supplemental action items to display in the list of discovered routes. Tapping a custom item dismisses the picker and calls the [customRoutingController(\_:didSelect:)](avcustomroutingcontrollerdelegate/customroutingcontroller%28__didselect_%29.md) method of [AVCustomRoutingControllerDelegate](avcustomroutingcontrollerdelegate.md).

## Topics

### Configuring an item

- [type](avcustomroutingactionitem/type.md): A type with an identifier that matches a value in the app’s configuration.
- [overrideTitle](avcustomroutingactionitem/overridetitle.md): A string to use to override the title of the item’s type.

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

### Media routing

- [AVCustomRoutingController](avcustomroutingcontroller.md): An object that manages the connection from a device to a destination.
- [AVCustomRoutingControllerDelegate](avcustomroutingcontrollerdelegate.md): A protocol for delegates of a custom routing controller.
- [AVCustomRoutingEvent](avcustomroutingevent.md): An object that represents an event that occurs on a route.

# AVCustomRoutingActionItem (Objective-C)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents a custom action item to display in a device route picker.

## Declaration

```objectivec
@interface AVCustomRoutingActionItem : NSObject
```

<a id="overview"></a>

## Overview

Use this class to specify supplemental action items to display in the list of discovered routes. Tapping a custom item dismisses the picker and calls the [customRoutingController:didSelectItem:](avcustomroutingcontrollerdelegate/customroutingcontroller%28__didselect_%29.md) method of [AVCustomRoutingControllerDelegate](avcustomroutingcontrollerdelegate.md).

## Topics

### Configuring an item

- [type](avcustomroutingactionitem/type.md): A type with an identifier that matches a value in the app’s configuration.
- [overrideTitle](avcustomroutingactionitem/overridetitle.md): A string to use to override the title of the item’s type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media routing

- [AVCustomRoutingController](avcustomroutingcontroller.md): An object that manages the connection from a device to a destination.
- [AVCustomRoutingControllerDelegate](avcustomroutingcontrollerdelegate.md): A protocol for delegates of a custom routing controller.
- [AVCustomRoutingEvent](avcustomroutingevent.md): An object that represents an event that occurs on a route.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontrollerdelegate](https://developer.apple.com/documentation/avrouting/avcustomroutingcontrollerdelegate)

# AVCustomRoutingControllerDelegate (Swift)

**Framework:** AVRouting  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A protocol for delegates of a custom routing controller.

## Declaration

```swift
protocol AVCustomRoutingControllerDelegate : NSObjectProtocol, Sendable
```

## Topics

### Handling controller events

- [customRoutingController(\_:handle:completionHandler:)](avcustomroutingcontrollerdelegate/customroutingcontroller%28__handle_completionhandler_%29.md): Connects to, or disconnects from, a device when a user requests it in the picker.
- [customRoutingController(\_:eventDidTimeOut:)](avcustomroutingcontrollerdelegate/customroutingcontroller%28__eventdidtimeout_%29.md): Tells the delegate when a routing event times out.
- [customRoutingController(\_:didSelect:)](avcustomroutingcontrollerdelegate/customroutingcontroller%28__didselect_%29.md): Tells the delegate when a user selects a custom item in the route picker.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Media routing

- [AVCustomRoutingController](avcustomroutingcontroller.md): An object that manages the connection from a device to a destination.
- [AVCustomRoutingEvent](avcustomroutingevent.md): An object that represents an event that occurs on a route.
- [AVCustomRoutingActionItem](avcustomroutingactionitem.md): An object that represents a custom action item to display in a device route picker.

# AVCustomRoutingControllerDelegate (Objective-C)

**Framework:** AVRouting  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A protocol for delegates of a custom routing controller.

## Declaration

```objectivec
@protocol AVCustomRoutingControllerDelegate <NSObject>
```

## Topics

### Handling controller events

- [customRoutingController:handleEvent:completionHandler:](avcustomroutingcontrollerdelegate/customroutingcontroller%28__handle_completionhandler_%29.md): Connects to, or disconnects from, a device when a user requests it in the picker.
- [customRoutingController:eventDidTimeOut:](avcustomroutingcontrollerdelegate/customroutingcontroller%28__eventdidtimeout_%29.md): Tells the delegate when a routing event times out.
- [customRoutingController:didSelectItem:](avcustomroutingcontrollerdelegate/customroutingcontroller%28__didselect_%29.md): Tells the delegate when a user selects a custom item in the route picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Media routing

- [AVCustomRoutingController](avcustomroutingcontroller.md): An object that manages the connection from a device to a destination.
- [AVCustomRoutingEvent](avcustomroutingevent.md): An object that represents an event that occurs on a route.
- [AVCustomRoutingActionItem](avcustomroutingactionitem.md): An object that represents a custom action item to display in a device route picker.

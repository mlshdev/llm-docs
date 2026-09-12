> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontrollerdelegate/customroutingcontroller(_:eventdidtimeout:)](https://developer.apple.com/documentation/avrouting/avcustomroutingcontrollerdelegate/customroutingcontroller(_:eventdidtimeout:))

# customRoutingController(\_:eventDidTimeOut:) (Swift)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when a routing event times out.

## Declaration

```swift
optional func customRoutingController(_ controller: AVCustomRoutingController, eventDidTimeOut event: AVCustomRoutingEvent)
```

## Parameters

- `controller`: A custom routing controller.
- `event`: An event that times out.

<a id="Discussion"></a>

## Discussion

Adopt this method to clean up any in-progress connection attempts.

## See Also

### Handling controller events

- [customRoutingController(\_:handle:completionHandler:)](customroutingcontroller%28__handle_completionhandler_%29.md): Connects to, or disconnects from, a device when a user requests it in the picker.
- [customRoutingController(\_:didSelect:)](customroutingcontroller%28__didselect_%29.md): Tells the delegate when a user selects a custom item in the route picker.

# customRoutingController:eventDidTimeOut: (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when a routing event times out.

## Declaration

```objectivec
- (void) customRoutingController:(AVCustomRoutingController *) controller eventDidTimeOut:(AVCustomRoutingEvent *) event;
```

## Parameters

- `controller`: A custom routing controller.
- `event`: An event that times out.

<a id="Discussion"></a>

## Discussion

Adopt this method to clean up any in-progress connection attempts.

## See Also

### Handling controller events

- [customRoutingController:handleEvent:completionHandler:](customroutingcontroller%28__handle_completionhandler_%29.md): Connects to, or disconnects from, a device when a user requests it in the picker.
- [customRoutingController:didSelectItem:](customroutingcontroller%28__didselect_%29.md): Tells the delegate when a user selects a custom item in the route picker.

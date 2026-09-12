> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontrollerdelegate/customroutingcontroller(_:didselect:)](https://developer.apple.com/documentation/avrouting/avcustomroutingcontrollerdelegate/customroutingcontroller(_:didselect:))

# customRoutingController(\_:didSelect:) (Swift)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when a user selects a custom item in the route picker.

## Declaration

```swift
optional func customRoutingController(_ controller: AVCustomRoutingController, didSelect customActionItem: AVCustomRoutingActionItem)
```

## Parameters

- `controller`: A custom routing controller.
- `customActionItem`: The selected action item.

## See Also

### Handling controller events

- [customRoutingController(\_:handle:completionHandler:)](customroutingcontroller%28__handle_completionhandler_%29.md): Connects to, or disconnects from, a device when a user requests it in the picker.
- [customRoutingController(\_:eventDidTimeOut:)](customroutingcontroller%28__eventdidtimeout_%29.md): Tells the delegate when a routing event times out.

# customRoutingController:didSelectItem: (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when a user selects a custom item in the route picker.

## Declaration

```objectivec
- (void) customRoutingController:(AVCustomRoutingController *) controller didSelectItem:(AVCustomRoutingActionItem *) customActionItem;
```

## Parameters

- `controller`: A custom routing controller.
- `customActionItem`: The selected action item.

## See Also

### Handling controller events

- [customRoutingController:handleEvent:completionHandler:](customroutingcontroller%28__handle_completionhandler_%29.md): Connects to, or disconnects from, a device when a user requests it in the picker.
- [customRoutingController:eventDidTimeOut:](customroutingcontroller%28__eventdidtimeout_%29.md): Tells the delegate when a routing event times out.

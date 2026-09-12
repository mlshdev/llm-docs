> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutecontrollerobserver-7p7a5/systemroutecontroller:handleevent:completionhandler:](https://developer.apple.com/documentation/avsystemrouting/avsystemroutecontrollerobserver-7p7a5/systemroutecontroller:handleevent:completionhandler:)

# systemRouteController:handleEvent:completionHandler:

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Connects to, or disconnects from, a device when a user requests it in the picker.

## Declaration

```objectivec
- (void) systemRouteController:(AVSystemRouteController *) controller handleEvent:(AVSystemRouteEvent *) event completionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `controller`: The system routing controller.
- `event`: The routing event to handle.
- `completionHandler`: A completion handler to call after processing the event. Pass `YES` if the event was handled successfully, `NO` otherwise.

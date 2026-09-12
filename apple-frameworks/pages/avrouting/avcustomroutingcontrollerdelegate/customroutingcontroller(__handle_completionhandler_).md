> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontrollerdelegate/customroutingcontroller(_:handle:completionhandler:)](https://developer.apple.com/documentation/avrouting/avcustomroutingcontrollerdelegate/customroutingcontroller(_:handle:completionhandler:))

# customRoutingController(\_:handle:completionHandler:) (Swift)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Connects to, or disconnects from, a device when a user requests it in the picker.

## Declaration

```swift
func customRoutingController(_ controller: AVCustomRoutingController, handle event: AVCustomRoutingEvent, completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
func customRoutingController(_ controller: AVCustomRoutingController, handle event: AVCustomRoutingEvent) async -> Bool
```

## Parameters

- `controller`: A custom routing controller.
- `event`: The routing event to handle.
- `completionHandler`: A completion handler to call after processing the event. Pass [true](https://developer.apple.com/documentation/swift/true) to the completion handler if the activation, reactivation, or deactivation of the route succeeds, and [false](https://developer.apple.com/documentation/swift/false), otherwise.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func customRoutingController(_ controller: AVCustomRoutingController, handle event: AVCustomRoutingEvent) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Handling controller events

- [customRoutingController(\_:eventDidTimeOut:)](customroutingcontroller%28__eventdidtimeout_%29.md): Tells the delegate when a routing event times out.
- [customRoutingController(\_:didSelect:)](customroutingcontroller%28__didselect_%29.md): Tells the delegate when a user selects a custom item in the route picker.

# customRoutingController:handleEvent:completionHandler: (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Connects to, or disconnects from, a device when a user requests it in the picker.

## Declaration

```objectivec
- (void) customRoutingController:(AVCustomRoutingController *) controller handleEvent:(AVCustomRoutingEvent *) event completionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `controller`: A custom routing controller.
- `event`: The routing event to handle.
- `completionHandler`: A completion handler to call after processing the event. Pass [true](https://developer.apple.com/documentation/swift/true) to the completion handler if the activation, reactivation, or deactivation of the route succeeds, and [false](https://developer.apple.com/documentation/swift/false), otherwise.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func customRoutingController(_ controller: AVCustomRoutingController, handle event: AVCustomRoutingEvent) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Handling controller events

- [customRoutingController:eventDidTimeOut:](customroutingcontroller%28__eventdidtimeout_%29.md): Tells the delegate when a routing event times out.
- [customRoutingController:didSelectItem:](customroutingcontroller%28__didselect_%29.md): Tells the delegate when a user selects a custom item in the route picker.

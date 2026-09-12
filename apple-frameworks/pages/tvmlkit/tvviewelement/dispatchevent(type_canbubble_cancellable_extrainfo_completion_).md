> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvviewelement/dispatchevent(type:canbubble:cancellable:extrainfo:completion:)](https://developer.apple.com/documentation/tvmlkit/tvviewelement/dispatchevent(type:canbubble:cancellable:extrainfo:completion:))

# dispatchEvent(type:canBubble:cancellable:extraInfo:completion:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Dispatches an event of a specific type to the JavaScript file.

> Please use SwiftUI or UIKit

## Declaration

```swift
func dispatchEvent(type: TVElementEventType, canBubble: Bool, cancellable isCancellable: Bool, extraInfo: [String : Any]?, completion: (@Sendable (Bool, Bool) -> Void)? = nil)
```

```swift
func dispatchEvent(type: TVElementEventType, canBubble: Bool, cancellable isCancellable: Bool, extraInfo: [String : Any]?) async -> (Bool, Bool)
```

## Parameters

- `type`: The type of TV element to dispatch. For possible values see [TVElementEventType](../tvelementeventtype.md).
- `canBubble`: A flag that indicates an event is dispatched on the target’s parent nodes after the event has been dispatched on the target.
- `isCancellable`: A flag to indicate whether the event can be cancelled.
- `extraInfo`: Extra properties that need to be exposed in the event object.
- `completion`: A block object to be executed when the dispatch call is complete. This block has no return value and takes two Boolean arguments that indicate whether or not the event has been dispatched and whether it was canceled. This parameter may be NULL.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dispatchEvent(type: TVElementEventType, canBubble: Bool, cancellable isCancellable: Bool, extraInfo: [String : Any]?) async -> (Bool, Bool)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to dispatch events from views and view controllers to JavaScript.

## See Also

### Dispatching Events

- [TVElementEventType](../tvelementeventtype.md): Deprecated. The type of event that has been dispatched.
- [dispatchEvent(name:canBubble:cancellable:extraInfo:completion:)](dispatchevent%28name_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches a custom-named event.

# dispatchEventOfType:canBubble:cancellable:extraInfo:completion: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Dispatches an event of a specific type to the JavaScript file.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) dispatchEventOfType:(TVElementEventType) type canBubble:(BOOL) canBubble cancellable:(BOOL) isCancellable extraInfo:(NSDictionary<NSString *,id> *) extraInfo completion:(void (^)(BOOL isDispatched, BOOL isCancelled)) completion;
```

## Parameters

- `type`: The type of TV element to dispatch. For possible values see [TVElementEventType](../tvelementeventtype.md).
- `canBubble`: A flag that indicates an event is dispatched on the target’s parent nodes after the event has been dispatched on the target.
- `isCancellable`: A flag to indicate whether the event can be cancelled.
- `extraInfo`: Extra properties that need to be exposed in the event object.
- `completion`: A block object to be executed when the dispatch call is complete. This block has no return value and takes two Boolean arguments that indicate whether or not the event has been dispatched and whether it was canceled. This parameter may be NULL.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dispatchEvent(type: TVElementEventType, canBubble: Bool, cancellable isCancellable: Bool, extraInfo: [String : Any]?) async -> (Bool, Bool)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to dispatch events from views and view controllers to JavaScript.

## See Also

### Dispatching Events

- [TVElementEventType](../tvelementeventtype.md): Deprecated. The type of event that has been dispatched.
- [dispatchEventWithName:canBubble:cancellable:extraInfo:completion:](dispatchevent%28name_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches a custom-named event.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureslider/setactionqueue:action:](https://developer.apple.com/documentation/avfoundation/avcaptureslider/setactionqueue:action:)

# setActionQueue:action:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Sets the action to perform on the specified dispatch queue when the slider’s value changes.

## Declaration

```objectivec
- (void) setActionQueue:(dispatch_queue_t) actionQueue action:(void (^)(float newValue)) action;
```

## Parameters

- `actionQueue`: A dispatch queue on which to call the action.
- `action`: The action to perform in response to changes to the slider’s value.

<a id="Discussion"></a>

## Discussion

If the action modifies a property of the camera system, the specified dispatch queue must represent the camera system’s same exclusive execution context (see [isSameExclusiveExecutionContext(other:)](https://developer.apple.com/documentation/swift/serialexecutor/issameexclusiveexecutioncontext%28other:%29)).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushregistry/init(queue:)](https://developer.apple.com/documentation/pushkit/pkpushregistry/init(queue:))

# init(queue:) (Swift)

**Framework:** PushKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Creates a push registry with the specified dispatch queue.

## Declaration

```swift
init(queue: dispatch_queue_t?)
```

## Parameters

- `queue`: The dispatch queue on which to execute the delegate methods. It is recommended that you specify a serial queue for this parameter. Specify `nil` to execute the delegate methods on the app’s main queue.

<a id="Return-Value"></a>

## Return Value

A `PKPushRegistry` object that you can use to register for push tokens and use to receive notifications.

# initWithQueue: (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Creates a push registry with the specified dispatch queue.

## Declaration

```objectivec
- (instancetype) initWithQueue:(dispatch_queue_t) queue;
```

## Parameters

- `queue`: The dispatch queue on which to execute the delegate methods. It is recommended that you specify a serial queue for this parameter. Specify `nil` to execute the delegate methods on the app’s main queue.

<a id="Return-Value"></a>

## Return Value

A `PKPushRegistry` object that you can use to register for push tokens and use to receive notifications.

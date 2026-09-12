> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallcontroller/init(queue:)](https://developer.apple.com/documentation/callkit/cxcallcontroller/init(queue:))

# init(queue:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new call controller with a specified queue, which is used for calling completion blocks.

## Declaration

```swift
init(queue: dispatch_queue_t)
```

## Parameters

- `queue`: The queue used for calling completion blocks.

<a id="return-value"></a>

## Return Value

A new call controller initialized with the specified queue.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating New Call Controllers

- [init()](init%28%29.md): Initializes a new call controller with a private, serial queue, which is used for calling completion blocks.

# initWithQueue: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new call controller with a specified queue, which is used for calling completion blocks.

## Declaration

```objectivec
- (instancetype) initWithQueue:(dispatch_queue_t) queue;
```

## Parameters

- `queue`: The queue used for calling completion blocks.

<a id="return-value"></a>

## Return Value

A new call controller initialized with the specified queue.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating New Call Controllers

- [init](init%28%29.md): Initializes a new call controller with a private, serial queue, which is used for calling completion blocks.

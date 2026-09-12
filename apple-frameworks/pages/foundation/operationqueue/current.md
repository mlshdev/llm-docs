> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/current](https://developer.apple.com/documentation/foundation/operationqueue/current)

# current (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the operation queue that launched the current operation.

## Declaration

```swift
class var current: OperationQueue? { get }
```

<a id="return-value"></a>

## Return Value

The operation queue that started the operation or `nil` if the queue could not be determined.

<a id="Discussion"></a>

## Discussion

You can use this method from within a running operation object to get a reference to the operation queue that started it. Calling this method from outside the context of a running operation typically results in `nil` being returned.

## See Also

### Related Documentation

- [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091)

### Accessing Specific Operation Queues

- [main](main.md): Returns the operation queue associated with the main thread.

# currentQueue (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the operation queue that launched the current operation.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSOperationQueue * currentQueue;
```

<a id="return-value"></a>

## Return Value

The operation queue that started the operation or `nil` if the queue could not be determined.

<a id="Discussion"></a>

## Discussion

You can use this method from within a running operation object to get a reference to the operation queue that started it. Calling this method from outside the context of a running operation typically results in `nil` being returned.

## See Also

### Related Documentation

- [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091)

### Accessing Specific Operation Queues

- [mainQueue](main.md): Returns the operation queue associated with the main thread.

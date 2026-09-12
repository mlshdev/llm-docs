> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandqueuedescriptor/type](https://developer.apple.com/documentation/metal/mtliocommandqueuedescriptor/type)

# type (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Configures the queue type for a new input/output command queue.

## Declaration

```swift
var type: MTLIOCommandQueueType { get set }
```

## See Also

### Configuring the input/output command queue

- [priority](priority.md): Configures the priority for a new input/output command queue.
- [maxCommandsInFlight](maxcommandsinflight.md): Sets the largest number of individual commands that an input/output command queue can run at a time.
- [maxCommandBufferCount](maxcommandbuffercount.md): Sets the largest number of outstanding input/output command buffers a queue can have at any point in time.

# type (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Configures the queue type for a new input/output command queue.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLIOCommandQueueType type;
```

## See Also

### Configuring the input/output command queue

- [priority](priority.md): Configures the priority for a new input/output command queue.
- [maxCommandsInFlight](maxcommandsinflight.md): Sets the largest number of individual commands that an input/output command queue can run at a time.
- [maxCommandBufferCount](maxcommandbuffercount.md): Sets the largest number of outstanding input/output command buffers a queue can have at any point in time.

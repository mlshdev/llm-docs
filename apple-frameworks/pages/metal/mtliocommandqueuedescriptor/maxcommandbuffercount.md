> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandqueuedescriptor/maxcommandbuffercount](https://developer.apple.com/documentation/metal/mtliocommandqueuedescriptor/maxcommandbuffercount)

# maxCommandBufferCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the largest number of outstanding input/output command buffers a queue can have at any point in time.

## Declaration

```swift
var maxCommandBufferCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

The input/output command buffers that count against this limit are those that are currently executing in a queue or waiting to execute. The command buffers that have finished executing no longer count against this limit.

## See Also

### Configuring the input/output command queue

- [priority](priority.md): Configures the priority for a new input/output command queue.
- [type](type.md): Configures the queue type for a new input/output command queue.
- [maxCommandsInFlight](maxcommandsinflight.md): Sets the largest number of individual commands that an input/output command queue can run at a time.

# maxCommandBufferCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the largest number of outstanding input/output command buffers a queue can have at any point in time.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxCommandBufferCount;
```

<a id="discussion"></a>

## Discussion

The input/output command buffers that count against this limit are those that are currently executing in a queue or waiting to execute. The command buffers that have finished executing no longer count against this limit.

## See Also

### Configuring the input/output command queue

- [priority](priority.md): Configures the priority for a new input/output command queue.
- [type](type.md): Configures the queue type for a new input/output command queue.
- [maxCommandsInFlight](maxcommandsinflight.md): Sets the largest number of individual commands that an input/output command queue can run at a time.

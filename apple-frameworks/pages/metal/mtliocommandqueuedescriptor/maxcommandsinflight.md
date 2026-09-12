> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandqueuedescriptor/maxcommandsinflight](https://developer.apple.com/documentation/metal/mtliocommandqueuedescriptor/maxcommandsinflight)

# maxCommandsInFlight (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the largest number of individual commands that an input/output command queue can run at a time.

## Declaration

```swift
var maxCommandsInFlight: Int { get set }
```

<a id="discussion"></a>

## Discussion

Set to `0` to instruct Metal to select an appropriate value for you — based on the system’s available memory.

## See Also

### Configuring the input/output command queue

- [priority](priority.md): Configures the priority for a new input/output command queue.
- [type](type.md): Configures the queue type for a new input/output command queue.
- [maxCommandBufferCount](maxcommandbuffercount.md): Sets the largest number of outstanding input/output command buffers a queue can have at any point in time.

# maxCommandsInFlight (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the largest number of individual commands that an input/output command queue can run at a time.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxCommandsInFlight;
```

<a id="discussion"></a>

## Discussion

Set to `0` to instruct Metal to select an appropriate value for you — based on the system’s available memory.

## See Also

### Configuring the input/output command queue

- [priority](priority.md): Configures the priority for a new input/output command queue.
- [type](type.md): Configures the queue type for a new input/output command queue.
- [maxCommandBufferCount](maxcommandbuffercount.md): Sets the largest number of outstanding input/output command buffers a queue can have at any point in time.

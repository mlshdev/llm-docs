> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/barrier(execute:)](https://developer.apple.com/documentation/dispatch/dispatchio/barrier(execute:))

# barrier(execute:) (Swift)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Schedules a barrier operation on the specified channel.

## Declaration

```swift
func barrier(execute barrier: @escaping () -> Void)
```

## Parameters

- `barrier`: The block to execute when all previously scheduled operations on the channel have completed.

<a id="Discussion"></a>

## Discussion

A barrier operation is a way to ensure that no new channel-related operations is executed until all previous operations have completed and the specified `barrier` block has been executed. The barrier operation applies to the channel’s file descriptor and not to a specific channel. In other words, if multiple channels are associated with the same file descriptor, a barrier operation scheduled on any of the channels acts as a barrier across all of the channels. All previously scheduled operations on any of those channels must complete before the barrier block is executed.

While the barrier block is running, it may safely operate on the channel’s underlying file descriptor using `fsync`, `lseek`, and similar functions, but the block must not close the file descriptor.

# dispatch_io_barrier (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Schedules a barrier operation on the specified channel.

## Declaration

```objectivec
extern void dispatch_io_barrier(dispatch_io_t channel, dispatch_block_t barrier);
```

## Parameters

- `channel`: The channel on which you want to schedule the barrier.
- `barrier`: The block to execute when all previously scheduled operations on the channel have completed.

<a id="Discussion"></a>

## Discussion

A barrier operation is a way to ensure that no new channel-related operations is executed until all previous operations have completed and the specified `barrier` block has been executed. The barrier operation applies to the channel’s file descriptor and not to a specific channel. In other words, if multiple channels are associated with the same file descriptor, a barrier operation scheduled on any of the channels acts as a barrier across all of the channels. All previously scheduled operations on any of those channels must complete before the barrier block is executed.

While the barrier block is running, it may safely operate on the channel’s underlying file descriptor using `fsync`, `lseek`, and similar functions, but the block must not close the file descriptor.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/kernelendtime](https://developer.apple.com/documentation/metal/mtlcommandbuffer/kernelendtime)

# kernelEndTime (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.0+

The host time, in seconds, when the CPU finishes scheduling the command buffer.

## Declaration

```swift
var kernelEndTime: CFTimeInterval { get }
```

<a id="discussion"></a>

## Discussion

You can calculate how much time the kernel spends scheduling a command buffer by subtracting [kernelStartTime](kernelstarttime.md) from this value.

The kernel start and end times remain `0.0` until the GPU driver (on the CPU) schedules the command buffer to run on the GPU. Apps typically use these values after the [waitUntilScheduled()](waituntilscheduled%28%29.md) method returns, or within a completion handler (see [addScheduledHandler(\_:)](addscheduledhandler%28__%29.md) and [addCompletedHandler(\_:)](addcompletedhandler%28__%29.md)).

## See Also

### Checking scheduling times on the CPU

- [kernelStartTime](kernelstarttime.md): The host time, in seconds, when the CPU begins to schedule the command buffer.

# kernelEndTime (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.0+

The host time, in seconds, when the CPU finishes scheduling the command buffer.

## Declaration

```objectivec
@property (readonly) CFTimeInterval kernelEndTime;
```

<a id="discussion"></a>

## Discussion

You can calculate how much time the kernel spends scheduling a command buffer by subtracting [kernelStartTime](kernelstarttime.md) from this value.

The kernel start and end times remain `0.0` until the GPU driver (on the CPU) schedules the command buffer to run on the GPU. Apps typically use these values after the [waitUntilScheduled](waituntilscheduled%28%29.md) method returns, or within a completion handler (see [addScheduledHandler:](addscheduledhandler%28__%29.md) and [addCompletedHandler:](addcompletedhandler%28__%29.md)).

## See Also

### Checking scheduling times on the CPU

- [kernelStartTime](kernelstarttime.md): The host time, in seconds, when the CPU begins to schedule the command buffer.

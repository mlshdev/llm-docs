> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/gpuendtime](https://developer.apple.com/documentation/metal/mtlcommandbuffer/gpuendtime)

# gpuEndTime (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.0+

The host time, in seconds, when the GPU finishes execution of the command buffer.

## Declaration

```swift
var gpuEndTime: CFTimeInterval { get }
```

<a id="discussion"></a>

## Discussion

You can calculate how much time the GPU spends running a command buffer by subtracting [gpuStartTime](gpustarttime.md) from this value. Both values are relative to system mach time.

The GPU start and end times remain `0.0` until the GPU finishes running the command buffer. Check this value after the [waitUntilCompleted()](waituntilcompleted%28%29.md) method returns, or within a completion handler passed to the [addCompletedHandler(\_:)](addcompletedhandler%28__%29.md) method.

## See Also

### Checking execution times on the GPU

- [gpuStartTime](gpustarttime.md): The host time, in seconds, when the GPU starts command buffer execution.

# GPUEndTime (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.0+

The host time, in seconds, when the GPU finishes execution of the command buffer.

## Declaration

```objectivec
@property (readonly) CFTimeInterval GPUEndTime;
```

<a id="discussion"></a>

## Discussion

You can calculate how much time the GPU spends running a command buffer by subtracting [GPUStartTime](gpustarttime.md) from this value. Both values are relative to system mach time.

The GPU start and end times remain `0.0` until the GPU finishes running the command buffer. Check this value after the [waitUntilCompleted](waituntilcompleted%28%29.md) method returns, or within a completion handler passed to the [addCompletedHandler:](addcompletedhandler%28__%29.md) method.

## See Also

### Checking execution times on the GPU

- [GPUStartTime](gpustarttime.md): The host time, in seconds, when the GPU starts command buffer execution.

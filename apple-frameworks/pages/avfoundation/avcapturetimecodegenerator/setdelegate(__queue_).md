> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

## Declaration

```swift
func setDelegate(_ delegate: (any AVCaptureTimecodeGeneratorDelegate)?, queue callbackQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: An object conforming to the [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md) protocol.
- `callbackQueue`: The dispatch queue on which the delegate methods are invoked. The `callbackQueue` parameter may not be `nil`, except when setting the [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md) to `nil`, otherwise [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md) throws an `NSInvalidArgumentException`.

<a id="discussion"></a>

## Discussion

Use this method to configure a delegate that handles timecode updates. The specified `queue` ensures thread-safe invocation of delegate methods.

## See Also

### Configuring the generator

- [synchronizationTimeout](synchronizationtimeout.md): The maximum time interval allowed for source synchronization attempts before timing out.
- [timecodeAlignmentOffset](timecodealignmentoffset.md): The time offset, in seconds, applied to the generated timecode.
- [timecodeFrameDuration](timecodeframeduration.md): The frame duration that the generator will use to generate timecodes.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

## Declaration

```objectivec
- (void) setDelegate:(id<AVCaptureTimecodeGeneratorDelegate>) delegate queue:(dispatch_queue_t) callbackQueue;
```

## Parameters

- `delegate`: An object conforming to the [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md) protocol.
- `callbackQueue`: The dispatch queue on which the delegate methods are invoked. The `callbackQueue` parameter may not be `nil`, except when setting the [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md) to `nil`, otherwise [setDelegate:queue:](setdelegate%28__queue_%29.md) throws an `NSInvalidArgumentException`.

<a id="discussion"></a>

## Discussion

Use this method to configure a delegate that handles timecode updates. The specified `queue` ensures thread-safe invocation of delegate methods.

## See Also

### Configuring the generator

- [synchronizationTimeout](synchronizationtimeout.md): The maximum time interval allowed for source synchronization attempts before timing out.
- [timecodeAlignmentOffset](timecodealignmentoffset.md): The time offset, in seconds, applied to the generated timecode.
- [timecodeFrameDuration](timecodeframeduration.md): The frame duration that the generator will use to generate timecodes.

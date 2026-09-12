> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/synchronizationtimeout](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/synchronizationtimeout)

# synchronizationTimeout (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The maximum time interval allowed for source synchronization attempts before timing out.

## Declaration

```swift
var synchronizationTimeout: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

This property specifies the duration, in seconds, that the [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) will attempt to synchronize with a timecode source before timing out if synchronization cannot be achieved. If this threshold is exceeded, the synchronization status updates to reflect a timeout, and your [timecodeGenerator(\_:transitionedTo:for:)](../avcapturetimecodegeneratordelegate/timecodegenerator%28__transitionedto_for_%29.md) delegate method fires, informing you of the event. The default value is 15 seconds.

## See Also

### Configuring the generator

- [timecodeAlignmentOffset](timecodealignmentoffset.md): The time offset, in seconds, applied to the generated timecode.
- [timecodeFrameDuration](timecodeframeduration.md): The frame duration that the generator will use to generate timecodes.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

# synchronizationTimeout (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The maximum time interval allowed for source synchronization attempts before timing out.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval synchronizationTimeout;
```

<a id="discussion"></a>

## Discussion

This property specifies the duration, in seconds, that the [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) will attempt to synchronize with a timecode source before timing out if synchronization cannot be achieved. If this threshold is exceeded, the synchronization status updates to reflect a timeout, and your [timecodeGenerator:transitionedToSynchronizationStatus:forSource:](../avcapturetimecodegeneratordelegate/timecodegenerator%28__transitionedto_for_%29.md) delegate method fires, informing you of the event. The default value is 15 seconds.

## See Also

### Configuring the generator

- [timecodeAlignmentOffset](timecodealignmentoffset.md): The time offset, in seconds, applied to the generated timecode.
- [timecodeFrameDuration](timecodeframeduration.md): The frame duration that the generator will use to generate timecodes.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

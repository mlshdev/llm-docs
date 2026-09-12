> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/timecodealignmentoffset](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/timecodealignmentoffset)

# timecodeAlignmentOffset (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The time offset, in seconds, applied to the generated timecode.

## Declaration

```swift
var timecodeAlignmentOffset: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

This offset allows fine-tuning of time alignment for synchronization with external sources or to accommodate any intentional delay. The default value is 0 seconds.

## See Also

### Configuring the generator

- [synchronizationTimeout](synchronizationtimeout.md): The maximum time interval allowed for source synchronization attempts before timing out.
- [timecodeFrameDuration](timecodeframeduration.md): The frame duration that the generator will use to generate timecodes.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

# timecodeAlignmentOffset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The time offset, in seconds, applied to the generated timecode.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval timecodeAlignmentOffset;
```

<a id="discussion"></a>

## Discussion

This offset allows fine-tuning of time alignment for synchronization with external sources or to accommodate any intentional delay. The default value is 0 seconds.

## See Also

### Configuring the generator

- [synchronizationTimeout](synchronizationtimeout.md): The maximum time interval allowed for source synchronization attempts before timing out.
- [timecodeFrameDuration](timecodeframeduration.md): The frame duration that the generator will use to generate timecodes.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

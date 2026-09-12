> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/timecodeframeduration](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/timecodeframeduration)

# timecodeFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The frame duration that the generator will use to generate timecodes.

## Declaration

```swift
var timecodeFrameDuration: CMTime { get set }
```

## See Also

### Configuring the generator

- [synchronizationTimeout](synchronizationtimeout.md): The maximum time interval allowed for source synchronization attempts before timing out.
- [timecodeAlignmentOffset](timecodealignmentoffset.md): The time offset, in seconds, applied to the generated timecode.
- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

# timecodeFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The frame duration that the generator will use to generate timecodes.

## Declaration

```objectivec
@property (nonatomic) CMTime timecodeFrameDuration;
```

## See Also

### Configuring the generator

- [synchronizationTimeout](synchronizationtimeout.md): The maximum time interval allowed for source synchronization attempts before timing out.
- [timecodeAlignmentOffset](timecodealignmentoffset.md): The time offset, in seconds, applied to the generated timecode.
- [setDelegate:queue:](setdelegate%28__queue_%29.md): Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

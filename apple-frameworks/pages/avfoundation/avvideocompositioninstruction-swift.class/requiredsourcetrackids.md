> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class/requiredsourcetrackids](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class/requiredsourcetrackids)

# requiredSourceTrackIDs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The identifiers of source video tracks that the compositor requires to compose frames for the instruction.

## Declaration

```swift
var requiredSourceTrackIDs: [NSValue] { get }
```

## See Also

### Identifying source tracks

- [requiredSourceSampleDataTrackIDs](requiredsourcesampledatatrackids.md): The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.
- [passthroughTrackID](passthroughtrackid.md): The track identifier from an instruction source frame.

# requiredSourceTrackIDs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The identifiers of source video tracks that the compositor requires to compose frames for the instruction.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSValue *> * requiredSourceTrackIDs;
```

## See Also

### Identifying source tracks

- [requiredSourceSampleDataTrackIDs](requiredsourcesampledatatrackids.md): The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.
- [passthroughTrackID](passthroughtrackid.md): The track identifier from an instruction source frame.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class/requiredsourcesampledatatrackids](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class/requiredsourcesampledatatrackids)

# requiredSourceSampleDataTrackIDs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.

## Declaration

```swift
var requiredSourceSampleDataTrackIDs: [NSNumber] { get }
```

## See Also

### Identifying source tracks

- [requiredSourceTrackIDs](requiredsourcetrackids.md): The identifiers of source video tracks that the compositor requires to compose frames for the instruction.
- [passthroughTrackID](passthroughtrackid.md): The track identifier from an instruction source frame.

# requiredSourceSampleDataTrackIDs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * requiredSourceSampleDataTrackIDs;
```

## See Also

### Identifying source tracks

- [requiredSourceTrackIDs](requiredsourcetrackids.md): The identifiers of source video tracks that the compositor requires to compose frames for the instruction.
- [passthroughTrackID](passthroughtrackid.md): The track identifier from an instruction source frame.

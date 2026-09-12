> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class/passthroughtrackid](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class/passthroughtrackid)

# passthroughTrackID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The track identifier from an instruction source frame.

## Declaration

```swift
var passthroughTrackID: CMPersistentTrackID { get }
```

<a id="Discussion"></a>

## Discussion

If the video composition result is one of the source frames for the duration of the instruction, this property returns the corresponding track ID. The compositor won’t be run for the duration of the instruction and the proper source frame will be used instead. The value of this property is computed from the layer instructions

## See Also

### Identifying source tracks

- [requiredSourceTrackIDs](requiredsourcetrackids.md): The identifiers of source video tracks that the compositor requires to compose frames for the instruction.
- [requiredSourceSampleDataTrackIDs](requiredsourcesampledatatrackids.md): The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.

# passthroughTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The track identifier from an instruction source frame.

## Declaration

```objectivec
@property (nonatomic, readonly) CMPersistentTrackID passthroughTrackID;
```

<a id="Discussion"></a>

## Discussion

If the video composition result is one of the source frames for the duration of the instruction, this property returns the corresponding track ID. The compositor won’t be run for the duration of the instruction and the proper source frame will be used instead. The value of this property is computed from the layer instructions

## See Also

### Identifying source tracks

- [requiredSourceTrackIDs](requiredsourcetrackids.md): The identifiers of source video tracks that the compositor requires to compose frames for the instruction.
- [requiredSourceSampleDataTrackIDs](requiredsourcesampledatatrackids.md): The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.

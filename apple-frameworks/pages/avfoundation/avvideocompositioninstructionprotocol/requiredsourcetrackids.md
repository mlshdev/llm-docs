> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstructionprotocol/requiredsourcetrackids](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstructionprotocol/requiredsourcetrackids)

# requiredSourceTrackIDs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The identifiers of the video tracks the instruction requires to compose frames.

## Declaration

```swift
var requiredSourceTrackIDs: [NSValue]? { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, the instruction requires all source tracks for composition.

## See Also

### Getting track ID settings

- [passthroughTrackID](passthroughtrackid.md): An identifier of a source track to pass through without compositing.
- [requiredSourceSampleDataTrackIDs](requiredsourcesampledatatrackids.md): The identifiers of the sample data tracks the instruction requires to compose frames.

# requiredSourceTrackIDs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The identifiers of the video tracks the instruction requires to compose frames.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSValue *> * requiredSourceTrackIDs;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, the instruction requires all source tracks for composition.

## See Also

### Getting track ID settings

- [passthroughTrackID](passthroughtrackid.md): An identifier of a source track to pass through without compositing.
- [requiredSourceSampleDataTrackIDs](requiredsourcesampledatatrackids.md): The identifiers of the sample data tracks the instruction requires to compose frames.

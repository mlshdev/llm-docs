> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstructionprotocol/requiredsourcesampledatatrackids](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstructionprotocol/requiredsourcesampledatatrackids)

# requiredSourceSampleDataTrackIDs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The identifiers of the sample data tracks the instruction requires to compose frames.

## Declaration

```swift
optional var requiredSourceSampleDataTrackIDs: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

An empty array indicates the instruction requires no sample data.

## See Also

### Getting track ID settings

- [passthroughTrackID](passthroughtrackid.md): An identifier of a source track to pass through without compositing.
- [requiredSourceTrackIDs](requiredsourcetrackids.md): The identifiers of the video tracks the instruction requires to compose frames.

# requiredSourceSampleDataTrackIDs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The identifiers of the sample data tracks the instruction requires to compose frames.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * requiredSourceSampleDataTrackIDs;
```

<a id="Discussion"></a>

## Discussion

An empty array indicates the instruction requires no sample data.

## See Also

### Getting track ID settings

- [passthroughTrackID](passthroughtrackid.md): An identifier of a source track to pass through without compositing.
- [requiredSourceTrackIDs](requiredsourcetrackids.md): The identifiers of the video tracks the instruction requires to compose frames.

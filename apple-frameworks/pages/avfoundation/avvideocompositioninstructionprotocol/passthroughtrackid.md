> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstructionprotocol/passthroughtrackid](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstructionprotocol/passthroughtrackid)

# passthroughTrackID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An identifier of a source track to pass through without compositing.

## Declaration

```swift
var passthroughTrackID: CMPersistentTrackID { get }
```

<a id="Discussion"></a>

## Discussion

If an instruction indicates to pass through a source frame without compositing, this property returns the corresponding track identifier. The compositor isn’t run for the duration of the instruction, and instead passes the source frame through to the output. The system automatically matches the required dimensions, clean aperture, and pixel aspect ratio values of the source buffer.

## See Also

### Getting track ID settings

- [requiredSourceTrackIDs](requiredsourcetrackids.md): The identifiers of the video tracks the instruction requires to compose frames.
- [requiredSourceSampleDataTrackIDs](requiredsourcesampledatatrackids.md): The identifiers of the sample data tracks the instruction requires to compose frames.

# passthroughTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An identifier of a source track to pass through without compositing.

## Declaration

```objectivec
@property (nonatomic, readonly) CMPersistentTrackID passthroughTrackID;
```

<a id="Discussion"></a>

## Discussion

If an instruction indicates to pass through a source frame without compositing, this property returns the corresponding track identifier. The compositor isn’t run for the duration of the instruction, and instead passes the source frame through to the output. The system automatically matches the required dimensions, clean aperture, and pixel aspect ratio values of the source buffer.

## See Also

### Getting track ID settings

- [requiredSourceTrackIDs](requiredsourcetrackids.md): The identifiers of the video tracks the instruction requires to compose frames.
- [requiredSourceSampleDataTrackIDs](requiredsourcesampledatatrackids.md): The identifiers of the sample data tracks the instruction requires to compose frames.

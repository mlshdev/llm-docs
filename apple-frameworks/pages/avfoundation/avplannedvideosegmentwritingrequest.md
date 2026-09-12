> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedvideosegmentwritingrequest](https://developer.apple.com/documentation/avfoundation/avplannedvideosegmentwritingrequest)

# AVPlannedVideoSegmentWritingRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.

## Declaration

```swift
class AVPlannedVideoSegmentWritingRequest
```

<a id="overview"></a>

## Overview

The client should respond to this request by writing the specified time range of data to a movie file at the specified segmentFileOutputURL, with start PTS zero. The client’s writing work may be completed asynchronously. If it completes successfully, it must call the `-finish` method on the request object. If writing the segment fails, it must call the `-finishWithError:` method on the request object.

## Topics

### Inspecting the request

- [frameCount](avplannedvideosegmentwritingrequest/framecount.md): The number of frames in this planned video segment. This is provided for convenience, and is the same value that was configured for the segment in AVPlannedVideoSegmentConfiguration.

### Creating resumable compression sessions

- [createResumableCompressionSession(width:height:codecType:encoderSpecification:sourceImageBufferAttributes:outputHandler:)](avplannedvideosegmentwritingrequest/createresumablecompressionsession%28width_height_codectype_encoderspecification_sourceimagebufferattributes_outputhandler_%29.md): Helper function to create a VTCompressionSession that restores the video encoder state persisted at the end of the previous segment.

### Creating resumable writer inputs

- [makeResumableWriterInput(for:outputSettings:sourceFormatHint:)](avplannedvideosegmentwritingrequest/makeresumablewriterinput%28for_outputsettings_sourceformathint_%29.md): Helper function that returns a minimally configured AVAssetWriterInput object for writing the current segment.

## Relationships

### Inherits From

- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.

# AVPlannedVideoSegmentWritingRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.

## Declaration

```objectivec
@interface AVPlannedVideoSegmentWritingRequest : AVPlannedSegmentWritingRequest
```

<a id="overview"></a>

## Overview

The client should respond to this request by writing the specified time range of data to a movie file at the specified segmentFileOutputURL, with start PTS zero. The client’s writing work may be completed asynchronously. If it completes successfully, it must call the `-finish` method on the request object. If writing the segment fails, it must call the `-finishWithError:` method on the request object.

## Topics

### Inspecting the request

- [frameCount](avplannedvideosegmentwritingrequest/framecount.md): The number of frames in this planned video segment. This is provided for convenience, and is the same value that was configured for the segment in AVPlannedVideoSegmentConfiguration.

### Creating resumable compression sessions

- [createResumableCompressionSessionWithAllocator:width:height:codecType:encoderSpecification:sourceImageBufferAttributes:compressedDataAllocator:outputCallback:outputCallbackRefCon:returningError:](avplannedvideosegmentwritingrequest/createresumablecompressionsessionwithallocator_width_height_codectype_encoderspecification_sourceimagebufferattributes_compresseddataallocator_outputcallback_outputcallbackrefcon_r~b64f755b.md): Helper function to create a VTCompressionSession that restores the video encoder state persisted at the end of the previous segment.

### Creating resumable writer inputs

- [resumableAssetWriterInputWithMediaType:outputSettings:sourceFormatHint:returningError:](avplannedvideosegmentwritingrequest/resumableassetwriterinputwithmediatype_outputsettings_sourceformathint_returningerror_.md): Helper function that returns a minimally configured AVAssetWriterInput object for writing the current segment. The final video encoder state from the previous segment will be restored before writing starts.

## Relationships

### Inherits From

- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.

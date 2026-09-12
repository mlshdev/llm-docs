> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/startsession(atsourcetime:)](https://developer.apple.com/documentation/avfoundation/avassetwriter/startsession(atsourcetime:))

# startSession(atSourceTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Starts an asset-writing session.

## Declaration

```swift
func startSession(atSourceTime startTime: CMTime)
```

## Parameters

- `startTime`: The starting asset time for the sample-writing session, in the timeline of the source samples.

<a id="Discussion"></a>

## Discussion

You must call this method after you call [startWriting()](startwriting%28%29.md), but before you append sample data to asset writer inputs.

Each writing session has a start time that, where allowed by the file format you’re writing, defines the mapping from the timeline of source samples to the timeline of the written file. In the case of the QuickTime movie file format, the first session begins at movie time `0`, so a sample you append with timestamp `T` plays at movie time (`T-startTime`). The writer adds samples with timestamps earlier than the start time to the output file, but they don’t display during playback. If the earliest sample for an input has a timestamp later than the start time, the system inserts an empty edit to preserve synchronization between tracks of the output asset.

To end a session, call [endSession(atSourceTime:)](endsession%28atsourcetime_%29.md)or [finishWriting(completionHandler:)](finishwriting%28completionhandler_%29.md)

> **Note**

>  An asset writer doesn’t support multiple sample-writing sessions. It’s an error to call [startSession(atSourceTime:)](startsession%28atsourcetime_%29.md) a second time after calling [endSession(atSourceTime:)](endsession%28atsourcetime_%29.md).

## See Also

### Managing writing sessions

- [start()](start%28%29.md): Prepares the writer to write media data to its output file.
- [startWriting()](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [endSession(atSourceTime:)](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWriting(completionHandler:)](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [cancelWriting()](cancelwriting%28%29.md): Cancels the creation of the output file.
- [finishWriting()](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

# startSessionAtSourceTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Starts an asset-writing session.

## Declaration

```objectivec
- (void) startSessionAtSourceTime:(CMTime) startTime;
```

## Parameters

- `startTime`: The starting asset time for the sample-writing session, in the timeline of the source samples.

<a id="Discussion"></a>

## Discussion

You must call this method after you call [startWriting](startwriting%28%29.md), but before you append sample data to asset writer inputs.

Each writing session has a start time that, where allowed by the file format you’re writing, defines the mapping from the timeline of source samples to the timeline of the written file. In the case of the QuickTime movie file format, the first session begins at movie time `0`, so a sample you append with timestamp `T` plays at movie time (`T-startTime`). The writer adds samples with timestamps earlier than the start time to the output file, but they don’t display during playback. If the earliest sample for an input has a timestamp later than the start time, the system inserts an empty edit to preserve synchronization between tracks of the output asset.

To end a session, call [endSessionAtSourceTime:](endsession%28atsourcetime_%29.md)or [finishWritingWithCompletionHandler:](finishwriting%28completionhandler_%29.md)

> **Note**

>  An asset writer doesn’t support multiple sample-writing sessions. It’s an error to call [startSessionAtSourceTime:](startsession%28atsourcetime_%29.md) a second time after calling [endSessionAtSourceTime:](endsession%28atsourcetime_%29.md).

## See Also

### Managing writing sessions

- [startWriting](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [endSessionAtSourceTime:](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWritingWithCompletionHandler:](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [cancelWriting](cancelwriting%28%29.md): Cancels the creation of the output file.
- [finishWriting](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/cancelwriting()](https://developer.apple.com/documentation/avfoundation/avassetwriter/cancelwriting())

# cancelWriting() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cancels the creation of the output file.

## Declaration

```swift
func cancelWriting()
```

<a id="Discussion"></a>

## Discussion

If the asset writer is in [AVAssetWriter.Status.failed](status-swift.enum/failed.md) or [AVAssetWriter.Status.completed](status-swift.enum/completed.md) state, calling this method has no effect. Otherwise, invoking it blocks the calling thread until the asset writer finishes canceling the writing session.

If the asset writer created an output file during the writing process, calling this method deletes the file.

## See Also

### Managing writing sessions

- [start()](start%28%29.md): Prepares the writer to write media data to its output file.
- [startWriting()](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [startSession(atSourceTime:)](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSession(atSourceTime:)](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWriting(completionHandler:)](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [finishWriting()](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

# cancelWriting (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cancels the creation of the output file.

## Declaration

```objectivec
- (void) cancelWriting;
```

<a id="Discussion"></a>

## Discussion

If the asset writer is in [AVAssetWriterStatusFailed](status-swift.enum/failed.md) or [AVAssetWriterStatusCompleted](status-swift.enum/completed.md) state, calling this method has no effect. Otherwise, invoking it blocks the calling thread until the asset writer finishes canceling the writing session.

If the asset writer created an output file during the writing process, calling this method deletes the file.

## See Also

### Managing writing sessions

- [startWriting](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [startSessionAtSourceTime:](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSessionAtSourceTime:](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWritingWithCompletionHandler:](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [finishWriting](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

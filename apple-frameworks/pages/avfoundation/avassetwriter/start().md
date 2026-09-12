> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/start()](https://developer.apple.com/documentation/avfoundation/avassetwriter/start())

# start()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Prepares the writer to write media data to its output file.

## Declaration

```swift
func start() throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if reading fails to start.

## See Also

### Managing writing sessions

- [startWriting()](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [startSession(atSourceTime:)](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSession(atSourceTime:)](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWriting(completionHandler:)](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [cancelWriting()](cancelwriting%28%29.md): Cancels the creation of the output file.
- [finishWriting()](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/finishwriting()](https://developer.apple.com/documentation/avfoundation/avassetwriter/finishwriting())

# finishWriting() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 9.0)

Completes the writing of the output file.

> Use [finishWriting(completionHandler:)](finishwriting%28completionhandler_%29.md) instead.

## Declaration

```swift
func finishWriting() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if writing can be finished, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing writing sessions

- [start()](start%28%29.md): Prepares the writer to write media data to its output file.
- [startWriting()](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [startSession(atSourceTime:)](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSession(atSourceTime:)](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWriting(completionHandler:)](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [cancelWriting()](cancelwriting%28%29.md): Cancels the creation of the output file.

# finishWriting (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 6.0) · iPadOS 4.1+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0)

Completes the writing of the output file.

> Use [finishWritingWithCompletionHandler:](finishwriting%28completionhandler_%29.md) instead.

## Declaration

```objectivec
- (BOOL) finishWriting;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if writing can be finished, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing writing sessions

- [startWriting](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [startSessionAtSourceTime:](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSessionAtSourceTime:](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWritingWithCompletionHandler:](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [cancelWriting](cancelwriting%28%29.md): Cancels the creation of the output file.

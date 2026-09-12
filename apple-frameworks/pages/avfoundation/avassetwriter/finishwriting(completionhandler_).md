> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/finishwriting(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassetwriter/finishwriting(completionhandler:))

# finishWriting(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Marks all unfinished inputs as finished and completes the writing of the output file.

## Declaration

```swift
func finishWriting(completionHandler handler: @escaping @Sendable () -> Void)
```

```swift
func finishWriting() async
```

## Parameters

- `handler`: A completion handler the system invokes when it finishes writing. Determine the success or failure of the writing session by querying the asset writer’s [status](status-swift.property.md) property value.

<a id="Discussion"></a>

## Discussion

To ensure the asset writer finishes writing all samples, call this method only after all calls to [append(\_:)](../avassetwriterinput/append%28__%29.md) or [append(\_:withPresentationTime:)](../avassetwriterinputpixelbufferadaptor/append%28__withpresentationtime_%29.md) return.

## See Also

### Managing writing sessions

- [start()](start%28%29.md): Prepares the writer to write media data to its output file.
- [startWriting()](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [startSession(atSourceTime:)](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSession(atSourceTime:)](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [cancelWriting()](cancelwriting%28%29.md): Cancels the creation of the output file.
- [finishWriting()](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

# finishWritingWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Marks all unfinished inputs as finished and completes the writing of the output file.

## Declaration

```objectivec
- (void) finishWritingWithCompletionHandler:(void (^)()) handler;
```

## Parameters

- `handler`: A completion handler the system invokes when it finishes writing. Determine the success or failure of the writing session by querying the asset writer’s [status](status-swift.property.md) property value.

<a id="Discussion"></a>

## Discussion

To ensure the asset writer finishes writing all samples, call this method only after all calls to [appendSampleBuffer:](../avassetwriterinput/append%28__%29.md) or [appendPixelBuffer:withPresentationTime:](../avassetwriterinputpixelbufferadaptor/append%28__withpresentationtime_%29.md) return.

## See Also

### Managing writing sessions

- [startWriting](startwriting%28%29.md): Deprecated. Tells the writer to start writing its output.
- [startSessionAtSourceTime:](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSessionAtSourceTime:](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [cancelWriting](cancelwriting%28%29.md): Cancels the creation of the output file.
- [finishWriting](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

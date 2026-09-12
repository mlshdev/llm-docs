> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/startwriting()](https://developer.apple.com/documentation/avfoundation/avassetwriter/startwriting())

# startWriting() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the writer to start writing its output.

> Use start() instead

## Declaration

```swift
func startWriting() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if writing starts successfully; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You must call this method after you configure the writer and add its inputs to prepare the object to write data. After you call this method, your app can start writing sessions by calling [startSession(atSourceTime:)](startsession%28atsourcetime_%29.md) and can write media samples using the methods that the asset writer’s inputs provide.

If writing fails to start, this method returns [false](https://developer.apple.com/documentation/swift/false). In this case, check the values of the [status](status-swift.property.md) and [error](error.md) properties to determine the reason for the failure.

## See Also

### Managing writing sessions

- [start()](start%28%29.md): Prepares the writer to write media data to its output file.
- [startSession(atSourceTime:)](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSession(atSourceTime:)](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWriting(completionHandler:)](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [cancelWriting()](cancelwriting%28%29.md): Cancels the creation of the output file.
- [finishWriting()](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

# startWriting (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Tells the writer to start writing its output.

## Declaration

```objectivec
- (BOOL) startWriting;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if writing starts successfully; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You must call this method after you configure the writer and add its inputs to prepare the object to write data. After you call this method, your app can start writing sessions by calling [startSessionAtSourceTime:](startsession%28atsourcetime_%29.md) and can write media samples using the methods that the asset writer’s inputs provide.

If writing fails to start, this method returns [false](https://developer.apple.com/documentation/swift/false). In this case, check the values of the [status](status-swift.property.md) and [error](error.md) properties to determine the reason for the failure.

## See Also

### Managing writing sessions

- [startSessionAtSourceTime:](startsession%28atsourcetime_%29.md): Starts an asset-writing session.
- [endSessionAtSourceTime:](endsession%28atsourcetime_%29.md): Finishes an asset-writing session.
- [finishWritingWithCompletionHandler:](finishwriting%28completionhandler_%29.md): Marks all unfinished inputs as finished and completes the writing of the output file.
- [cancelWriting](cancelwriting%28%29.md): Cancels the creation of the output file.
- [finishWriting](finishwriting%28%29.md): Deprecated. Completes the writing of the output file.

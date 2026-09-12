> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/exportclip(to:duration:completionhandler:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/exportclip(to:duration:completionhandler:))

# exportClip(to:duration:completionHandler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · tvOS 15.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Exports a clip recording to a file.

> Use ScreenCaptureKit SCStream with SCClipBufferingOutput instead

## Declaration

```swift
func exportClip(to url: URL, duration: TimeInterval, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func exportClip(to url: URL, duration: TimeInterval) async throws
```

## Parameters

- `url`: The URL of the destination file.
- `duration`: The duration for clip recording, in seconds. The system caps the duration at to the elapsed time, or a maximum of 15 seconds, whichever is shorter.
- `completionHandler`: A closure the system calls after it finishes exporting the clip. The system passes an error object to the closure if it encountered a problem writing the clip to disk.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func exportClip(to url: URL, duration: TimeInterval) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing Clip Recording

- [startClipBuffering(completionHandler:)](startclipbuffering%28completionhandler_%29.md): Deprecated. Starts buffering a clip recording.
- [stopClipBuffering(completionHandler:)](stopclipbuffering%28completionhandler_%29.md): Deprecated. Stops buffering a clip recording.

# exportClipToURL:duration:completionHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · tvOS 15.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Exports a clip recording to a file.

> Use ScreenCaptureKit SCStream with SCClipBufferingOutput instead

## Declaration

```objectivec
- (void) exportClipToURL:(NSURL *) url duration:(NSTimeInterval) duration completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL of the destination file.
- `duration`: The duration for clip recording, in seconds. The system caps the duration at to the elapsed time, or a maximum of 15 seconds, whichever is shorter.
- `completionHandler`: A closure the system calls after it finishes exporting the clip. The system passes an error object to the closure if it encountered a problem writing the clip to disk.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func exportClip(to url: URL, duration: TimeInterval) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing Clip Recording

- [startClipBufferingWithCompletionHandler:](startclipbuffering%28completionhandler_%29.md): Deprecated. Starts buffering a clip recording.
- [stopClipBufferingWithCompletionHandler:](stopclipbuffering%28completionhandler_%29.md): Deprecated. Stops buffering a clip recording.

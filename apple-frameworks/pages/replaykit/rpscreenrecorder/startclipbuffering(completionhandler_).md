> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/startclipbuffering(completionhandler:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/startclipbuffering(completionhandler:))

# startClipBuffering(completionHandler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · tvOS 15.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts buffering a clip recording.

> Use ScreenCaptureKit SCStream with SCClipBufferingOutput instead

## Declaration

```swift
func startClipBuffering(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func startClipBuffering() async throws
```

## Parameters

- `completionHandler`: The system invokes this closure when recording starts. The system passes an error object to the closure if it encountered a problem.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func startClipBuffering() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing Clip Recording

- [stopClipBuffering(completionHandler:)](stopclipbuffering%28completionhandler_%29.md): Deprecated. Stops buffering a clip recording.
- [exportClip(to:duration:completionHandler:)](exportclip%28to_duration_completionhandler_%29.md): Deprecated. Exports a clip recording to a file.

# startClipBufferingWithCompletionHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · tvOS 15.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts buffering a clip recording.

> Use ScreenCaptureKit SCStream with SCClipBufferingOutput instead

## Declaration

```objectivec
- (void) startClipBufferingWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The system invokes this closure when recording starts. The system passes an error object to the closure if it encountered a problem.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func startClipBuffering() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing Clip Recording

- [stopClipBufferingWithCompletionHandler:](stopclipbuffering%28completionhandler_%29.md): Deprecated. Stops buffering a clip recording.
- [exportClipToURL:duration:completionHandler:](exportclip%28to_duration_completionhandler_%29.md): Deprecated. Exports a clip recording to a file.

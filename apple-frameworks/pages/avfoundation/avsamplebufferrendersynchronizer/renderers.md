> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/renderers](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/renderers)

# renderers (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An array of queued sample buffer renderers currently attached to the synchronizer.

> Accessing non-Sendable renderers concurrently risks causing data races

## Declaration

```swift
var renderers: [any AVQueuedSampleBufferRendering] { get }
```

<a id="Discussion"></a>

## Discussion

This property includes all renderers that have been added to the synchronizer and haven’t been removed, including renderers that have been scheduled for removal, but have yet to be removed. This property is not KVO observable.

## See Also

### Managing renderers

- [addRenderer(\_:)](addrenderer%28__%29.md): Deprecated. Adds a renderer to the list of renderers under the synchronizer’s control.
- [removeRenderer(\_:at:completionHandler:)](removerenderer%28__at_completionhandler_%29.md): Deprecated. Removes a renderer from the synchronizer.

# renderers (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of queued sample buffer renderers currently attached to the synchronizer.

## Declaration

```objectivec
@property (atomic, readonly) NSArray<__kindof id<AVQueuedSampleBufferRendering>> * renderers;
```

<a id="Discussion"></a>

## Discussion

This property includes all renderers that have been added to the synchronizer and haven’t been removed, including renderers that have been scheduled for removal, but have yet to be removed. This property is not KVO observable.

## See Also

### Managing renderers

- [addRenderer:](addrenderer%28__%29.md): Deprecated. Adds a renderer to the list of renderers under the synchronizer’s control.
- [removeRenderer:atTime:completionHandler:](removerenderer%28__at_completionhandler_%29.md): Deprecated. Removes a renderer from the synchronizer.

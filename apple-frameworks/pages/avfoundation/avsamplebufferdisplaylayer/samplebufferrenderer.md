> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/samplebufferrenderer

# sampleBufferRenderer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that enqueues video sample buffers for rendering.

## Declaration

```swift
var sampleBufferRenderer: AVSampleBufferVideoRenderer { get }
```

<a id="Discussion"></a>

## Discussion

This object allows you to safely enqueue sample buffers from a background thread.

# sampleBufferRenderer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that enqueues video sample buffers for rendering.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleBufferVideoRenderer * sampleBufferRenderer;
```

<a id="Discussion"></a>

## Discussion

This object allows you to safely enqueue sample buffers from a background thread.

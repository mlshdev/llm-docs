> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/timebase](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/timebase)

# timebase (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The renderer’s timebase, which determines how the layer interprets time stamps.

> Use sampleBufferRenderer's timebase instead

## Declaration

```swift
var timebase: CMTimebase { get }
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [timebase](../avqueuedsamplebufferrendering/timebase.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

# timebase (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The renderer’s timebase, which determines how the layer interprets time stamps.

> Use sampleBufferRenderer's timebase instead

## Declaration

```objectivec
@property (retain, readonly) CMTimebaseRef timebase;
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [timebase](../avqueuedsamplebufferrendering/timebase.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

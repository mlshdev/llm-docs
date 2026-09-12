> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackcontroller/completionhandler](https://developer.apple.com/documentation/realitykit/audioplaybackcontroller/completionhandler)

# completionHandler

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A closure that the playback controller executes when it reaches the end of the audio stream.

## Declaration

```swift
@MainActor @preconcurrency var completionHandler: (() -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The controller doesn’t call the closure if you manually stop the audio by calling the [stop()](stop%28%29.md) or the [pause()](pause%28%29.md) method.

> **Note**

> You can only register one handler at a time. If you set a new handler, the controller discards the old one.

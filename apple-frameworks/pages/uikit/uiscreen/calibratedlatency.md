> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/calibratedlatency](https://developer.apple.com/documentation/uikit/uiscreen/calibratedlatency)

# calibratedLatency (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

The user-calibrated latency for the current screen.

## Declaration

```swift
var calibratedLatency: CFTimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property when you need to manually synchronize video playback with custom audio. For example, you might correlate this value with the [latency](../../audiotoolbox/auaudiounit/latency.md) property of a Core Audio unit when writing custom video-playback software. The value of this property is `0` until the user explicitly calibrates their display.

# calibratedLatency (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

The user-calibrated latency for the current screen.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval calibratedLatency;
```

<a id="Discussion"></a>

## Discussion

Use this property when you need to manually synchronize video playback with custom audio. For example, you might correlate this value with the [latency](../../audiotoolbox/auaudiounit/latency.md) property of a Core Audio unit when writing custom video-playback software. The value of this property is `0` until the user explicitly calibrates their display.

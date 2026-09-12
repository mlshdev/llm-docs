> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auheadtrackingbinauralrenderer/isdisabled](https://developer.apple.com/documentation/audiotoolbox/auheadtrackingbinauralrenderer/isdisabled)

# isDisabled (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the host is bypassing the renderer due to poor performance.

## Declaration

```swift
var isDisabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

The host may set this property when the Audio Unit exhibits problematic behavior such as excessive CPU usage that impacts real-time performance or non-compliance with API requirements.

When YES, the host bypasses the spatial Audio Unit in the audio signal chain and the Audio Unit does not render audio. When NO, the Audio Unit receives input and must render audio when it is matched a Bluetooth headphone device.

The Audio Unit should monitor this property to detect when the host disables the Audio Unit.

This property supports Key-Value Observing (KVO).

# disabled (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Indicates whether the host is bypassing the renderer due to poor performance.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDisabled) BOOL disabled;
```

<a id="discussion"></a>

## Discussion

The host may set this property when the Audio Unit exhibits problematic behavior such as excessive CPU usage that impacts real-time performance or non-compliance with API requirements.

When YES, the host bypasses the spatial Audio Unit in the audio signal chain and the Audio Unit does not render audio. When NO, the Audio Unit receives input and must render audio when it is matched a Bluetooth headphone device.

The Audio Unit should monitor this property to detect when the host disables the Audio Unit.

This property supports Key-Value Observing (KVO).

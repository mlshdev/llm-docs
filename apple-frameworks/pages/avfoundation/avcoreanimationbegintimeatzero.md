> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoreanimationbegintimeatzero](https://developer.apple.com/documentation/avfoundation/avcoreanimationbegintimeatzero)

# AVCoreAnimationBeginTimeAtZero (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A value that sets an animation begin time to `0`.

## Declaration

```swift
let AVCoreAnimationBeginTimeAtZero: CFTimeInterval
```

<a id="Discussion"></a>

## Discussion

The constant is a small, non-zero, positive value which prevents CoreAnimation from replacing `0.0` with [CACurrentMediaTime()](../quartzcore/cacurrentmediatime%28%29.md).

# AVCoreAnimationBeginTimeAtZero (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A value that sets an animation begin time to `0`.

## Declaration

```objectivec
extern const CFTimeInterval AVCoreAnimationBeginTimeAtZero;
```

<a id="Discussion"></a>

## Discussion

The constant is a small, non-zero, positive value which prevents CoreAnimation from replacing `0.0` with [CACurrentMediaTime](../quartzcore/cacurrentmediatime%28%29.md).

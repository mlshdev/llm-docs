> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimationevent/init(keytime:block:)](https://developer.apple.com/documentation/scenekit/scnanimationevent/init(keytime:block:))

# init(keyTime:block:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an animation event.

## Declaration

```swift
convenience init(keyTime time: CGFloat, block eventBlock: @escaping SCNAnimationEventBlock)
```

## Parameters

- `time`: A number between `0.0` and `1.0` specifying the relative time for triggering the event.
- `eventBlock`: A block to call at the specified time.

<a id="return-value"></a>

## Return Value

An animation event object.

<a id="Discussion"></a>

## Discussion

The `time` parameter is relative to the duration of the animation the event is attached to. For example, an event with a time of `0.5` triggers when the animation is halfway complete, and an event with a time of `1.0` triggers when the animation ends.

# animationEventWithKeyTime:block: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Creates an animation event.

## Declaration

```objectivec
+ (instancetype) animationEventWithKeyTime:(CGFloat) time block:(SCNAnimationEventBlock) eventBlock;
```

## Parameters

- `time`: A number between `0.0` and `1.0` specifying the relative time for triggering the event.
- `eventBlock`: A block to call at the specified time.

<a id="return-value"></a>

## Return Value

An animation event object.

<a id="Discussion"></a>

## Discussion

The `time` parameter is relative to the duration of the animation the event is attached to. For example, an event with a time of `0.5` triggers when the animation is halfway complete, and an event with a time of `1.0` triggers when the animation ends.

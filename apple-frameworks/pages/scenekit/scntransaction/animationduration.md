> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/animationduration](https://developer.apple.com/documentation/scenekit/scntransaction/animationduration)

# animationDuration (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the duration, in seconds, of all animations within the current transaction.

## Declaration

```swift
class var animationDuration: CFTimeInterval { get set }
```

<a id="return-value"></a>

## Return Value

The animation duration, in seconds.

## Mentioned In

- [Animating SceneKit Content](../animating-scenekit-content.md)

<a id="Discussion"></a>

## Discussion

The default duration is zero for transactions automatically created by SceneKit, and `0.25` for animations you create using the [begin()](begin%28%29.md) method.

## See Also

### Overriding Animation Duration and Timing

- [animationTimingFunction](animationtimingfunction.md): Returns the timing function that SceneKit uses for all animations within this transaction group.

# animationDuration (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the duration, in seconds, of all animations within the current transaction.

## Declaration

```objectivec
@property (class, nonatomic) CFTimeInterval animationDuration;
```

<a id="return-value"></a>

## Return Value

The animation duration, in seconds.

## Mentioned In

- [Animating SceneKit Content](../animating-scenekit-content.md)

<a id="Discussion"></a>

## Discussion

The default duration is zero for transactions automatically created by SceneKit, and `0.25` for animations you create using the [begin](begin%28%29.md) method.

## See Also

### Overriding Animation Duration and Timing

- [animationTimingFunction](animationtimingfunction.md): Returns the timing function that SceneKit uses for all animations within this transaction group.

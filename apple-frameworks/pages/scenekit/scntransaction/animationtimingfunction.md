> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/animationtimingfunction](https://developer.apple.com/documentation/scenekit/scntransaction/animationtimingfunction)

# animationTimingFunction (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the timing function that SceneKit uses for all animations within this transaction group.

## Declaration

```swift
@NSCopying class var animationTimingFunction: CAMediaTimingFunction? { get set }
```

<a id="return-value"></a>

## Return Value

The media timing function for the transaction’s animations.

<a id="Discussion"></a>

## Discussion

Media timing functions, also known as *animation curves*, define the relationship between the elapsed time of an animation and its effect on a property. For example, the [easeInEaseOut](../../quartzcore/camediatimingfunctionname/easeineaseout.md) function creates an effect that begins slowly, speeds up, and then finishes slowly.

## See Also

### Overriding Animation Duration and Timing

- [animationDuration](animationduration.md): Returns the duration, in seconds, of all animations within the current transaction.

# animationTimingFunction (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns the timing function that SceneKit uses for all animations within this transaction group.

## Declaration

```objectivec
@property (class, nonatomic, copy, nullable) CAMediaTimingFunction * animationTimingFunction;
```

<a id="return-value"></a>

## Return Value

The media timing function for the transaction’s animations.

<a id="Discussion"></a>

## Discussion

Media timing functions, also known as *animation curves*, define the relationship between the elapsed time of an animation and its effect on a property. For example, the [kCAMediaTimingFunctionEaseInEaseOut](../../quartzcore/camediatimingfunctionname/easeineaseout.md) function creates an effect that begins slowly, speeds up, and then finishes slowly.

## See Also

### Overriding Animation Duration and Timing

- [animationDuration](animationduration.md): Returns the duration, in seconds, of all animations within the current transaction.

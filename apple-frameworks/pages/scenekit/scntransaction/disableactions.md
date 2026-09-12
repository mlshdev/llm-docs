> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/disableactions](https://developer.apple.com/documentation/scenekit/scntransaction/disableactions)

# disableActions (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a Boolean value indicating whether changes to animatable properties during the transaction are implicitly animated.

## Declaration

```swift
class var disableActions: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if implicit animation is disabled; [false](https://developer.apple.com/documentation/swift/false) if implicit animation is allowed.

<a id="Discussion"></a>

## Discussion

By default (when this property is [false](https://developer.apple.com/documentation/swift/false)), any changes to animatable properties of objects in the scene graph implicitly create animations. (These animations may not be visible unless you use the [animationDuration](animationduration.md) property to set a nonzero duration for the transaction.) Set this property to [true](https://developer.apple.com/documentation/swift/true) to disable implicit animation during the transaction.

Disabling animation applies to all property changes in the current transaction and any nested transactions within it. However, you can use this property again within a nested transaction to enable implicit animation for that transaction.

# disableActions (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value indicating whether changes to animatable properties during the transaction are implicitly animated.

## Declaration

```objectivec
@property (class, nonatomic) BOOL disableActions;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if implicit animation is disabled; [false](https://developer.apple.com/documentation/swift/false) if implicit animation is allowed.

<a id="Discussion"></a>

## Discussion

By default (when this property is [false](https://developer.apple.com/documentation/swift/false)), any changes to animatable properties of objects in the scene graph implicitly create animations. (These animations may not be visible unless you use the [animationDuration](animationduration.md) property to set a nonzero duration for the transaction.) Set this property to [true](https://developer.apple.com/documentation/swift/true) to disable implicit animation during the transaction.

Disabling animation applies to all property changes in the current transaction and any nested transactions within it. However, you can use this property again within a nested transaction to enable implicit animation for that transaction.

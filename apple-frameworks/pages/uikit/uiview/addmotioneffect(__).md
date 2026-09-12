> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/addmotioneffect(_:)](https://developer.apple.com/documentation/uikit/uiview/addmotioneffect(_:))

# addMotionEffect(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Begins applying a motion effect to the view.

## Declaration

```swift
func addMotionEffect(_ effect: UIMotionEffect)
```

## Parameters

- `effect`: The motion effect.

<a id="Discussion"></a>

## Discussion

The system animates the transition to the motion effect’s values using the present [UIView](../uiview.md) animation context. The motion effect’s keyPath/value pairs are applied to the view’s presentation layer.

## See Also

### Using motion effects

- [motionEffects](motioneffects.md): The array of motion effects for the view.
- [removeMotionEffect(\_:)](removemotioneffect%28__%29.md): Stops applying a motion effect to the view.

# addMotionEffect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Begins applying a motion effect to the view.

## Declaration

```objectivec
- (void) addMotionEffect:(UIMotionEffect *) effect;
```

## Parameters

- `effect`: The motion effect.

<a id="Discussion"></a>

## Discussion

The system animates the transition to the motion effect’s values using the present [UIView](../uiview.md) animation context. The motion effect’s keyPath/value pairs are applied to the view’s presentation layer.

## See Also

### Using motion effects

- [motionEffects](motioneffects.md): The array of motion effects for the view.
- [removeMotionEffect:](removemotioneffect%28__%29.md): Stops applying a motion effect to the view.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/removemotioneffect(_:)](https://developer.apple.com/documentation/uikit/uiview/removemotioneffect(_:))

# removeMotionEffect(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Stops applying a motion effect to the view.

## Declaration

```swift
func removeMotionEffect(_ effect: UIMotionEffect)
```

## Parameters

- `effect`: The motion effect.

<a id="Discussion"></a>

## Discussion

Any affected presentation values animate to their post-removal values using the present [UIView](../uiview.md) animation context.

## See Also

### Using motion effects

- [addMotionEffect(\_:)](addmotioneffect%28__%29.md): Begins applying a motion effect to the view.
- [motionEffects](motioneffects.md): The array of motion effects for the view.

# removeMotionEffect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Stops applying a motion effect to the view.

## Declaration

```objectivec
- (void) removeMotionEffect:(UIMotionEffect *) effect;
```

## Parameters

- `effect`: The motion effect.

<a id="Discussion"></a>

## Discussion

Any affected presentation values animate to their post-removal values using the present [UIView](../uiview.md) animation context.

## See Also

### Using motion effects

- [addMotionEffect:](addmotioneffect%28__%29.md): Begins applying a motion effect to the view.
- [motionEffects](motioneffects.md): The array of motion effects for the view.

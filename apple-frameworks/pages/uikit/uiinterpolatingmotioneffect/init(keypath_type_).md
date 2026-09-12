> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinterpolatingmotioneffect/init(keypath:type:)](https://developer.apple.com/documentation/uikit/uiinterpolatingmotioneffect/init(keypath:type:))

# init(keyPath:type:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns an interpolating motion effect object configured for the specific tilt direction.

## Declaration

```swift
init(keyPath: String, type: UIInterpolatingMotionEffect.EffectType)
```

## Parameters

- `keyPath`: The key path of the view that you want to modify. This path must correspond to an animatable property of the view on which this motion effect is applied. For example, to update the [center](../uiview/center.md) property of the view, specify the string “center”.
- `type`: The type of motion to track. You can track horizontal or vertical tilt. For a list of possible values, see [UIInterpolatingMotionEffect.EffectType](effecttype.md).

<a id="return-value"></a>

## Return Value

An initialized interpolating motion effect object.

## See Also

### Initializing a motion effect

- [init(coder:)](init%28coder_%29.md): Creates a motion effect from data in an unarchiver.

# initWithKeyPath:type: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns an interpolating motion effect object configured for the specific tilt direction.

## Declaration

```objectivec
- (instancetype) initWithKeyPath:(NSString *) keyPath type:(UIInterpolatingMotionEffectType) type;
```

## Parameters

- `keyPath`: The key path of the view that you want to modify. This path must correspond to an animatable property of the view on which this motion effect is applied. For example, to update the [center](../uiview/center.md) property of the view, specify the string “center”.
- `type`: The type of motion to track. You can track horizontal or vertical tilt. For a list of possible values, see [UIInterpolatingMotionEffectType](effecttype.md).

<a id="return-value"></a>

## Return Value

An initialized interpolating motion effect object.

## See Also

### Initializing a motion effect

- [initWithCoder:](init%28coder_%29.md): Creates a motion effect from data in an unarchiver.

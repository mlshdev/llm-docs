> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/setangle(_:magnitude:)](https://developer.apple.com/documentation/uikit/uipushbehavior/setangle(_:magnitude:))

# setAngle(\_:magnitude:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the angle and magnitude of the force vector for the behavior.

## Declaration

```swift
func setAngle(_ angle: CGFloat, magnitude: CGFloat)
```

## Parameters

- `angle`: The angle, in radians, of the force vector for the push behavior.

  The default angle is `0` radians, using standard UIKit geometry.
- `magnitude`: The magnitude of the force vector for the push behavior.

  The default magnitude is `nil`, equivalent to no force. A force vector with a magnitude of `1.0`, applied to a 100 point x 100 point view whose density value is `1.0`, results in view acceleration of 100 points / second².

  Setting the [magnitude](magnitude.md) parameter to a negative value reverses the direction of the force.

<a id="Discussion"></a>

## Discussion

Whether you express a push behavior’s force direction in terms of radian angle or with *x*, *y* components, the alternate, equivalent values update automatically.

## See Also

### Configuring a push behavior

- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter(\_:for:)](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenter(for:)](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

# setAngle:magnitude: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the angle and magnitude of the force vector for the behavior.

## Declaration

```objectivec
- (void) setAngle:(CGFloat) angle magnitude:(CGFloat) magnitude;
```

## Parameters

- `angle`: The angle, in radians, of the force vector for the push behavior.

  The default angle is `0` radians, using standard UIKit geometry.
- `magnitude`: The magnitude of the force vector for the push behavior.

  The default magnitude is `nil`, equivalent to no force. A force vector with a magnitude of `1.0`, applied to a 100 point x 100 point view whose density value is `1.0`, results in view acceleration of 100 points / second².

  Setting the [magnitude](magnitude.md) parameter to a negative value reverses the direction of the force.

<a id="Discussion"></a>

## Discussion

Whether you express a push behavior’s force direction in terms of radian angle or with *x*, *y* components, the alternate, equivalent values update automatically.

## See Also

### Configuring a push behavior

- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter:forItem:](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenterForItem:](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

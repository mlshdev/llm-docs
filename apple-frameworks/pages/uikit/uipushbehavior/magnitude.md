> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/magnitude](https://developer.apple.com/documentation/uikit/uipushbehavior/magnitude)

# magnitude (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The magnitude of the force vector for the push behavior.

## Declaration

```swift
var magnitude: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default magnitude is `0.0`, equivalent to no force. A continuous force vector with a magnitude of `1.0`, applied to a 100 point x 100 point view whose density value is `1.0`, results in view acceleration of 100 points / second² in the direction indicated by the [angle](angle.md) or [pushDirection](pushdirection.md) property.

Setting the [magnitude](magnitude.md) parameter to a negative value reverses the direction of the force.

## See Also

### Configuring a push behavior

- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter(\_:for:)](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenter(for:)](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

# magnitude (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The magnitude of the force vector for the push behavior.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGFloat magnitude;
```

<a id="Discussion"></a>

## Discussion

The default magnitude is `0.0`, equivalent to no force. A continuous force vector with a magnitude of `1.0`, applied to a 100 point x 100 point view whose density value is `1.0`, results in view acceleration of 100 points / second² in the direction indicated by the [angle](angle.md) or [pushDirection](pushdirection.md) property.

Setting the [magnitude](magnitude.md) parameter to a negative value reverses the direction of the force.

## See Also

### Configuring a push behavior

- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter:forItem:](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenterForItem:](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

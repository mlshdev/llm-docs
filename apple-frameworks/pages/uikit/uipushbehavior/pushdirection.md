> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/pushdirection](https://developer.apple.com/documentation/uikit/uipushbehavior/pushdirection)

# pushDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

## Declaration

```swift
var pushDirection: CGVector { get set }
```

<a id="Discussion"></a>

## Discussion

The default `x` and `y` values of the push direction vector are each `0.0`. A value for either component of `1.0`, applied to a 100 point x 100 point view, whose density value is `1.0`, results in view acceleration of 100 points / second² in the positive direction for the component.

Setting either direction component to a negative value reverses the direction of force for the component.

Whether you express a push behavior’s push direction in terms of *x*, *y* components or with an angle (by using the [angle](angle.md) property), the alternate, equivalent value updates automatically.

## See Also

### Configuring a push behavior

- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter(\_:for:)](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenter(for:)](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.

# pushDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGVector pushDirection;
```

<a id="Discussion"></a>

## Discussion

The default `x` and `y` values of the push direction vector are each `0.0`. A value for either component of `1.0`, applied to a 100 point x 100 point view, whose density value is `1.0`, results in view acceleration of 100 points / second² in the positive direction for the component.

Setting either direction component to a negative value reverses the direction of force for the component.

Whether you express a push behavior’s push direction in terms of *x*, *y* components or with an angle (by using the [angle](angle.md) property), the alternate, equivalent value updates automatically.

## See Also

### Configuring a push behavior

- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter:forItem:](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenterForItem:](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.

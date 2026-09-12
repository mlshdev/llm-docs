> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/angle](https://developer.apple.com/documentation/uikit/uipushbehavior/angle)

# angle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The angle, in radians, of the force vector for the behavior.

## Declaration

```swift
var angle: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default angle is `0` radians, using standard UIKit geometry. To configure the force vector for a push behavior, set the [magnitude](magnitude.md) property as well as the [angle](angle.md) property.

Alternatively, you can express the direction of force by using *x* and *y* components with the [pushDirection](pushdirection.md) property. Whichever approach you use, the alternate, equivalent values update automatically.

## See Also

### Configuring a push behavior

- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter(\_:for:)](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenter(for:)](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

# angle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The angle, in radians, of the force vector for the behavior.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGFloat angle;
```

<a id="Discussion"></a>

## Discussion

The default angle is `0` radians, using standard UIKit geometry. To configure the force vector for a push behavior, set the [magnitude](magnitude.md) property as well as the [angle](angle.md) property.

Alternatively, you can express the direction of force by using *x* and *y* components with the [pushDirection](pushdirection.md) property. Whichever approach you use, the alternate, equivalent values update automatically.

## See Also

### Configuring a push behavior

- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter:forItem:](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenterForItem:](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

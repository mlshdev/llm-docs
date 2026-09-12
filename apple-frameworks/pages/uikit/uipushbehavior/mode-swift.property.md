> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/mode-swift.property](https://developer.apple.com/documentation/uikit/uipushbehavior/mode-swift.property)

# mode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the force mode for the push behavior.

## Declaration

```swift
var mode: UIPushBehavior.Mode { get }
```

<a id="Discussion"></a>

## Discussion

The mode is one of the values available in the [UIPushBehavior.Mode](mode-swift.enum.md) enumeration. Set the mode when you call the [init(items:mode:)](init%28items_mode_%29.md) method.

## See Also

### Configuring a push behavior

- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [setTargetOffsetFromCenter(\_:for:)](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenter(for:)](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

# mode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the force mode for the push behavior.

## Declaration

```objectivec
@property (nonatomic, readonly) UIPushBehaviorMode mode;
```

<a id="Discussion"></a>

## Discussion

The mode is one of the values available in the [UIPushBehaviorMode](mode-swift.enum.md) enumeration. Set the mode when you call the [initWithItems:mode:](init%28items_mode_%29.md) method.

## See Also

### Configuring a push behavior

- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [setTargetOffsetFromCenter:forItem:](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [targetOffsetFromCenterForItem:](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

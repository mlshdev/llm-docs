> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/settargetoffsetfromcenter(_:for:)](https://developer.apple.com/documentation/uikit/uipushbehavior/settargetoffsetfromcenter(_:for:))

# setTargetOffsetFromCenter(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.

## Declaration

```swift
func setTargetOffsetFromCenter(_ o: UIOffset, for item: any UIDynamicItem)
```

## Parameters

- `o`: The offset, from the center of the dynamic item, at which to apply the push behavior’s force vector.
- `item`: The dynamic item for which you’re setting a target offset.

<a id="Discussion"></a>

## Discussion

If you don’t set a target offset for a dynamic item, a push behavior’s force vector is applied at the item center.

## See Also

### Configuring a push behavior

- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [targetOffsetFromCenter(for:)](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

# setTargetOffsetFromCenter:forItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.

## Declaration

```objectivec
- (void) setTargetOffsetFromCenter:(UIOffset) o forItem:(id<UIDynamicItem>) item;
```

## Parameters

- `o`: The offset, from the center of the dynamic item, at which to apply the push behavior’s force vector.
- `item`: The dynamic item for which you’re setting a target offset.

<a id="Discussion"></a>

## Discussion

If you don’t set a target offset for a dynamic item, a push behavior’s force vector is applied at the item center.

## See Also

### Configuring a push behavior

- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [targetOffsetFromCenterForItem:](targetoffsetfromcenter%28for_%29.md): Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

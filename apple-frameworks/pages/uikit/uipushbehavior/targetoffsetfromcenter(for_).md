> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/targetoffsetfromcenter(for:)](https://developer.apple.com/documentation/uikit/uipushbehavior/targetoffsetfromcenter(for:))

# targetOffsetFromCenter(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.

## Declaration

```swift
func targetOffsetFromCenter(for item: any UIDynamicItem) -> UIOffset
```

## Parameters

- `item`: The dynamic item for which you’re retrieving the target offset.

<a id="return-value"></a>

## Return Value

The offset, from the center of the dynamic item, at which the push behavior’s force vector is applied. If you haven’t set a target offset, returns the center of the dynamic item.

## See Also

### Configuring a push behavior

- [setAngle(\_:magnitude:)](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter(\_:for:)](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

# targetOffsetFromCenterForItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the offset, from the center of a dynamic item, at which the push behavior’s force vector is applied.

## Declaration

```objectivec
- (UIOffset) targetOffsetFromCenterForItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item for which you’re retrieving the target offset.

<a id="return-value"></a>

## Return Value

The offset, from the center of the dynamic item, at which the push behavior’s force vector is applied. If you haven’t set a target offset, returns the center of the dynamic item.

## See Also

### Configuring a push behavior

- [setAngle:magnitude:](setangle%28__magnitude_%29.md): Sets the angle and magnitude of the force vector for the behavior.
- [angle](angle.md): The angle, in radians, of the force vector for the behavior.
- [magnitude](magnitude.md): The magnitude of the force vector for the push behavior.
- [mode](mode-swift.property.md): Returns the force mode for the push behavior.
- [setTargetOffsetFromCenter:forItem:](settargetoffsetfromcenter%28__for_%29.md): Sets the offset, from the center of a dynamic item, at which to apply the push behavior’s force vector.
- [pushDirection](pushdirection.md): The direction of the force vector for the behavior, expressed as *x* and *y* components and using standard UIKit geometry.

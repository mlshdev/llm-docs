> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/anchorpoint](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/anchorpoint)

# anchorPoint (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The anchor point for the attachment behavior, if any.

## Declaration

```swift
var anchorPoint: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The anchor point is relative to the coordinate system for the behavior’s associated dynamic animator. For attachment types without an anchor point, the value in this property is [CGPointZero](../../coregraphics/cgpointzero.md). For more information about the coordinate system of the reference view, see [UIDynamicAnimator](../uidynamicanimator.md).

## See Also

### Configuring an attachment behavior

- [attachedBehaviorType](attachedbehaviortype.md): The type of the attachment behavior.
- [damping](damping.md): The amount of damping to apply to the attachment behavior.
- [frequency](frequency.md): The frequency of oscillation for the attachment behavior.
- [length](length.md): The distance, in points, between the two attachment points of the attachment behavior.
- [frictionTorque](frictiontorque.md): The amount of force needed to overcome rotational forces around an anchor point.
- [attachmentRange](attachmentrange.md): The range of motion for the attachment behavior.

# anchorPoint (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The anchor point for the attachment behavior, if any.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGPoint anchorPoint;
```

<a id="Discussion"></a>

## Discussion

The anchor point is relative to the coordinate system for the behavior’s associated dynamic animator. For attachment types without an anchor point, the value in this property is [CGPointZero](../../coregraphics/cgpointzero.md). For more information about the coordinate system of the reference view, see [UIDynamicAnimator](../uidynamicanimator.md).

## See Also

### Configuring an attachment behavior

- [attachedBehaviorType](attachedbehaviortype.md): The type of the attachment behavior.
- [damping](damping.md): The amount of damping to apply to the attachment behavior.
- [frequency](frequency.md): The frequency of oscillation for the attachment behavior.
- [length](length.md): The distance, in points, between the two attachment points of the attachment behavior.
- [frictionTorque](frictiontorque.md): The amount of force needed to overcome rotational forces around an anchor point.
- [attachmentRange](attachmentrange.md): The range of motion for the attachment behavior.

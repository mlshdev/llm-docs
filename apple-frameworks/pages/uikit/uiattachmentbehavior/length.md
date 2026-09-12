> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/length](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/length)

# length (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The distance, in points, between the two attachment points of the attachment behavior.

## Declaration

```swift
var length: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the attachment length, if you want to, *after* creating an attachment. The system sets initial length automatically based on how you initialize the attachment.

## See Also

### Configuring an attachment behavior

- [anchorPoint](anchorpoint.md): The anchor point for the attachment behavior, if any.
- [attachedBehaviorType](attachedbehaviortype.md): The type of the attachment behavior.
- [damping](damping.md): The amount of damping to apply to the attachment behavior.
- [frequency](frequency.md): The frequency of oscillation for the attachment behavior.
- [frictionTorque](frictiontorque.md): The amount of force needed to overcome rotational forces around an anchor point.
- [attachmentRange](attachmentrange.md): The range of motion for the attachment behavior.

# length (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The distance, in points, between the two attachment points of the attachment behavior.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGFloat length;
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the attachment length, if you want to, *after* creating an attachment. The system sets initial length automatically based on how you initialize the attachment.

## See Also

### Configuring an attachment behavior

- [anchorPoint](anchorpoint.md): The anchor point for the attachment behavior, if any.
- [attachedBehaviorType](attachedbehaviortype.md): The type of the attachment behavior.
- [damping](damping.md): The amount of damping to apply to the attachment behavior.
- [frequency](frequency.md): The frequency of oscillation for the attachment behavior.
- [frictionTorque](frictiontorque.md): The amount of force needed to overcome rotational forces around an anchor point.
- [attachmentRange](attachmentrange.md): The range of motion for the attachment behavior.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior](https://developer.apple.com/documentation/uikit/uiattachmentbehavior)

# UIAttachmentBehavior (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A relationship between two dynamic items, or between a dynamic item and an anchor point.

## Declaration

```swift
@MainActor class UIAttachmentBehavior
```

<a id="overview"></a>

## Overview

When two items are attached to each other, forces imparted on one item affect the movement of the other in a prescribed way. When an item is attached to an anchor point, the movement of that item is affected by its attachment to the specified anchor point. Some attachment behaviors support both two items and an anchor point.

You specify type of attachment behavior you want at creation time. This class offers many creation and initialization methods, each of which creates a different type of attachment behavior, which cannot be changed later. However, you may change specific attributes of the attachment behavior using the properties of this class. For example, you can change the distance between two attached items or change the damping forces applied to the items.

<a id="Applying-an-Attachment-Behavior-to-Dynamic-Items"></a>

### Applying an Attachment Behavior to Dynamic Items

To apply an attachment behavior to your dynamic items, do the following:

1. Create the attachment behavior using one of the creation or initialization methods. The method you choose defines the relationship between the items and the anchor point (if any).
2. Enable the attachment behavior by adding it to your [UIDynamicAnimator](uidynamicanimator.md) object using the [addBehavior(\_:)](uidynamicanimator/addbehavior%28__%29.md) method. Do not add the same attachment behavior to multiple animator objects.

The attachment behavior derives its coordinate system from the reference view of its associated dynamic animator object. For more information about the dynamic animator and the reference coordinate system, see [UIDynamicAnimator](uidynamicanimator.md).

## Topics

### Creating and initializing attachment behavior objects

- [slidingAttachment(with:attachmentAnchor:axisOfTranslation:)](uiattachmentbehavior/slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachment(with:attachedTo:attachmentAnchor:axisOfTranslation:)](uiattachmentbehavior/slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachment(with:attachedTo:attachmentAnchor:)](uiattachmentbehavior/fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachment(with:offsetFromCenter:attachedTo:offsetFromCenter:)](uiattachmentbehavior/limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachment(with:attachedTo:attachmentAnchor:)](uiattachmentbehavior/pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [init(item:attachedToAnchor:)](uiattachmentbehavior/init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [init(item:attachedTo:)](uiattachmentbehavior/init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [init(item:offsetFromCenter:attachedToAnchor:)](uiattachmentbehavior/init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [init(item:offsetFromCenter:attachedTo:offsetFromCenter:)](uiattachmentbehavior/init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

### Getting the attached items

- [items](uiattachmentbehavior/items.md): The dynamic items connected by the attachment behavior.

### Configuring an attachment behavior

- [anchorPoint](uiattachmentbehavior/anchorpoint.md): The anchor point for the attachment behavior, if any.
- [attachedBehaviorType](uiattachmentbehavior/attachedbehaviortype.md): The type of the attachment behavior.
- [damping](uiattachmentbehavior/damping.md): The amount of damping to apply to the attachment behavior.
- [frequency](uiattachmentbehavior/frequency.md): The frequency of oscillation for the attachment behavior.
- [length](uiattachmentbehavior/length.md): The distance, in points, between the two attachment points of the attachment behavior.
- [frictionTorque](uiattachmentbehavior/frictiontorque.md): The amount of force needed to overcome rotational forces around an anchor point.
- [attachmentRange](uiattachmentbehavior/attachmentrange.md): The range of motion for the attachment behavior.

### Constants

- [UIAttachmentBehavior.AttachmentType](uiattachmentbehavior/attachmenttype.md): Constants indicating the type of the attachment behavior object.
- [UIFloatRange](uifloatrange.md): The range of motion for attached objects.
- [Float range constants](float-range-constants.md): Constants for specifying standard ranges.
- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.

### Initializers

- [init(item:attachedToItem:)](uiattachmentbehavior/init%28item_attachedtoitem_%29.md)
- [init(item:offsetFromCenter:attachedToItem:offsetFromCenter:)](uiattachmentbehavior/init%28item_offsetfromcenter_attachedtoitem_offsetfromcenter_%29.md)

## Relationships

### Inherits From

- [UIDynamicBehavior](uidynamicbehavior.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Behaviors

- [UIDynamicBehavior](uidynamicbehavior.md): An object that confers a behavioral configuration on one or more dynamic items, for their participation in 2D animation.
- [UICollisionBehavior](uicollisionbehavior.md): An object that confers to a specified array of dynamic items the ability to engage in collisions with each other and with the behavior’s specified boundaries.
- [UIFieldBehavior](uifieldbehavior.md): An object that applies field-based physics to dynamic items.
- [UIGravityBehavior](uigravitybehavior.md): An object that applies a gravity-like force to all of its associated dynamic items.
- [UIPushBehavior](uipushbehavior.md): A behavior that applies a continuous or instantaneous force to one or more dynamic items, causing those items to change position accordingly.
- [UISnapBehavior](uisnapbehavior.md): A spring-like behavior whose initial motion is damped over time so that the object settles at a specific point.

# UIAttachmentBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A relationship between two dynamic items, or between a dynamic item and an anchor point.

## Declaration

```objectivec
@interface UIAttachmentBehavior : UIDynamicBehavior
```

<a id="overview"></a>

## Overview

When two items are attached to each other, forces imparted on one item affect the movement of the other in a prescribed way. When an item is attached to an anchor point, the movement of that item is affected by its attachment to the specified anchor point. Some attachment behaviors support both two items and an anchor point.

You specify type of attachment behavior you want at creation time. This class offers many creation and initialization methods, each of which creates a different type of attachment behavior, which cannot be changed later. However, you may change specific attributes of the attachment behavior using the properties of this class. For example, you can change the distance between two attached items or change the damping forces applied to the items.

<a id="Applying-an-Attachment-Behavior-to-Dynamic-Items"></a>

### Applying an Attachment Behavior to Dynamic Items

To apply an attachment behavior to your dynamic items, do the following:

1. Create the attachment behavior using one of the creation or initialization methods. The method you choose defines the relationship between the items and the anchor point (if any).
2. Enable the attachment behavior by adding it to your [UIDynamicAnimator](uidynamicanimator.md) object using the [addBehavior:](uidynamicanimator/addbehavior%28__%29.md) method. Do not add the same attachment behavior to multiple animator objects.

The attachment behavior derives its coordinate system from the reference view of its associated dynamic animator object. For more information about the dynamic animator and the reference coordinate system, see [UIDynamicAnimator](uidynamicanimator.md).

## Topics

### Creating and initializing attachment behavior objects

- [slidingAttachmentWithItem:attachmentAnchor:axisOfTranslation:](uiattachmentbehavior/slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachmentWithItem:attachedToItem:attachmentAnchor:axisOfTranslation:](uiattachmentbehavior/slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachmentWithItem:attachedToItem:attachmentAnchor:](uiattachmentbehavior/fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachmentWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](uiattachmentbehavior/limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachmentWithItem:attachedToItem:attachmentAnchor:](uiattachmentbehavior/pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [initWithItem:attachedToAnchor:](uiattachmentbehavior/init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [initWithItem:attachedToItem:](uiattachmentbehavior/init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [initWithItem:offsetFromCenter:attachedToAnchor:](uiattachmentbehavior/init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [initWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](uiattachmentbehavior/init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

### Getting the attached items

- [items](uiattachmentbehavior/items.md): The dynamic items connected by the attachment behavior.

### Configuring an attachment behavior

- [anchorPoint](uiattachmentbehavior/anchorpoint.md): The anchor point for the attachment behavior, if any.
- [attachedBehaviorType](uiattachmentbehavior/attachedbehaviortype.md): The type of the attachment behavior.
- [damping](uiattachmentbehavior/damping.md): The amount of damping to apply to the attachment behavior.
- [frequency](uiattachmentbehavior/frequency.md): The frequency of oscillation for the attachment behavior.
- [length](uiattachmentbehavior/length.md): The distance, in points, between the two attachment points of the attachment behavior.
- [frictionTorque](uiattachmentbehavior/frictiontorque.md): The amount of force needed to overcome rotational forces around an anchor point.
- [attachmentRange](uiattachmentbehavior/attachmentrange.md): The range of motion for the attachment behavior.

### Constants

- [UIAttachmentBehaviorType](uiattachmentbehavior/attachmenttype.md): Constants indicating the type of the attachment behavior object.
- [UIFloatRange](uifloatrange.md): The range of motion for attached objects.
- [Float range constants](float-range-constants.md): Constants for specifying standard ranges.
- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.

## Relationships

### Inherits From

- [UIDynamicBehavior](uidynamicbehavior.md)

## See Also

### Behaviors

- [UIDynamicBehavior](uidynamicbehavior.md): An object that confers a behavioral configuration on one or more dynamic items, for their participation in 2D animation.
- [UICollisionBehavior](uicollisionbehavior.md): An object that confers to a specified array of dynamic items the ability to engage in collisions with each other and with the behavior’s specified boundaries.
- [UIFieldBehavior](uifieldbehavior.md): An object that applies field-based physics to dynamic items.
- [UIGravityBehavior](uigravitybehavior.md): An object that applies a gravity-like force to all of its associated dynamic items.
- [UIPushBehavior](uipushbehavior.md): A behavior that applies a continuous or instantaneous force to one or more dynamic items, causing those items to change position accordingly.
- [UISnapBehavior](uisnapbehavior.md): A spring-like behavior whose initial motion is damped over time so that the object settles at a specific point.

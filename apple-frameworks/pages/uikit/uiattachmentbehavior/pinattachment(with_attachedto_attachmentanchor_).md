> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/pinattachment(with:attachedto:attachmentanchor:)](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/pinattachment(with:attachedto:attachmentanchor:))

# pinAttachment(with:attachedTo:attachmentAnchor:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point

## Declaration

```swift
class func pinAttachment(with item1: any UIDynamicItem, attachedTo item2: any UIDynamicItem, attachmentAnchor point: CGPoint) -> Self
```

## Parameters

- `item1`: The first of two dynamic items connected by the attachment behavior.
- `item2`: The second of two dynamic items connected by the attachment behavior.
- `point`: The initial anchor point for each item. Specify this point in the coordinate system of the dynamic animator’s reference view. For more information about coordinate systems, see [UIDynamicAnimator](../uidynamicanimator.md).

<a id="return-value"></a>

## Return Value

A new attachment object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The behavior created by this method acts like a solid rod connecting each item to the specified anchor point. Each item is free to rotate around the anchor point, inscribing a circle whose radius is the defined at creation time by the distance between `point` and the item’s center. When forces act on one or both items, the anchor point and other item also move accordingly. The anchor point of the attachment does not interact with collision boundaries.

Use the [frictionTorque](frictiontorque.md) property to control the rotational behavior of the items. When the value of that property is `0`, items rotate freely in response to almost any impulse. Adding torque increases the amount of force that must be applied to an item before it rotates.

Use the [attachmentRange](attachmentrange.md) property to limit the amount of rotation for each item. This property lets you specify the minimum and maximum amount of rotation of the items from their starting positions.

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachment(with:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachment(with:attachedTo:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachment(with:attachedTo:attachmentAnchor:)](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachment(with:offsetFromCenter:attachedTo:offsetFromCenter:)](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [init(item:attachedToAnchor:)](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [init(item:attachedTo:)](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [init(item:offsetFromCenter:attachedToAnchor:)](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [init(item:offsetFromCenter:attachedTo:offsetFromCenter:)](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

# pinAttachmentWithItem:attachedToItem:attachmentAnchor: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point

## Declaration

```objectivec
+ (instancetype) pinAttachmentWithItem:(id<UIDynamicItem>) item1 attachedToItem:(id<UIDynamicItem>) item2 attachmentAnchor:(CGPoint) point;
```

## Parameters

- `item1`: The first of two dynamic items connected by the attachment behavior.
- `item2`: The second of two dynamic items connected by the attachment behavior.
- `point`: The initial anchor point for each item. Specify this point in the coordinate system of the dynamic animator’s reference view. For more information about coordinate systems, see [UIDynamicAnimator](../uidynamicanimator.md).

<a id="return-value"></a>

## Return Value

A new attachment object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The behavior created by this method acts like a solid rod connecting each item to the specified anchor point. Each item is free to rotate around the anchor point, inscribing a circle whose radius is the defined at creation time by the distance between `point` and the item’s center. When forces act on one or both items, the anchor point and other item also move accordingly. The anchor point of the attachment does not interact with collision boundaries.

Use the [frictionTorque](frictiontorque.md) property to control the rotational behavior of the items. When the value of that property is `0`, items rotate freely in response to almost any impulse. Adding torque increases the amount of force that must be applied to an item before it rotates.

Use the [attachmentRange](attachmentrange.md) property to limit the amount of rotation for each item. This property lets you specify the minimum and maximum amount of rotation of the items from their starting positions.

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachmentWithItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachmentWithItem:attachedToItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachmentWithItem:attachedToItem:attachmentAnchor:](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachmentWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [initWithItem:attachedToAnchor:](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [initWithItem:attachedToItem:](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [initWithItem:offsetFromCenter:attachedToAnchor:](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [initWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/slidingattachment(with:attachmentanchor:axisoftranslation:)](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/slidingattachment(with:attachmentanchor:axisoftranslation:))

# slidingAttachment(with:attachmentAnchor:axisOfTranslation:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an attachment behavior where one item slides along the specified axis.

## Declaration

```swift
class func slidingAttachment(with item: any UIDynamicItem, attachmentAnchor point: CGPoint, axisOfTranslation axis: CGVector) -> Self
```

## Parameters

- `item`: The dynamic item connected by the attachment behavior.
- `point`: The initial anchor point for the item. Specify this point in the coordinate system of the dynamic animator’s reference view. For more information about coordinate systems, see [UIDynamicAnimator](../uidynamicanimator.md).
- `axis`: The axis of translation, along which the item’s anchor point slides. The magnitude of the vector is ignored. Use the [attachmentRange](attachmentrange.md) property to define the distance that the anchor point can travel along the vector.

<a id="return-value"></a>

## Return Value

A new attachment object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The behavior created by this method acts like a solid rod between `item` and the anchor point whose initial position you specify using the `point` parameter. As forces are applied to the item, the item’s anchor point slides along the specified `axis`, causing the item to move with it. The item does not rotate relative to the axis of translation or anchor point.

The axis of translation is infinitely long initially, but you can change the length by assigning a new value to the [attachmentRange](attachmentrange.md) property. When specifying a new attachment range, remember that the value in point represents the value `0` on the axis. Any new range you specify must include `0`.

You can use this behavior to create an effect of an item sliding in a specific direction in response to other forces. For example, using the vector (0.0, 1.0) would cause the item to slide only vertically.

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachment(with:attachedTo:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachment(with:attachedTo:attachmentAnchor:)](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachment(with:offsetFromCenter:attachedTo:offsetFromCenter:)](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachment(with:attachedTo:attachmentAnchor:)](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [init(item:attachedToAnchor:)](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [init(item:attachedTo:)](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [init(item:offsetFromCenter:attachedToAnchor:)](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [init(item:offsetFromCenter:attachedTo:offsetFromCenter:)](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

# slidingAttachmentWithItem:attachmentAnchor:axisOfTranslation: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an attachment behavior where one item slides along the specified axis.

## Declaration

```objectivec
+ (instancetype) slidingAttachmentWithItem:(id<UIDynamicItem>) item attachmentAnchor:(CGPoint) point axisOfTranslation:(CGVector) axis;
```

## Parameters

- `item`: The dynamic item connected by the attachment behavior.
- `point`: The initial anchor point for the item. Specify this point in the coordinate system of the dynamic animator’s reference view. For more information about coordinate systems, see [UIDynamicAnimator](../uidynamicanimator.md).
- `axis`: The axis of translation, along which the item’s anchor point slides. The magnitude of the vector is ignored. Use the [attachmentRange](attachmentrange.md) property to define the distance that the anchor point can travel along the vector.

<a id="return-value"></a>

## Return Value

A new attachment object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The behavior created by this method acts like a solid rod between `item` and the anchor point whose initial position you specify using the `point` parameter. As forces are applied to the item, the item’s anchor point slides along the specified `axis`, causing the item to move with it. The item does not rotate relative to the axis of translation or anchor point.

The axis of translation is infinitely long initially, but you can change the length by assigning a new value to the [attachmentRange](attachmentrange.md) property. When specifying a new attachment range, remember that the value in point represents the value `0` on the axis. Any new range you specify must include `0`.

You can use this behavior to create an effect of an item sliding in a specific direction in response to other forces. For example, using the vector (0.0, 1.0) would cause the item to slide only vertically.

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachmentWithItem:attachedToItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachmentWithItem:attachedToItem:attachmentAnchor:](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachmentWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachmentWithItem:attachedToItem:attachmentAnchor:](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [initWithItem:attachedToAnchor:](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [initWithItem:attachedToItem:](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [initWithItem:offsetFromCenter:attachedToAnchor:](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [initWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

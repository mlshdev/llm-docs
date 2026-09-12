> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/limitattachment(with:offsetfromcenter:attachedto:offsetfromcenter:)](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/limitattachment(with:offsetfromcenter:attachedto:offsetfromcenter:))

# limitAttachment(with:offsetFromCenter:attachedTo:offsetFromCenter:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.

## Declaration

```swift
class func limitAttachment(with item1: any UIDynamicItem, offsetFromCenter offset1: UIOffset, attachedTo item2: any UIDynamicItem, offsetFromCenter offset2: UIOffset) -> Self
```

## Parameters

- `item1`: The first of two dynamic items connected by the attachment behavior.
- `offset1`: The offset from the center of `item1` that corresponds to the attachment point. Use an offset value to create rotational torque on the item. To pull the item from its center, specify [zero](../uioffset/zero.md).
- `item2`: The second of two dynamic items connected by the attachment behavior.
- `offset2`: The offset from the center of `item2` that corresponds to the attachment point. Use an offset value to create rotational torque on the item. To pull the item from its center, specify [zero](../uioffset/zero.md).

<a id="return-value"></a>

## Return Value

A new attachment object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The behavior created by this method is like connecting two items with a rope. The only constraint between the items is the maximum distance between them, which corresponds to the moment when the rope is taut. At other times, the objects move freely relative to one another.

The initial maximum distance between the items is set using the current position of the items. You can change the maximum distance by modifying the [length](length.md) property.

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachment(with:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachment(with:attachedTo:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachment(with:attachedTo:attachmentAnchor:)](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [pinAttachment(with:attachedTo:attachmentAnchor:)](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [init(item:attachedToAnchor:)](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [init(item:attachedTo:)](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [init(item:offsetFromCenter:attachedToAnchor:)](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [init(item:offsetFromCenter:attachedTo:offsetFromCenter:)](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

# limitAttachmentWithItem:offsetFromCenter:attachedToItem:offsetFromCenter: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.

## Declaration

```objectivec
+ (instancetype) limitAttachmentWithItem:(id<UIDynamicItem>) item1 offsetFromCenter:(UIOffset) offset1 attachedToItem:(id<UIDynamicItem>) item2 offsetFromCenter:(UIOffset) offset2;
```

## Parameters

- `item1`: The first of two dynamic items connected by the attachment behavior.
- `offset1`: The offset from the center of `item1` that corresponds to the attachment point. Use an offset value to create rotational torque on the item. To pull the item from its center, specify [UIOffsetZero](../uioffset/zero.md).
- `item2`: The second of two dynamic items connected by the attachment behavior.
- `offset2`: The offset from the center of `item2` that corresponds to the attachment point. Use an offset value to create rotational torque on the item. To pull the item from its center, specify [UIOffsetZero](../uioffset/zero.md).

<a id="return-value"></a>

## Return Value

A new attachment object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The behavior created by this method is like connecting two items with a rope. The only constraint between the items is the maximum distance between them, which corresponds to the moment when the rope is taut. At other times, the objects move freely relative to one another.

The initial maximum distance between the items is set using the current position of the items. You can change the maximum distance by modifying the [length](length.md) property.

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachmentWithItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachmentWithItem:attachedToItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachmentWithItem:attachedToItem:attachmentAnchor:](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [pinAttachmentWithItem:attachedToItem:attachmentAnchor:](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [initWithItem:attachedToAnchor:](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [initWithItem:attachedToItem:](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [initWithItem:offsetFromCenter:attachedToAnchor:](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [initWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/slidingattachment(with:attachedto:attachmentanchor:axisoftranslation:)](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/slidingattachment(with:attachedto:attachmentanchor:axisoftranslation:))

# slidingAttachment(with:attachedTo:attachmentAnchor:axisOfTranslation:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.

## Declaration

```swift
class func slidingAttachment(with item1: any UIDynamicItem, attachedTo item2: any UIDynamicItem, attachmentAnchor point: CGPoint, axisOfTranslation axis: CGVector) -> Self
```

## Parameters

- `item1`: The first of two dynamic items connected by the attachment behavior.
- `item2`: The second of two dynamic items connected by the attachment behavior.
- `point`: The initial anchor point for both items. Specify this point in the coordinate system of the dynamic animator’s reference view. For more information about coordinate systems, see [UIDynamicAnimator](../uidynamicanimator.md).
- `axis`: The axis of translation, along which the anchor points of the items slide.

<a id="return-value"></a>

## Return Value

A new attachment object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

For this behavior, each item acts like it is at the end of a solid rod attached to its anchor point. Both items start with the same anchor point, but as animations progress, each item’s anchor point is allowed to slide along the specified axis of translation independently. So if one item moves, it pushes the translation axis and the other item with it. The items do not rotate relative to the axis of translation or to each other, but the proximity of the items to one another varies depending on the movement of each item’s anchor point along the translation axis.

The axis of translation is infinitely long initially, but you can change the length by assigning a new value to the [attachmentRange](attachmentrange.md) property. When specifying a new attachment range, remember that the value in point represents the value `0` on the axis. Any new range you specify must include `0`.

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachment(with:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [fixedAttachment(with:attachedTo:attachmentAnchor:)](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachment(with:offsetFromCenter:attachedTo:offsetFromCenter:)](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachment(with:attachedTo:attachmentAnchor:)](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [init(item:attachedToAnchor:)](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [init(item:attachedTo:)](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [init(item:offsetFromCenter:attachedToAnchor:)](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [init(item:offsetFromCenter:attachedTo:offsetFromCenter:)](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

# slidingAttachmentWithItem:attachedToItem:attachmentAnchor:axisOfTranslation: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.

## Declaration

```objectivec
+ (instancetype) slidingAttachmentWithItem:(id<UIDynamicItem>) item1 attachedToItem:(id<UIDynamicItem>) item2 attachmentAnchor:(CGPoint) point axisOfTranslation:(CGVector) axis;
```

## Parameters

- `item1`: The first of two dynamic items connected by the attachment behavior.
- `item2`: The second of two dynamic items connected by the attachment behavior.
- `point`: The initial anchor point for both items. Specify this point in the coordinate system of the dynamic animator’s reference view. For more information about coordinate systems, see [UIDynamicAnimator](../uidynamicanimator.md).
- `axis`: The axis of translation, along which the anchor points of the items slide.

<a id="return-value"></a>

## Return Value

A new attachment object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

For this behavior, each item acts like it is at the end of a solid rod attached to its anchor point. Both items start with the same anchor point, but as animations progress, each item’s anchor point is allowed to slide along the specified axis of translation independently. So if one item moves, it pushes the translation axis and the other item with it. The items do not rotate relative to the axis of translation or to each other, but the proximity of the items to one another varies depending on the movement of each item’s anchor point along the translation axis.

The axis of translation is infinitely long initially, but you can change the length by assigning a new value to the [attachmentRange](attachmentrange.md) property. When specifying a new attachment range, remember that the value in point represents the value `0` on the axis. Any new range you specify must include `0`.

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachmentWithItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [fixedAttachmentWithItem:attachedToItem:attachmentAnchor:](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachmentWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachmentWithItem:attachedToItem:attachmentAnchor:](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [initWithItem:attachedToAnchor:](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [initWithItem:attachedToItem:](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [initWithItem:offsetFromCenter:attachedToAnchor:](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.
- [initWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

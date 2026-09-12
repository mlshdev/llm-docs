> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/init(item:offsetfromcenter:attachedtoanchor:)](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/init(item:offsetfromcenter:attachedtoanchor:))

# init(item:offsetFromCenter:attachedToAnchor:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.

## Declaration

```swift
init(item: any UIDynamicItem, offsetFromCenter offset: UIOffset, attachedToAnchor point: CGPoint)
```

## Parameters

- `item`: The dynamic item to attach to the specified `point`.
- `offset`: The offset from the center of `item` at which to create the attachment. Specifying [zero](../uioffset/zero.md) creates the attachment at the center of `item`.
- `point`: The anchor point for the item. Specify this point in the coordinate system of the dynamic animator’s reference view. For more information about coordinate systems, see [UIDynamicAnimator](../uidynamicanimator.md).

<a id="return-value"></a>

## Return Value

The initialized attachment behavior, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

The behavior created by this method acts like a solid rod connecting the item to the specified anchor point. The item is free to rotate around the anchor point, but its distance to the anchor point remains fixed. If you specify a nonzero offset value, the item is connected at the specified point instead of the center of the item.

The attachment object returned by this method is of type [UIAttachmentBehavior.AttachmentType.anchor](attachmenttype/anchor.md).

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachment(with:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachment(with:attachedTo:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachment(with:attachedTo:attachmentAnchor:)](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachment(with:offsetFromCenter:attachedTo:offsetFromCenter:)](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachment(with:attachedTo:attachmentAnchor:)](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [init(item:attachedToAnchor:)](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [init(item:attachedTo:)](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [init(item:offsetFromCenter:attachedTo:offsetFromCenter:)](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

# initWithItem:offsetFromCenter:attachedToAnchor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.

## Declaration

```objectivec
- (instancetype) initWithItem:(id<UIDynamicItem>) item offsetFromCenter:(UIOffset) offset attachedToAnchor:(CGPoint) point;
```

## Parameters

- `item`: The dynamic item to attach to the specified `point`.
- `offset`: The offset from the center of `item` at which to create the attachment. Specifying [UIOffsetZero](../uioffset/zero.md) creates the attachment at the center of `item`.
- `point`: The anchor point for the item. Specify this point in the coordinate system of the dynamic animator’s reference view. For more information about coordinate systems, see [UIDynamicAnimator](../uidynamicanimator.md).

<a id="return-value"></a>

## Return Value

The initialized attachment behavior, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

The behavior created by this method acts like a solid rod connecting the item to the specified anchor point. The item is free to rotate around the anchor point, but its distance to the anchor point remains fixed. If you specify a nonzero offset value, the item is connected at the specified point instead of the center of the item.

The attachment object returned by this method is of type [UIAttachmentBehaviorTypeAnchor](attachmenttype/anchor.md).

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachmentWithItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachmentWithItem:attachedToItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachmentWithItem:attachedToItem:attachmentAnchor:](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachmentWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachmentWithItem:attachedToItem:attachmentAnchor:](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [initWithItem:attachedToAnchor:](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [initWithItem:attachedToItem:](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [initWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](init%28item_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

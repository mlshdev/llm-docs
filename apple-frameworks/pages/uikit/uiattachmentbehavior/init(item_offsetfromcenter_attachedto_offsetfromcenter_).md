> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/init(item:offsetfromcenter:attachedto:offsetfromcenter:)](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/init(item:offsetfromcenter:attachedto:offsetfromcenter:))

# init(item:offsetFromCenter:attachedTo:offsetFromCenter:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

## Declaration

```swift
init(item item1: any UIDynamicItem, offsetFromCenter offset1: UIOffset, attachedTo item2: any UIDynamicItem, offsetFromCenter offset2: UIOffset)
```

## Parameters

- `item1`: The first of two dynamic items connected by the attachment behavior.
- `offset1`: The offset from the center of `item1` at which to create the attachment. Specifying [zero](../uioffset/zero.md) creates the attachment at the center of `item1`.
- `item2`: The second of two dynamic items connected by the attachment behavior.
- `offset2`: The offset from the center of `item2` at which to create the attachment. Specifying [zero](../uioffset/zero.md) creates the attachment at the center of `item2`.

<a id="return-value"></a>

## Return Value

The initialized attachment behavior, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

The behavior created by this method acts like a solid rod connecting the two items at the specified offsets from their center points. Forces applied to one item push or pull the other item accordingly. The items are free to rotate around each other but always remain the same distance apart.

The attachment object returned by this method is of type [UIAttachmentBehavior.AttachmentType.items](attachmenttype/items.md).

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachment(with:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachment(with:attachedTo:attachmentAnchor:axisOfTranslation:)](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachment(with:attachedTo:attachmentAnchor:)](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachment(with:offsetFromCenter:attachedTo:offsetFromCenter:)](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachment(with:attachedTo:attachmentAnchor:)](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [init(item:attachedToAnchor:)](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [init(item:attachedTo:)](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [init(item:offsetFromCenter:attachedToAnchor:)](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.

# initWithItem:offsetFromCenter:attachedToItem:offsetFromCenter: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes an attachment behavior that connects a specified point in one dynamic item to a specified point in another dynamic item.

## Declaration

```objectivec
- (instancetype) initWithItem:(id<UIDynamicItem>) item1 offsetFromCenter:(UIOffset) offset1 attachedToItem:(id<UIDynamicItem>) item2 offsetFromCenter:(UIOffset) offset2;
```

## Parameters

- `item1`: The first of two dynamic items connected by the attachment behavior.
- `offset1`: The offset from the center of `item1` at which to create the attachment. Specifying [UIOffsetZero](../uioffset/zero.md) creates the attachment at the center of `item1`.
- `item2`: The second of two dynamic items connected by the attachment behavior.
- `offset2`: The offset from the center of `item2` at which to create the attachment. Specifying [UIOffsetZero](../uioffset/zero.md) creates the attachment at the center of `item2`.

<a id="return-value"></a>

## Return Value

The initialized attachment behavior, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

The behavior created by this method acts like a solid rod connecting the two items at the specified offsets from their center points. Forces applied to one item push or pull the other item accordingly. The items are free to rotate around each other but always remain the same distance apart.

The attachment object returned by this method is of type [UIAttachmentBehaviorTypeItems](attachmenttype/items.md).

## See Also

### Creating and initializing attachment behavior objects

- [slidingAttachmentWithItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where one item slides along the specified axis.
- [slidingAttachmentWithItem:attachedToItem:attachmentAnchor:axisOfTranslation:](slidingattachment%28with_attachedto_attachmentanchor_axisoftranslation_%29.md): Creates and returns an attachment behavior where two items are fixed to points that slide along the specified axis.
- [fixedAttachmentWithItem:attachedToItem:attachmentAnchor:](fixedattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are fixed together through the specified anchor point.
- [limitAttachmentWithItem:offsetFromCenter:attachedToItem:offsetFromCenter:](limitattachment%28with_offsetfromcenter_attachedto_offsetfromcenter_%29.md): Creates and returns an attachment behavior object where two items are constrained by a maximum distance from one another.
- [pinAttachmentWithItem:attachedToItem:attachmentAnchor:](pinattachment%28with_attachedto_attachmentanchor_%29.md): Creates and returns an attachment behavior where the two items are pinned to, and move around, an anchor point
- [initWithItem:attachedToAnchor:](init%28item_attachedtoanchor_%29.md): Initializes a behavior where the center of a dynamic item is attached to the specified anchor point.
- [initWithItem:attachedToItem:](init%28item_attachedto_%29.md): Initializes a behavior where the centers of two dynamic items are attached to each other.
- [initWithItem:offsetFromCenter:attachedToAnchor:](init%28item_offsetfromcenter_attachedtoanchor_%29.md): Initializes a behavior where the specified point in a dynamic item is attached to an anchor point.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentlayout/attachmentbounds(for:location:textcontainer:proposedlinefragment:position:)](https://developer.apple.com/documentation/uikit/nstextattachmentlayout/attachmentbounds(for:location:textcontainer:proposedlinefragment:position:))

# attachmentBounds(for:location:textContainer:proposedLineFragment:position:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the layout bounds of the attachment you specify.

## Declaration

```swift
func attachmentBounds(for attributes: [NSAttributedString.Key : Any], location: any NSTextLocation, textContainer: NSTextContainer?, proposedLineFragment: CGRect, position: CGPoint) -> CGRect
```

## Parameters

- `attributes`: A dictionary of [NSAttributedString.Key](../../foundation/nsattributedstring/key.md) attributes.
- `location`: An [NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The [NSTextContainer](../nstextcontainer.md) that contains the source text.
- `proposedLineFragment`: A [CGRect](../../corefoundation/cgrect.md) that describes the boundaries of the line fragment.
- `position`: A [CGPoint](../../corefoundation/cgpoint.md) inside `proposedLineFragment`.

<a id="return-value"></a>

## Return Value

Returns a [CGRect](../../corefoundation/cgrect.md) that describes the boundaries of the attachment, or `CGRectZero.`

<a id="Discussion"></a>

## Discussion

The framework interprets the bounds origin to match `position` inside `proposedLineFragment`. The default [NSTextAttachment](../nstextattachment.md) implementation returns bounds if the value isn’t equivalent to [CGRectZero](../../coregraphics/cgrectzero.md); otherwise, it derives the bounds value from `image.size`. Conforming objects can implement more sophisticated logic for negotiating the frame size based on the available container space and proposed line fragment rectangle.

## See Also

### Determining the characteristics of an attachment

- [image(for:attributes:location:textContainer:)](image%28for_attributes_location_textcontainer_%29.md): Returns the image object rendered at the bounds and inside the text container you specify.
- [viewProvider(for:location:textContainer:)](viewprovider%28for_location_textcontainer_%29.md): Returns the text attachment view provider corresponding to the file type.

# attachmentBoundsForAttributes:location:textContainer:proposedLineFragment:position: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the layout bounds of the attachment you specify.

## Declaration

```objectivec
- (CGRect) attachmentBoundsForAttributes:(NSDictionary<NSString *,id> *) attributes location:(id<NSTextLocation>) location textContainer:(NSTextContainer *) textContainer proposedLineFragment:(CGRect) proposedLineFragment position:(CGPoint) position;
```

## Parameters

- `attributes`: A dictionary of [NSAttributedStringKey](../../foundation/nsattributedstring/key.md) attributes.
- `location`: An [NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The [NSTextContainer](../nstextcontainer.md) that contains the source text.
- `proposedLineFragment`: A [CGRect](../../corefoundation/cgrect.md) that describes the boundaries of the line fragment.
- `position`: A [CGPoint](../../corefoundation/cgpoint.md) inside `proposedLineFragment`.

<a id="return-value"></a>

## Return Value

Returns a [CGRect](../../corefoundation/cgrect.md) that describes the boundaries of the attachment, or `CGRectZero.`

<a id="Discussion"></a>

## Discussion

The framework interprets the bounds origin to match `position` inside `proposedLineFragment`. The default [NSTextAttachment](../nstextattachment.md) implementation returns bounds if the value isn’t equivalent to [CGRectZero](../../coregraphics/cgrectzero.md); otherwise, it derives the bounds value from `image.size`. Conforming objects can implement more sophisticated logic for negotiating the frame size based on the available container space and proposed line fragment rectangle.

## See Also

### Determining the characteristics of an attachment

- [imageForBounds:attributes:location:textContainer:](image%28for_attributes_location_textcontainer_%29.md): Returns the image object rendered at the bounds and inside the text container you specify.
- [viewProviderForParentView:location:textContainer:](viewprovider%28for_location_textcontainer_%29.md): Returns the text attachment view provider corresponding to the file type.

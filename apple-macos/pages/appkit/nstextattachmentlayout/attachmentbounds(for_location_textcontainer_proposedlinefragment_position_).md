> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentlayout/attachmentbounds(for:location:textcontainer:proposedlinefragment:position:)](https://developer.apple.com/documentation/appkit/nstextattachmentlayout/attachmentbounds(for:location:textcontainer:proposedlinefragment:position:))

# attachmentBounds(for:location:textContainer:proposedLineFragment:position:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the layout bounds of the attachment you specify.

## Declaration

```swift
func attachmentBounds(for attributes: [NSAttributedString.Key : Any], location: any NSTextLocation, textContainer: NSTextContainer?, proposedLineFragment: CGRect, position: CGPoint) -> CGRect
```

## Parameters

- `attributes`: A dictionary of [NSAttributedString.Key](https://developer.apple.com/documentation/foundation/nsattributedstring/key) attributes.
- `location`: An [NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The [NSTextContainer](../nstextcontainer.md) that contains the source text.
- `proposedLineFragment`: A [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) that describes the boundaries of the line fragment.
- `position`: A [CGPoint](https://developer.apple.com/documentation/corefoundation/cgpoint) inside `proposedLineFragment`.

<a id="return-value"></a>

## Return Value

Returns a [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) that describes the boundaries of the attachment, or `CGRectZero.`

<a id="Discussion"></a>

## Discussion

The framework interprets the bounds origin to match `position` inside `proposedLineFragment`. The default [NSTextAttachment](../nstextattachment.md) implementation returns bounds if the value isn’t equivalent to [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero); otherwise, it derives the bounds value from `image.size`. Conforming objects can implement more sophisticated logic for negotiating the frame size based on the available container space and proposed line fragment rectangle.

## See Also

### Determining the characteristics of an attachment

- [image(for:attributes:location:textContainer:)](image%28for_attributes_location_textcontainer_%29.md): Returns the image object rendered at the bounds and inside the text container you specify.
- [viewProvider(for:location:textContainer:)](viewprovider%28for_location_textcontainer_%29.md): Returns the text attachment view provider corresponding to the file type.

# attachmentBoundsForAttributes:location:textContainer:proposedLineFragment:position: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the layout bounds of the attachment you specify.

## Declaration

```objectivec
- (CGRect) attachmentBoundsForAttributes:(NSDictionary<NSString *,id> *) attributes location:(id<NSTextLocation>) location textContainer:(NSTextContainer *) textContainer proposedLineFragment:(CGRect) proposedLineFragment position:(CGPoint) position;
```

## Parameters

- `attributes`: A dictionary of [NSAttributedStringKey](https://developer.apple.com/documentation/foundation/nsattributedstring/key) attributes.
- `location`: An [NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The [NSTextContainer](../nstextcontainer.md) that contains the source text.
- `proposedLineFragment`: A [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) that describes the boundaries of the line fragment.
- `position`: A [CGPoint](https://developer.apple.com/documentation/corefoundation/cgpoint) inside `proposedLineFragment`.

<a id="return-value"></a>

## Return Value

Returns a [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) that describes the boundaries of the attachment, or `CGRectZero.`

<a id="Discussion"></a>

## Discussion

The framework interprets the bounds origin to match `position` inside `proposedLineFragment`. The default [NSTextAttachment](../nstextattachment.md) implementation returns bounds if the value isn’t equivalent to [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero); otherwise, it derives the bounds value from `image.size`. Conforming objects can implement more sophisticated logic for negotiating the frame size based on the available container space and proposed line fragment rectangle.

## See Also

### Determining the characteristics of an attachment

- [imageForBounds:attributes:location:textContainer:](image%28for_attributes_location_textcontainer_%29.md): Returns the image object rendered at the bounds and inside the text container you specify.
- [viewProviderForParentView:location:textContainer:](viewprovider%28for_location_textcontainer_%29.md): Returns the text attachment view provider corresponding to the file type.

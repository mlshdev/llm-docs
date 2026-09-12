> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentlayout/image(for:attributes:location:textcontainer:)](https://developer.apple.com/documentation/uikit/nstextattachmentlayout/image(for:attributes:location:textcontainer:))

# image(for:attributes:location:textContainer:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the image object rendered at the bounds and inside the text container you specify.

## Declaration

```swift
func image(for bounds: CGRect, attributes: [NSAttributedString.Key : Any] = [:], location: any NSTextLocation, textContainer: NSTextContainer?) -> UIImage?
```

## Parameters

- `bounds`: The [CGRect](../../corefoundation/cgrect.md) that presents the image boundaries inside `textContainer`.
- `attributes`: A dictionary of [NSAttributedString.Key](../../foundation/nsattributedstring/key.md) attributes.
- `location`: An [NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The [NSTextContainer](../nstextcontainer.md) that contains the source text.

<a id="return-value"></a>

## Return Value

An optional image object.

<a id="Discussion"></a>

## Discussion

A custom implementation should return an image appropriate for the target rendering context that you derive by arguments to this method. The default [NSTextAttachment](../nstextattachment.md) implementation returns the contents of the `image` property when non-`nil`. If the `image` property is `nil`, it returns an image based on the `contents` and `fileType` properties.

## See Also

### Determining the characteristics of an attachment

- [attachmentBounds(for:location:textContainer:proposedLineFragment:position:)](attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md): Returns the layout bounds of the attachment you specify.
- [viewProvider(for:location:textContainer:)](viewprovider%28for_location_textcontainer_%29.md): Returns the text attachment view provider corresponding to the file type.

# imageForBounds:attributes:location:textContainer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the image object rendered at the bounds and inside the text container you specify.

## Declaration

```objectivec
- (UIImage *) imageForBounds:(CGRect) bounds attributes:(NSDictionary<NSString *,id> *) attributes location:(id<NSTextLocation>) location textContainer:(NSTextContainer *) textContainer;
```

## Parameters

- `bounds`: The [CGRect](../../corefoundation/cgrect.md) that presents the image boundaries inside `textContainer`.
- `attributes`: A dictionary of [NSAttributedStringKey](../../foundation/nsattributedstring/key.md) attributes.
- `location`: An [NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The [NSTextContainer](../nstextcontainer.md) that contains the source text.

<a id="return-value"></a>

## Return Value

An optional image object.

<a id="Discussion"></a>

## Discussion

A custom implementation should return an image appropriate for the target rendering context that you derive by arguments to this method. The default [NSTextAttachment](../nstextattachment.md) implementation returns the contents of the `image` property when non-`nil`. If the `image` property is `nil`, it returns an image based on the `contents` and `fileType` properties.

## See Also

### Determining the characteristics of an attachment

- [attachmentBoundsForAttributes:location:textContainer:proposedLineFragment:position:](attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md): Returns the layout bounds of the attachment you specify.
- [viewProviderForParentView:location:textContainer:](viewprovider%28for_location_textcontainer_%29.md): Returns the text attachment view provider corresponding to the file type.

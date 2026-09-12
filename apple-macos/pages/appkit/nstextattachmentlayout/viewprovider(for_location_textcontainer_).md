> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentlayout/viewprovider(for:location:textcontainer:)](https://developer.apple.com/documentation/appkit/nstextattachmentlayout/viewprovider(for:location:textcontainer:))

# viewProvider(for:location:textContainer:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the text attachment view provider corresponding to the file type.

## Declaration

```swift
func viewProvider(for parentView: NSView?, location: any NSTextLocation, textContainer: NSTextContainer?) -> NSTextAttachmentViewProvider?
```

## Parameters

- `parentView`: The parent view.
- `location`: An \<[NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The[NSTextContainer](../nstextcontainer.md) that contains the source text.

<a id="return-value"></a>

## Return Value

An [NSTextAttachmentViewProvider](../nstextattachmentviewprovider.md).

<a id="Discussion"></a>

## Discussion

The default implementation queries the text attachment view provider class using the [textAttachmentViewProviderClass(forFileType:)](../nstextattachment/textattachmentviewproviderclass%28forfiletype_%29.md) method of [NSTextAttachment](../nstextattachment.md). When non-`nil`, it instantiates a view, then, fills properties declared in `NSTextAttachmentViewProvider` if implemented.

## See Also

### Determining the characteristics of an attachment

- [attachmentBounds(for:location:textContainer:proposedLineFragment:position:)](attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md): Returns the layout bounds of the attachment you specify.
- [image(for:attributes:location:textContainer:)](image%28for_attributes_location_textcontainer_%29.md): Returns the image object rendered at the bounds and inside the text container you specify.

# viewProviderForParentView:location:textContainer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the text attachment view provider corresponding to the file type.

## Declaration

```objectivec
- (NSTextAttachmentViewProvider *) viewProviderForParentView:(NSView *) parentView location:(id<NSTextLocation>) location textContainer:(NSTextContainer *) textContainer;
```

## Parameters

- `parentView`: The parent view.
- `location`: An \<[NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The[NSTextContainer](../nstextcontainer.md) that contains the source text.

<a id="return-value"></a>

## Return Value

An [NSTextAttachmentViewProvider](../nstextattachmentviewprovider.md).

<a id="Discussion"></a>

## Discussion

The default implementation queries the text attachment view provider class using the [textAttachmentViewProviderClassForFileType:](../nstextattachment/textattachmentviewproviderclass%28forfiletype_%29.md) method of [NSTextAttachment](../nstextattachment.md). When non-`nil`, it instantiates a view, then, fills properties declared in `NSTextAttachmentViewProvider` if implemented.

## See Also

### Determining the characteristics of an attachment

- [attachmentBoundsForAttributes:location:textContainer:proposedLineFragment:position:](attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md): Returns the layout bounds of the attachment you specify.
- [imageForBounds:attributes:location:textContainer:](image%28for_attributes_location_textcontainer_%29.md): Returns the image object rendered at the bounds and inside the text container you specify.

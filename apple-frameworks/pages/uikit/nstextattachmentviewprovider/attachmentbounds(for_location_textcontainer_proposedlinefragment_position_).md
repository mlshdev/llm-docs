> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentviewprovider/attachmentbounds(for:location:textcontainer:proposedlinefragment:position:)](https://developer.apple.com/documentation/uikit/nstextattachmentviewprovider/attachmentbounds(for:location:textcontainer:proposedlinefragment:position:))

# attachmentBounds(for:location:textContainer:proposedLineFragment:position:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the layout bounds for an attachment at a specific text location that contains the text attributes you specify.

## Declaration

```swift
func attachmentBounds(for attributes: [NSAttributedString.Key : Any], location: any NSTextLocation, textContainer: NSTextContainer?, proposedLineFragment: CGRect, position: CGPoint) -> CGRect
```

## Parameters

- `attributes`: A dictionary that contains a list of key and attribute pairs that describe the customization of the string.
- `location`: An [NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The [NSTextContainer](../nstextcontainer.md) that contains the source string.
- `proposedLineFragment`: A [CGRect](../../corefoundation/cgrect.md) that describes the boundaries of the line fragment.
- `position`: A [CGPoint](../../corefoundation/cgpoint.md) inside `proposedLineFragment`.

<a id="return-value"></a>

## Return Value

Returns a [CGRect](../../corefoundation/cgrect.md) that describes the bounds of the attachment.

# attachmentBoundsForAttributes:location:textContainer:proposedLineFragment:position: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the layout bounds for an attachment at a specific text location that contains the text attributes you specify.

## Declaration

```objectivec
- (CGRect) attachmentBoundsForAttributes:(NSDictionary<NSString *,id> *) attributes location:(id<NSTextLocation>) location textContainer:(NSTextContainer *) textContainer proposedLineFragment:(CGRect) proposedLineFragment position:(CGPoint) position;
```

## Parameters

- `attributes`: A dictionary that contains a list of key and attribute pairs that describe the customization of the string.
- `location`: An [NSTextLocation](../nstextlocation.md) that indicates that start of the string.
- `textContainer`: The [NSTextContainer](../nstextcontainer.md) that contains the source string.
- `proposedLineFragment`: A [CGRect](../../corefoundation/cgrect.md) that describes the boundaries of the line fragment.
- `position`: A [CGPoint](../../corefoundation/cgpoint.md) inside `proposedLineFragment`.

<a id="return-value"></a>

## Return Value

Returns a [CGRect](../../corefoundation/cgrect.md) that describes the bounds of the attachment.

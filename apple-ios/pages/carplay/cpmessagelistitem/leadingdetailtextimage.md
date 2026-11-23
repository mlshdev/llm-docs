> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitem/leadingdetailtextimage

# leadingDetailTextImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An image to display before the row’s detail text.

## Declaration

```swift
@NSCopying var leadingDetailTextImage: UIImage? { get set }
```

<a id="discussion"></a>

## Discussion

CarPlay places the image in front of the text in [detailText](detailtext.md) and on the same line. If you specify an image larger or smaller than [CPMaximumMessageItemLeadingDetailTextImageSize](../cpmaximummessageitemleadingdetailtextimagesize.md), CarPlay scales your image to those dimensions. Use the image to add a visual element for your conversation or contact. For example, if you display the person’s phone number in the detail text, you might display an icon to indicate whether it’s their home or cellular phone.

## See Also

### Getting the row content

- [text](text.md): The primary text to display in the message list item’s row.
- [detailText](detailtext.md): Additional text to display less prominently below the row’s main text.
- [trailingText](trailingtext.md): Additional text to display after the trailing configuration items.

# leadingDetailTextImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An image to display before the row’s detail text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * leadingDetailTextImage;
```

<a id="discussion"></a>

## Discussion

CarPlay places the image in front of the text in [detailText](detailtext.md) and on the same line. If you specify an image larger or smaller than [CPMaximumMessageItemLeadingDetailTextImageSize](../cpmaximummessageitemleadingdetailtextimagesize.md), CarPlay scales your image to those dimensions. Use the image to add a visual element for your conversation or contact. For example, if you display the person’s phone number in the detail text, you might display an icon to indicate whether it’s their home or cellular phone.

## See Also

### Getting the row content

- [text](text.md): The primary text to display in the message list item’s row.
- [detailText](detailtext.md): Additional text to display less prominently below the row’s main text.
- [trailingText](trailingtext.md): Additional text to display after the trailing configuration items.

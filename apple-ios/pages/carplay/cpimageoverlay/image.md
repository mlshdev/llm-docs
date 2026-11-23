> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageoverlay/image

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The image to display at top of the thumbnail.

## Declaration

```swift
var image: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

Specify the image at initialization time. The image appears on the top edge of the thumbnail and with the placement in the [alignment](alignment-swift.property.md) property. If you initialized the overlay with text information, the value in this property is `nil`.

## See Also

### Getting the overlay details

- [text](text.md): The text to display in a badge at the top of the thumbnail.
- [textColor](textcolor.md): The color to apply to the badge’s text.
- [backgroundColor](backgroundcolor.md): The color to display behind the badge’s text.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The image to display at top of the thumbnail.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIImage * image;
```

<a id="discussion"></a>

## Discussion

Specify the image at initialization time. The image appears on the top edge of the thumbnail and with the placement in the [alignment](alignment-swift.property.md) property. If you initialized the overlay with text information, the value in this property is `nil`.

## See Also

### Getting the overlay details

- [text](text.md): The text to display in a badge at the top of the thumbnail.
- [textColor](textcolor.md): The color to apply to the badge’s text.
- [backgroundColor](backgroundcolor.md): The color to display behind the badge’s text.

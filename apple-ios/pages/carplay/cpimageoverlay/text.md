> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageoverlay/text

# text (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The text to display in a badge at the top of the thumbnail.

## Declaration

```swift
var text: String? { get }
```

<a id="discussion"></a>

## Discussion

Specify the text to display at initialization time. The text appears on a badge background using the colors you specified and with the placement in the [alignment](alignment-swift.property.md) property. If you initialized the overlay with an image, the value in this property is `nil`.

## See Also

### Getting the overlay details

- [image](image.md): The image to display at top of the thumbnail.
- [textColor](textcolor.md): The color to apply to the badge’s text.
- [backgroundColor](backgroundcolor.md): The color to display behind the badge’s text.

# text (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The text to display in a badge at the top of the thumbnail.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * text;
```

<a id="discussion"></a>

## Discussion

Specify the text to display at initialization time. The text appears on a badge background using the colors you specified and with the placement in the [alignment](alignment-swift.property.md) property. If you initialized the overlay with an image, the value in this property is `nil`.

## See Also

### Getting the overlay details

- [image](image.md): The image to display at top of the thumbnail.
- [textColor](textcolor.md): The color to apply to the badge’s text.
- [backgroundColor](backgroundcolor.md): The color to display behind the badge’s text.

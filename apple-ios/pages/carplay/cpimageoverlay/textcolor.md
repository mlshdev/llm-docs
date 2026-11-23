> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageoverlay/textcolor

# textColor (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The color to apply to the badge’s text.

## Declaration

```swift
var textColor: UIColor? { get }
```

<a id="discussion"></a>

## Discussion

Specify the text color at initialization time.  If you initialized the overlay with an image, the value in this property is `nil`.

## See Also

### Getting the overlay details

- [image](image.md): The image to display at top of the thumbnail.
- [text](text.md): The text to display in a badge at the top of the thumbnail.
- [backgroundColor](backgroundcolor.md): The color to display behind the badge’s text.

# textColor (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The color to apply to the badge’s text.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIColor * textColor;
```

<a id="discussion"></a>

## Discussion

Specify the text color at initialization time.  If you initialized the overlay with an image, the value in this property is `nil`.

## See Also

### Getting the overlay details

- [image](image.md): The image to display at top of the thumbnail.
- [text](text.md): The text to display in a badge at the top of the thumbnail.
- [backgroundColor](backgroundcolor.md): The color to display behind the badge’s text.

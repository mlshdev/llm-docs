> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageoverlay/backgroundcolor

# backgroundColor (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The color to display behind the badge’s text.

## Declaration

```swift
var backgroundColor: UIColor? { get }
```

<a id="discussion"></a>

## Discussion

Specify the background color at initialization time. If you initialized the overlay with an image, the value in this property is `nil`.

## See Also

### Getting the overlay details

- [image](image.md): The image to display at top of the thumbnail.
- [text](text.md): The text to display in a badge at the top of the thumbnail.
- [textColor](textcolor.md): The color to apply to the badge’s text.

# backgroundColor (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The color to display behind the badge’s text.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIColor * backgroundColor;
```

<a id="discussion"></a>

## Discussion

Specify the background color at initialization time. If you initialized the overlay with an image, the value in this property is `nil`.

## See Also

### Getting the overlay details

- [image](image.md): The image to display at top of the thumbnail.
- [text](text.md): The text to display in a badge at the top of the thumbnail.
- [textColor](textcolor.md): The color to apply to the badge’s text.

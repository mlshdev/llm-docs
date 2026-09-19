> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmapbutton/focusedimage

# focusedImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image to display when focus is on the button.

## Declaration

```swift
var focusedImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

If `focusedImage` is nil, the button uses [image](image.md) as the default, creating a focused image using the alpha values from the image.

## See Also

### Providing Button Images

- [image](image.md): The image to display on the button.

# focusedImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image to display when focus is on the button.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * focusedImage;
```

<a id="Discussion"></a>

## Discussion

If `focusedImage` is nil, the button uses [image](image.md) as the default, creating a focused image using the alpha values from the image.

## See Also

### Providing Button Images

- [image](image.md): The image to display on the button.

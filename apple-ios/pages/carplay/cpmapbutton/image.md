> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmapbutton/image](https://developer.apple.com/documentation/carplay/cpmapbutton/image)

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image to display on the button.

## Declaration

```swift
var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

This property doesn’t support animated images. If it’s set with an animated image, the button displays the first image in the animated sequence.

## See Also

### Providing Button Images

- [focusedImage](focusedimage.md): The image to display when focus is on the button.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image to display on the button.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

This property doesn’t support animated images. If it’s set with an animated image, the button displays the first image in the animated sequence.

## See Also

### Providing Button Images

- [focusedImage](focusedimage.md): The image to display when focus is on the button.

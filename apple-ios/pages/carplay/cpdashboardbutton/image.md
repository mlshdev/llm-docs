> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpdashboardbutton/image](https://developer.apple.com/documentation/carplay/cpdashboardbutton/image)

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The image the button displays.

## Declaration

```swift
var image: UIImage { get }
```

<a id="Discussion"></a>

## Discussion

CarPlays doesn’t support animated images. If you provide an animated image, the button displays only the first image in the animation sequence. The maximum supported image size is 30 x 30 points.

## See Also

### Accessing the Button Configuration

- [titleVariants](titlevariants.md): The array of title variants for the button.
- [subtitleVariants](subtitlevariants.md): The array of subtitle variants for the button.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The image the button displays.

## Declaration

```objectivec
@property (nonatomic, readonly) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

CarPlays doesn’t support animated images. If you provide an animated image, the button displays only the first image in the animation sequence. The maximum supported image size is 30 x 30 points.

## See Also

### Accessing the Button Configuration

- [titleVariants](titlevariants.md): The array of title variants for the button.
- [subtitleVariants](subtitlevariants.md): The array of subtitle variants for the button.

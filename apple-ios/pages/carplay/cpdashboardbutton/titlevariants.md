> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpdashboardbutton/titlevariants](https://developer.apple.com/documentation/carplay/cpdashboardbutton/titlevariants)

# titleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The array of title variants for the button.

## Declaration

```swift
var titleVariants: [String] { get }
```

<a id="Discussion"></a>

## Discussion

An array of title variants for this button in an arrangement from most- to least-preferred. The system selects a title from this array that best fits the available space. You provide the title variants to [init(titleVariants:subtitleVariants:image:handler:)](init%28titlevariants_subtitlevariants_image_handler_%29.md) as localized, displayable content.

## See Also

### Accessing the Button Configuration

- [subtitleVariants](subtitlevariants.md): The array of subtitle variants for the button.
- [image](image.md): The image the button displays.

# titleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The array of title variants for the button.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * titleVariants;
```

<a id="Discussion"></a>

## Discussion

An array of title variants for this button in an arrangement from most- to least-preferred. The system selects a title from this array that best fits the available space. You provide the title variants to [initWithTitleVariants:subtitleVariants:image:handler:](init%28titlevariants_subtitlevariants_image_handler_%29.md) as localized, displayable content.

## See Also

### Accessing the Button Configuration

- [subtitleVariants](subtitlevariants.md): The array of subtitle variants for the button.
- [image](image.md): The image the button displays.

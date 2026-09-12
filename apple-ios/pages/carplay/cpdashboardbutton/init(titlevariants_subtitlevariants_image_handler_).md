> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpdashboardbutton/init(titlevariants:subtitlevariants:image:handler:)](https://developer.apple.com/documentation/carplay/cpdashboardbutton/init(titlevariants:subtitlevariants:image:handler:))

# init(titleVariants:subtitleVariants:image:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

Creates a dashboard button that displays a title, an optional subtitle, and an image.

## Declaration

```swift
init(titleVariants: [String], subtitleVariants: [String], image: UIImage, handler: ((CPDashboardButton) -> Void)? = nil)
```

## Parameters

- `titleVariants`: An array of string variants to use for the button’s title.
- `subtitleVariants`: An array of string variants to use for the button’s subtitle.
- `image`: The image to display on the button.
- `handler`: The block that CarPlay invokes when the user taps the button.

<a id="return-value"></a>

## Return Value

A button that displays the provided title, subtitle, and image.

<a id="Discussion"></a>

## Discussion

You must provide at least one, nonzero length title variant, and an image for the button to display. CarPlay displays the first variant that fits into the available screen space, so arrange your title and subtitle variant arrays from most- to least-preferred. Provide the variant strings as localized, displayable content.

The maximum supported image size is 30 x 30 points.

# initWithTitleVariants:subtitleVariants:image:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

Creates a dashboard button that displays a title, an optional subtitle, and an image.

## Declaration

```objectivec
- (instancetype) initWithTitleVariants:(NSArray<NSString *> *) titleVariants subtitleVariants:(NSArray<NSString *> *) subtitleVariants image:(UIImage *) image handler:(void (^)(CPDashboardButton *barButton)) handler;
```

## Parameters

- `titleVariants`: An array of string variants to use for the button’s title.
- `subtitleVariants`: An array of string variants to use for the button’s subtitle.
- `image`: The image to display on the button.
- `handler`: The block that CarPlay invokes when the user taps the button.

<a id="return-value"></a>

## Return Value

A button that displays the provided title, subtitle, and image.

<a id="Discussion"></a>

## Discussion

You must provide at least one, nonzero length title variant, and an image for the button to display. CarPlay displays the first variant that fits into the available screen space, so arrange your title and subtitle variant arrays from most- to least-preferred. Provide the variant strings as localized, displayable content.

The maximum supported image size is 30 x 30 points.

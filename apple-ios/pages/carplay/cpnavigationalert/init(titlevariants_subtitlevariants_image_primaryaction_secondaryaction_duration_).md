> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/init(titlevariants:subtitlevariants:image:primaryaction:secondaryaction:duration:)](https://developer.apple.com/documentation/carplay/cpnavigationalert/init(titlevariants:subtitlevariants:image:primaryaction:secondaryaction:duration:))

# init(titleVariants:subtitleVariants:image:primaryAction:secondaryAction:duration:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a navigation alert.

## Declaration

```swift
init(titleVariants: [String], subtitleVariants: [String]?, image: UIImage?, primaryAction: CPAlertAction, secondaryAction: CPAlertAction?, duration: TimeInterval)
```

## Parameters

- `titleVariants`: An array of localized, displayable titles in order of preference. CarPlay displays the title that fits in the available screen space.
- `subtitleVariants`: An array of localized, displayable subtitles in order of preference. CarPlay displays the subtitle that fits in the available screen space.
- `image`: The image the alert displays.
- `primaryAction`: The alert’s primary action.
- `secondaryAction`: The alert’s secondary action.
- `duration`: The amount of time, in seconds, that the alert remains visible. If you provide a duration of 0, CarPlay displays the alert until the user dismisses it.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Navigation Alert

- [init(titleVariants:subtitleVariants:imageSet:primaryAction:secondaryAction:duration:)](init%28titlevariants_subtitlevariants_imageset_primaryaction_secondaryaction_duration_%29.md): Deprecated. Creates a navigation alert.

# initWithTitleVariants:subtitleVariants:image:primaryAction:secondaryAction:duration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a navigation alert.

## Declaration

```objectivec
- (instancetype) initWithTitleVariants:(NSArray<NSString *> *) titleVariants subtitleVariants:(NSArray<NSString *> *) subtitleVariants image:(UIImage *) image primaryAction:(CPAlertAction *) primaryAction secondaryAction:(CPAlertAction *) secondaryAction duration:(NSTimeInterval) duration;
```

## Parameters

- `titleVariants`: An array of localized, displayable titles in order of preference. CarPlay displays the title that fits in the available screen space.
- `subtitleVariants`: An array of localized, displayable subtitles in order of preference. CarPlay displays the subtitle that fits in the available screen space.
- `image`: The image the alert displays.
- `primaryAction`: The alert’s primary action.
- `secondaryAction`: The alert’s secondary action.
- `duration`: The amount of time, in seconds, that the alert remains visible. If you provide a duration of 0, CarPlay displays the alert until the user dismisses it.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Navigation Alert

- [initWithTitleVariants:subtitleVariants:imageSet:primaryAction:secondaryAction:duration:](init%28titlevariants_subtitlevariants_imageset_primaryaction_secondaryaction_duration_%29.md): Deprecated. Creates a navigation alert.

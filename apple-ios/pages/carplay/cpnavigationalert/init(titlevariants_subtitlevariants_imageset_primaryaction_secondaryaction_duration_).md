> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/init(titlevariants:subtitlevariants:imageset:primaryaction:secondaryaction:duration:)](https://developer.apple.com/documentation/carplay/cpnavigationalert/init(titlevariants:subtitlevariants:imageset:primaryaction:secondaryaction:duration:))

# init(titleVariants:subtitleVariants:imageSet:primaryAction:secondaryAction:duration:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a navigation alert.

## Declaration

```swift
init(titleVariants: [String], subtitleVariants: [String]?, imageSet: CPImageSet?, primaryAction: CPAlertAction, secondaryAction: CPAlertAction?, duration: TimeInterval)
```

## Parameters

- `titleVariants`: An array of localized, displayable titles. The system selects the title that fits in the available display space.
- `subtitleVariants`: An array of localized, displayable subtitles. The system selects the title that fits in the available display space.
- `imageSet`: An image set displayed in the navigation alert. The navigation alert doesn’t support animated images. If you provide an animated image, the alert uses the first image in the animation sequence.
- `primaryAction`: The primary action and its button.
- `secondaryAction`: An optional, secondary action with its button.
- `duration`: The amount of time, in seconds, that the alert is visible. Setting the duration to 0 displays the alert until dismissed by the user.

<a id="return-value"></a>

## Return Value

A newly initialized navigation alert.

## See Also

### Creating a Navigation Alert

- [init(titleVariants:subtitleVariants:image:primaryAction:secondaryAction:duration:)](init%28titlevariants_subtitlevariants_image_primaryaction_secondaryaction_duration_%29.md): Creates a navigation alert.

# initWithTitleVariants:subtitleVariants:imageSet:primaryAction:secondaryAction:duration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a navigation alert.

## Declaration

```objectivec
- (instancetype) initWithTitleVariants:(NSArray<NSString *> *) titleVariants subtitleVariants:(NSArray<NSString *> *) subtitleVariants imageSet:(CPImageSet *) imageSet primaryAction:(CPAlertAction *) primaryAction secondaryAction:(CPAlertAction *) secondaryAction duration:(NSTimeInterval) duration;
```

## Parameters

- `titleVariants`: An array of localized, displayable titles. The system selects the title that fits in the available display space.
- `subtitleVariants`: An array of localized, displayable subtitles. The system selects the title that fits in the available display space.
- `imageSet`: An image set displayed in the navigation alert. The navigation alert doesn’t support animated images. If you provide an animated image, the alert uses the first image in the animation sequence.
- `primaryAction`: The primary action and its button.
- `secondaryAction`: An optional, secondary action with its button.
- `duration`: The amount of time, in seconds, that the alert is visible. Setting the duration to 0 displays the alert until dismissed by the user.

<a id="return-value"></a>

## Return Value

A newly initialized navigation alert.

## See Also

### Creating a Navigation Alert

- [initWithTitleVariants:subtitleVariants:image:primaryAction:secondaryAction:duration:](init%28titlevariants_subtitlevariants_image_primaryaction_secondaryaction_duration_%29.md): Creates a navigation alert.

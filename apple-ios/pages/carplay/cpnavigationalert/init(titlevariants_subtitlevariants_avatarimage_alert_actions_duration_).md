> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/init(titlevariants:subtitlevariants:avatarimage:alert:actions:duration:)](https://developer.apple.com/documentation/carplay/cpnavigationalert/init(titlevariants:subtitlevariants:avatarimage:alert:actions:duration:))

# init(titleVariants:subtitleVariants:avatarImage:alert:actions:duration:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize a @c CPNavigationAlert with a title, image, an array of actions, and duration.

## Declaration

```swift
init(titleVariants: [String], subtitleVariants: [String], avatarImage: UIImage?, alert alertImage: UIImage?, actions: [CPAlertAction], duration: TimeInterval)
```

## Parameters

- `titleVariants`: An array of titles. The system will select a title that fits in the available space. The variant strings should be provided as localized, displayable content.
- `subtitleVariants`: An array of subtitles. The system will select a subtitle that fits in the available space. The variant strings should be provided as localized, displayable content.
- `avatarImage`: An optional @c UIImage to display in this navigation alert. Animated images are not supported. It will be displayed in the top leading corner.
- `alertImage`: An optional @c UIImage to display in this navigation alert. Animated images are not supported. It will be displayed above the action buttons. Note that this image may be hidden by the system if the available screen space is too small.
- `actions`: An array of @c CPAlertAction objects. The number of actions will be clamped to @c maximumActionsCount.
- `duration`: The duration for which this alert should be visible. Specify 0 for an alert that displays indefinitely.

<a id="return-value"></a>

## Return Value

An initialized @c CPNavigationAlert.

# initWithTitleVariants:subtitleVariants:avatarImage:alertImage:actions:duration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize a @c CPNavigationAlert with a title, image, an array of actions, and duration.

## Declaration

```objectivec
- (instancetype) initWithTitleVariants:(NSArray<NSString *> *) titleVariants subtitleVariants:(NSArray<NSString *> *) subtitleVariants avatarImage:(UIImage *) avatarImage alertImage:(UIImage *) alertImage actions:(NSArray<CPAlertAction *> *) actions duration:(NSTimeInterval) duration;
```

## Parameters

- `titleVariants`: An array of titles. The system will select a title that fits in the available space. The variant strings should be provided as localized, displayable content.
- `subtitleVariants`: An array of subtitles. The system will select a subtitle that fits in the available space. The variant strings should be provided as localized, displayable content.
- `avatarImage`: An optional @c UIImage to display in this navigation alert. Animated images are not supported. It will be displayed in the top leading corner.
- `alertImage`: An optional @c UIImage to display in this navigation alert. Animated images are not supported. It will be displayed above the action buttons. Note that this image may be hidden by the system if the available screen space is too small.
- `actions`: An array of @c CPAlertAction objects. The number of actions will be clamped to @c maximumActionsCount.
- `duration`: The duration for which this alert should be visible. Specify 0 for an alert that displays indefinitely.

<a id="return-value"></a>

## Return Value

An initialized @c CPNavigationAlert.

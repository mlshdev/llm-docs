> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationalert/image

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An image displayed in the navigation alert.

## Declaration

```swift
@NSCopying var image: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

The navigation alert doesn’t support animated images. If `image` references an animated image, the alert displays first image in the animation sequence.

## See Also

### Getting the alert image

- [imageSet](imageset.md): An image set displayed in the navigation alert.
- [alertImage](alertimage.md)
- [avatarImage](avatarimage.md)
- [maximumAlertImageSize](maximumalertimagesize.md): The maximum image size for the alert image that a @c CPNavigationAlert can display.
- [maximumAvatarImageSize](maximumavatarimagesize.md): The maximum image size for the avatar image that a @c CPNavigationAlert can display.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An image displayed in the navigation alert.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

The navigation alert doesn’t support animated images. If `image` references an animated image, the alert displays first image in the animation sequence.

## See Also

### Getting the alert image

- [imageSet](imageset.md): An image set displayed in the navigation alert.
- [alertImage](alertimage.md)
- [avatarImage](avatarimage.md)
- [maximumAlertImageSize](maximumalertimagesize.md): The maximum image size for the alert image that a @c CPNavigationAlert can display.
- [maximumAvatarImageSize](maximumavatarimagesize.md): The maximum image size for the avatar image that a @c CPNavigationAlert can display.

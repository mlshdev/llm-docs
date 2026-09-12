> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/image](https://developer.apple.com/documentation/carplay/cpnavigationalert/image)

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

### Getting the Alert Image

- [imageSet](imageset.md): An image set displayed in the navigation alert.

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

### Getting the Alert Image

- [imageSet](imageset.md): An image set displayed in the navigation alert.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/imageset](https://developer.apple.com/documentation/carplay/cpnavigationalert/imageset)

# imageSet (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An image set displayed in the navigation alert.

## Declaration

```swift
@NSCopying var imageSet: CPImageSet? { get }
```

<a id="Discussion"></a>

## Discussion

The navigation alert doesn’t support animated images. If [imageSet](imageset.md) references an animated image, the alert displays the first image in the animation sequence.

## See Also

### Getting the Alert Image

- [image](image.md): An image displayed in the navigation alert.

# imageSet (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An image set displayed in the navigation alert.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CPImageSet * imageSet;
```

<a id="Discussion"></a>

## Discussion

The navigation alert doesn’t support animated images. If [imageSet](imageset.md) references an animated image, the alert displays the first image in the animation sequence.

## See Also

### Getting the Alert Image

- [image](image.md): An image displayed in the navigation alert.

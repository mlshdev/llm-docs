> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/init(image:)](https://developer.apple.com/documentation/uikit/uiimageview/init(image:))

# init(image:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an image view initialized with the specified image.

## Declaration

```swift
init(image: UIImage?)
```

## Parameters

- `image`: The initial image to display in the image view. You may specify an image object that contains an animated sequence of images.

<a id="return-value"></a>

## Return Value

An initialized image view object.

<a id="Discussion"></a>

## Discussion

The image you specified is used to configure the initial size of the image view itself. Use constraints and the image view’s content mode to adjust the image view’s final size onscreen. This method disables user interactions for the image view by setting the [isUserInteractionEnabled](isuserinteractionenabled.md) property to [false](https://developer.apple.com/documentation/swift/false).

If you specify an animated image whose duration is greater than `0`, the image view automatically starts playing the animation.

## See Also

### Creating an image view

- [init(image:highlightedImage:)](init%28image_highlightedimage_%29.md): Returns an image view initialized with the specified regular and highlighted images.

# initWithImage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an image view initialized with the specified image.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image;
```

## Parameters

- `image`: The initial image to display in the image view. You may specify an image object that contains an animated sequence of images.

<a id="return-value"></a>

## Return Value

An initialized image view object.

<a id="Discussion"></a>

## Discussion

The image you specified is used to configure the initial size of the image view itself. Use constraints and the image view’s content mode to adjust the image view’s final size onscreen. This method disables user interactions for the image view by setting the [userInteractionEnabled](isuserinteractionenabled.md) property to [false](https://developer.apple.com/documentation/swift/false).

If you specify an animated image whose duration is greater than `0`, the image view automatically starts playing the animation.

## See Also

### Creating an image view

- [initWithImage:highlightedImage:](init%28image_highlightedimage_%29.md): Returns an image view initialized with the specified regular and highlighted images.

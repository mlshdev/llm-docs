> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/init(image:highlightedimage:)](https://developer.apple.com/documentation/uikit/uiimageview/init(image:highlightedimage:))

# init(image:highlightedImage:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an image view initialized with the specified regular and highlighted images.

## Declaration

```swift
init(image: UIImage?, highlightedImage: UIImage?)
```

## Parameters

- `image`: The initial image to display in the image view. You may specify an image object that contains an animated sequence of images.
- `highlightedImage`: The image to display when the image view is highlighted. You may specify an image object that contains an animated sequence of images.

<a id="return-value"></a>

## Return Value

An initialized image view object.

<a id="Discussion"></a>

## Discussion

The images you specify are used to configure the initial size of the image view itself. Use constraints and the image view’s content mode to adjust the image view’s final size onscreen. This method disables user interactions for the image view by setting the [isUserInteractionEnabled](isuserinteractionenabled.md) property to [false](https://developer.apple.com/documentation/swift/false).

If you specify an animated image whose duration is greater than `0`, the image view automatically starts playing the animation.

## See Also

### Creating an image view

- [init(image:)](init%28image_%29.md): Returns an image view initialized with the specified image.

# initWithImage:highlightedImage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an image view initialized with the specified regular and highlighted images.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image highlightedImage:(UIImage *) highlightedImage;
```

## Parameters

- `image`: The initial image to display in the image view. You may specify an image object that contains an animated sequence of images.
- `highlightedImage`: The image to display when the image view is highlighted. You may specify an image object that contains an animated sequence of images.

<a id="return-value"></a>

## Return Value

An initialized image view object.

<a id="Discussion"></a>

## Discussion

The images you specify are used to configure the initial size of the image view itself. Use constraints and the image view’s content mode to adjust the image view’s final size onscreen. This method disables user interactions for the image view by setting the [userInteractionEnabled](isuserinteractionenabled.md) property to [false](https://developer.apple.com/documentation/swift/false).

If you specify an animated image whose duration is greater than `0`, the image view automatically starts playing the animation.

## See Also

### Creating an image view

- [initWithImage:](init%28image_%29.md): Returns an image view initialized with the specified image.

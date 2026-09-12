> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/pictureinpicturebuttonstopimage(compatiblewith:)](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/pictureinpicturebuttonstopimage(compatiblewith:))

# pictureInPictureButtonStopImage(compatibleWith:) (Swift)

**Framework:** AVKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns a system-default template image that’s compatible with a trait collection for the button that stops Picture in Picture in your app.

## Declaration

```swift
class func pictureInPictureButtonStopImage(compatibleWith traitCollection: UITraitCollection?) -> UIImage
```

## Parameters

- `traitCollection`: The trait collection that describes the image to retrieve. Pass `nil` to use traits that describe the main screen.

<a id="return-value"></a>

## Return Value

A system-default template image.

## See Also

### Retrieving Picture in Picture Template Images

- [pictureInPictureButtonStartImage](pictureinpicturebuttonstartimage.md): A system-default template image for the button that starts Picture in Picture in your app.
- [pictureInPictureButtonStopImage](pictureinpicturebuttonstopimage.md): A system-default template image for the button that stops Picture in Picture in your app.
- [pictureInPictureButtonStartImage(compatibleWith:)](pictureinpicturebuttonstartimage%28compatiblewith_%29.md): Returns a system-default template image that’s compatible with a trait collection for the button that starts Picture in Picture in your app.

# pictureInPictureButtonStopImageCompatibleWithTraitCollection: (Objective-C)

**Framework:** AVKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns a system-default template image that’s compatible with a trait collection for the button that stops Picture in Picture in your app.

## Declaration

```objectivec
+ (UIImage *) pictureInPictureButtonStopImageCompatibleWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `traitCollection`: The trait collection that describes the image to retrieve. Pass `nil` to use traits that describe the main screen.

<a id="return-value"></a>

## Return Value

A system-default template image.

## See Also

### Retrieving Picture in Picture Template Images

- [pictureInPictureButtonStartImage](pictureinpicturebuttonstartimage.md): A system-default template image for the button that starts Picture in Picture in your app.
- [pictureInPictureButtonStopImage](pictureinpicturebuttonstopimage.md): A system-default template image for the button that stops Picture in Picture in your app.
- [pictureInPictureButtonStartImageCompatibleWithTraitCollection:](pictureinpicturebuttonstartimage%28compatiblewith_%29.md): Returns a system-default template image that’s compatible with a trait collection for the button that starts Picture in Picture in your app.

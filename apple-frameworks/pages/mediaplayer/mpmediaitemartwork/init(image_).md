> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemartwork/init(image:)](https://developer.apple.com/documentation/mediaplayer/mpmediaitemartwork/init(image:))

# init(image:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Initializes a media item artwork instance with a full-size image.

> Use -initWithBoundsSize:requestHandler:

## Declaration

```swift
convenience init(image: UIImage)
```

## Parameters

- `image`: The image to use to initialize the media item artwork instance.

<a id="Discussion"></a>

## Discussion

This method assumes that the crop rectangle of the image matches the bounds of the image, as defined by the image’s size in points. That is, this method assumes the image you supply is tightly cropped.

# initWithImage: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 3.0)

Initializes a media item artwork instance with a full-size image.

> Use -initWithBoundsSize:requestHandler:

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image;
```

## Parameters

- `image`: The image to use to initialize the media item artwork instance.

<a id="Discussion"></a>

## Discussion

This method assumes that the crop rectangle of the image matches the bounds of the image, as defined by the image’s size in points. That is, this method assumes the image you supply is tightly cropped.

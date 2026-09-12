> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagecontentmode](https://developer.apple.com/documentation/photos/phimagecontentmode)

# PHImageContentMode (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Options for fitting an image’s aspect ratio to a requested size, used by the [requestImage(for:targetSize:contentMode:options:resultHandler:)](phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method.

## Declaration

```swift
enum PHImageContentMode
```

<a id="overview"></a>

## Overview

With either option, the resulting image may not exactly match the target size, depending on the [deliveryMode](phimagerequestoptions/deliverymode.md) and [resizeMode](phimagerequestoptions/resizemode.md) properties of the image request. To serve your request more quickly, Photos may provide a slightly larger image—one that it can generate more easily or one that is already cached.

## Topics

### Constants

- [default](phimagecontentmode/default.md): Fits the image to the requested size using the default option, [PHImageContentMode.aspectFit](phimagecontentmode/aspectfit.md).
- [PHImageContentMode.aspectFit](phimagecontentmode/aspectfit.md): Scales the image so that its larger dimension fits the target size.
- [PHImageContentMode.aspectFill](phimagecontentmode/aspectfill.md): Scales the image so that it completely fills the target size.

### Initializers

- [init(rawValue:)](phimagecontentmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Image Result Info Keys](../photokit/image-result-info-keys.md): Keys identifying information about an image loading result, used in the `resultHandler` block with image request methods.

# PHImageContentMode (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Options for fitting an image’s aspect ratio to a requested size, used by the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method.

## Declaration

```objectivec
enum PHImageContentMode : NSInteger;
```

<a id="overview"></a>

## Overview

With either option, the resulting image may not exactly match the target size, depending on the [deliveryMode](phimagerequestoptions/deliverymode.md) and [resizeMode](phimagerequestoptions/resizemode.md) properties of the image request. To serve your request more quickly, Photos may provide a slightly larger image—one that it can generate more easily or one that is already cached.

## Topics

### Constants

- [PHImageContentModeDefault](phimagecontentmode/default.md): Fits the image to the requested size using the default option, [PHImageContentModeAspectFit](phimagecontentmode/aspectfit.md).
- [PHImageContentModeAspectFit](phimagecontentmode/aspectfit.md): Scales the image so that its larger dimension fits the target size.
- [PHImageContentModeAspectFill](phimagecontentmode/aspectfill.md): Scales the image so that it completely fills the target size.

## See Also

### Constants

- [Image Result Info Keys](../photokit/image-result-info-keys.md): Keys identifying information about an image loading result, used in the `resultHandler` block with image request methods.

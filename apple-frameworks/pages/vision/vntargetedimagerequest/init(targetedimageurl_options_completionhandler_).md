> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntargetedimagerequest/init(targetedimageurl:options:completionhandler:)](https://developer.apple.com/documentation/vision/vntargetedimagerequest/init(targetedimageurl:options:completionhandler:))

# init(targetedImageURL:options:completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new request targeting an image at the specified URL, executing the completion handler when done.

## Declaration

```swift
init(targetedImageURL imageURL: URL, options: [VNImageOption : Any] = [:], completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `imageURL`: The URL of the targeted image.
- `options`: A dictionary with options specifying auxiliary information for the image.
- `completionHandler`: The block to invoke when the request has finished executing.

## See Also

### Creating a Request

- [init(targetedCGImage:options:completionHandler:)](init%28targetedcgimage_options_completionhandler_%29.md): Creates a new request targeting a Core Graphics image, executing the completion handler when done.
- [init(targetedCGImage:orientation:options:completionHandler:)](init%28targetedcgimage_orientation_options_completionhandler_%29.md): Creates a new request targeting a Core Graphics image of known orientation, executing the completion handler when done.
- [init(targetedCIImage:options:completionHandler:)](init%28targetedciimage_options_completionhandler_%29.md): Creates a new request targeting a Core Image image.
- [init(targetedCIImage:orientation:options:completionHandler:)](init%28targetedciimage_orientation_options_completionhandler_%29.md): Creates a new request targeting a Core Image image of known orientation, executing the completion handler when done.
- [init(targetedCVPixelBuffer:options:completionHandler:)](init%28targetedcvpixelbuffer_options_completionhandler_%29.md): Creates a new request targeting an image in a pixel buffer.
- [init(targetedCVPixelBuffer:orientation:options:completionHandler:)](init%28targetedcvpixelbuffer_orientation_options_completionhandler_%29.md): Creates a new request targeting an image in a pixel buffer of known orientation.
- [init(targetedCMSampleBuffer:options:completionHandler:)](init%28targetedcmsamplebuffer_options_completionhandler_%29.md): Creates a new request with a completion handler that targets an image in a sample buffer.
- [init(targetedCMSampleBuffer:orientation:options:completionHandler:)](init%28targetedcmsamplebuffer_orientation_options_completionhandler_%29.md): Creates a new request with a completion handler that targets an image of a known orientation in a sample buffer.
- [init(targetedImageData:options:completionHandler:)](init%28targetedimagedata_options_completionhandler_%29.md): Creates a new request targeting an image as raw data, executing the completion handler when done.
- [init(targetedImageData:orientation:options:completionHandler:)](init%28targetedimagedata_orientation_options_completionhandler_%29.md): Creates a new request targeting a raw data image of known orientation, executing the completion handler when done.
- [init(targetedImageURL:orientation:options:completionHandler:)](init%28targetedimageurl_orientation_options_completionhandler_%29.md): Creates a new request targeting an image of known orientation, at the specified URL, executing the completion handler when done.

# initWithTargetedImageURL:options:completionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new request targeting an image at the specified URL, executing the completion handler when done.

## Declaration

```objectivec
- (instancetype) initWithTargetedImageURL:(NSURL *) imageURL options:(NSDictionary<NSString *,id> *) options completionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `imageURL`: The URL of the targeted image.
- `options`: A dictionary with options specifying auxiliary information for the image.
- `completionHandler`: The block to invoke when the request has finished executing.

## See Also

### Creating a Request

- [initWithTargetedCGImage:options:](initwithtargetedcgimage_options_.md): Creates a new request targeting a Core Graphics image.
- [initWithTargetedCGImage:options:completionHandler:](init%28targetedcgimage_options_completionhandler_%29.md): Creates a new request targeting a Core Graphics image, executing the completion handler when done.
- [initWithTargetedCGImage:orientation:options:](initwithtargetedcgimage_orientation_options_.md): Creates a new request targeting a Core Graphics image of known orientation.
- [initWithTargetedCGImage:orientation:options:completionHandler:](init%28targetedcgimage_orientation_options_completionhandler_%29.md): Creates a new request targeting a Core Graphics image of known orientation, executing the completion handler when done.
- [initWithTargetedCIImage:options:](initwithtargetedciimage_options_.md): Creates a new request targeting a Core Image image.
- [initWithTargetedCIImage:options:completionHandler:](init%28targetedciimage_options_completionhandler_%29.md): Creates a new request targeting a Core Image image.
- [initWithTargetedCIImage:orientation:options:](initwithtargetedciimage_orientation_options_.md): Creates a new request targeting a Core Image image of known orientation.
- [initWithTargetedCIImage:orientation:options:completionHandler:](init%28targetedciimage_orientation_options_completionhandler_%29.md): Creates a new request targeting a Core Image image of known orientation, executing the completion handler when done.
- [initWithTargetedCVPixelBuffer:options:](initwithtargetedcvpixelbuffer_options_.md): Creates a new request targeting an image in a pixel buffer.
- [initWithTargetedCVPixelBuffer:options:completionHandler:](init%28targetedcvpixelbuffer_options_completionhandler_%29.md): Creates a new request targeting an image in a pixel buffer.
- [initWithTargetedCVPixelBuffer:orientation:options:](initwithtargetedcvpixelbuffer_orientation_options_.md): Creates a new request targeting an image in a pixel buffer of known orientation.
- [initWithTargetedCVPixelBuffer:orientation:options:completionHandler:](init%28targetedcvpixelbuffer_orientation_options_completionhandler_%29.md): Creates a new request targeting an image in a pixel buffer of known orientation.
- [initWithTargetedCMSampleBuffer:options:](initwithtargetedcmsamplebuffer_options_.md): Creates a new request that targets an image in a sample buffer.
- [initWithTargetedCMSampleBuffer:options:completionHandler:](init%28targetedcmsamplebuffer_options_completionhandler_%29.md): Creates a new request with a completion handler that targets an image in a sample buffer.
- [initWithTargetedCMSampleBuffer:orientation:options:](initwithtargetedcmsamplebuffer_orientation_options_.md): Creates a new request that targets an image of a known orientation in a sample buffer.

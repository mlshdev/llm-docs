> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntargetedimagerequest/initwithtargetedimagedata:options:](https://developer.apple.com/documentation/vision/vntargetedimagerequest/initwithtargetedimagedata:options:)

# initWithTargetedImageData:options:

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new request targeting an image as raw data.

## Declaration

```objectivec
- (instancetype) initWithTargetedImageData:(NSData *) imageData options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `imageData`: The data containing the targeted image.
- `options`: A dictionary with options specifying auxiliary information for the image.

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

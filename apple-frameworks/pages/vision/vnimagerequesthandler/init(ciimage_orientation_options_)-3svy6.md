> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagerequesthandler/init(ciimage:orientation:options:)-3svy6](https://developer.apple.com/documentation/vision/vnimagerequesthandler/init(ciimage:orientation:options:)-3svy6)

# init(ciImage:orientation:options:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a handler to be used for performing requests on Core Image image data of a known orientation.

## Declaration

```swift
init(ciImage image: CIImage, orientation: CGImagePropertyOrientation, options: [VNImageOption : Any] = [:])
```

## Parameters

- `image`: A [CIImage](../../coreimage/ciimage.md) containing the image to be used for performing the requests. Image content is immutable.
- `orientation`: The orientation of the input `image`.
- `options`: An optional dictionary containing [VNImageOption](../vnimageoption.md) keys to auxiliary image data.

## See Also

### Creating a Request Handler

- [init(CGImage:options:)](init%28cgimage_options_%29-5tp19.md)
- [init(cgImage:options:)](init%28cgimage_options_%29-4qda6.md): Creates a handler to be used for performing requests on Core Graphics images.
- [init(CGImage:orientation:options:)](init%28cgimage_orientation_options_%29-8imhf.md)
- [init(cgImage:orientation:options:)](init%28cgimage_orientation_options_%29-63ojm.md): Creates a handler to be used for performing requests on a Core Graphics image with known orientation.
- [init(CIImage:options:)](init%28ciimage_options_%29-55zel.md)
- [init(ciImage:options:)](init%28ciimage_options_%29-4wf33.md): Creates a handler to use for performing requests on Core Image image data.
- [init(CIImage:orientation:options:)](init%28ciimage_orientation_options_%29-8p8h1.md)
- [init(CVPixelBuffer:options:)](init%28cvpixelbuffer_options_%29-3pee9.md)
- [init(cvPixelBuffer:options:)](init%28cvpixelbuffer_options_%29-bkd7.md): Creates a handler for performing requests on a Core Video pixel buffer.
- [init(CVPixelBuffer:orientation:options:)](init%28cvpixelbuffer_orientation_options_%29-160f.md)
- [init(cvPixelBuffer:orientation:options:)](init%28cvpixelbuffer_orientation_options_%29-9fxug.md): Creates a handler for performing requests on a Core Video pixel buffer of a known orientation.
- [init(CVPixelBuffer:depthData:orientation:options:)](init%28cvpixelbuffer_depthdata_orientation_options_%29-3u960.md)
- [init(cvPixelBuffer:depthData:orientation:options:)](init%28cvpixelbuffer_depthdata_orientation_options_%29-3mj2d.md)
- [init(CMSampleBuffer:options:)](init%28cmsamplebuffer_options_%29-4mpwd.md)
- [init(cmSampleBuffer:options:)](init%28cmsamplebuffer_options_%29-2yodn.md): Creates a request handler that performs requests on an image contained within a sample buffer.

# initWithCIImage:orientation:options: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a handler to be used for performing requests on Core Image image data of a known orientation.

## Declaration

```objectivec
- (instancetype) initWithCIImage:(CIImage *) image orientation:(CGImagePropertyOrientation) orientation options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `image`: A [CIImage](../../coreimage/ciimage.md) containing the image to be used for performing the requests. Image content is immutable.
- `orientation`: The orientation of the input `image`.
- `options`: An optional dictionary containing [VNImageOption](../vnimageoption.md) keys to auxiliary image data.

## See Also

### Creating a Request Handler

- [initWithCGImage:options:](init%28cgimage_options_%29-4qda6.md): Creates a handler to be used for performing requests on Core Graphics images.
- [initWithCGImage:orientation:options:](init%28cgimage_orientation_options_%29-63ojm.md): Creates a handler to be used for performing requests on a Core Graphics image with known orientation.
- [initWithCIImage:options:](init%28ciimage_options_%29-4wf33.md): Creates a handler to use for performing requests on Core Image image data.
- [initWithCVPixelBuffer:options:](init%28cvpixelbuffer_options_%29-bkd7.md): Creates a handler for performing requests on a Core Video pixel buffer.
- [initWithCVPixelBuffer:orientation:options:](init%28cvpixelbuffer_orientation_options_%29-9fxug.md): Creates a handler for performing requests on a Core Video pixel buffer of a known orientation.
- [initWithCVPixelBuffer:depthData:orientation:options:](init%28cvpixelbuffer_depthdata_orientation_options_%29-3mj2d.md)
- [initWithCMSampleBuffer:options:](init%28cmsamplebuffer_options_%29-2yodn.md): Creates a request handler that performs requests on an image contained within a sample buffer.
- [initWithCMSampleBuffer:orientation:options:](init%28cmsamplebuffer_orientation_options_%29-335k4.md): Creates a request handler that performs requests on an image of a specified orientation contained within a sample buffer.
- [initWithCMSampleBuffer:depthData:orientation:options:](init%28cmsamplebuffer_depthdata_orientation_options_%29-8bjyh.md): Creates a request handler that performs requests on an image in a sample buffer that contains depth data.
- [initWithData:options:](init%28data_options_%29.md): Creates a handler to use for performing requests on an image in a data object.
- [initWithData:orientation:options:](init%28data_orientation_options_%29.md): Creates a handler to use for performing requests on an image of known orientation.
- [initWithURL:options:](init%28url_options_%29-4k623.md): Creates a handler to be used for performing requests on an image at the specified URL.
- [initWithURL:orientation:options:](init%28url_orientation_options_%29-70nta.md): Creates a handler to be used for performing requests on an image with known orientation, at the specified URL.

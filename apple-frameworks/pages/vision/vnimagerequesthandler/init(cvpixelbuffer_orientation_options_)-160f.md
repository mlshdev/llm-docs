> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagerequesthandler/init(cvpixelbuffer:orientation:options:)-160f](https://developer.apple.com/documentation/vision/vnimagerequesthandler/init(cvpixelbuffer:orientation:options:)-160f)

# init(CVPixelBuffer:orientation:options:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init(CVPixelBuffer pixelBuffer: CVPixelBuffer, orientation: CGImagePropertyOrientation, options: [VNImageOption : Any] = [:])
```

## See Also

### Creating a Request Handler

- [init(CGImage:options:)](init%28cgimage_options_%29-5tp19.md)
- [init(cgImage:options:)](init%28cgimage_options_%29-4qda6.md): Creates a handler to be used for performing requests on Core Graphics images.
- [init(CGImage:orientation:options:)](init%28cgimage_orientation_options_%29-8imhf.md)
- [init(cgImage:orientation:options:)](init%28cgimage_orientation_options_%29-63ojm.md): Creates a handler to be used for performing requests on a Core Graphics image with known orientation.
- [init(CIImage:options:)](init%28ciimage_options_%29-55zel.md)
- [init(ciImage:options:)](init%28ciimage_options_%29-4wf33.md): Creates a handler to use for performing requests on Core Image image data.
- [init(CIImage:orientation:options:)](init%28ciimage_orientation_options_%29-8p8h1.md)
- [init(ciImage:orientation:options:)](init%28ciimage_orientation_options_%29-3svy6.md): Creates a handler to be used for performing requests on Core Image image data of a known orientation.
- [init(CVPixelBuffer:options:)](init%28cvpixelbuffer_options_%29-3pee9.md)
- [init(cvPixelBuffer:options:)](init%28cvpixelbuffer_options_%29-bkd7.md): Creates a handler for performing requests on a Core Video pixel buffer.
- [init(cvPixelBuffer:orientation:options:)](init%28cvpixelbuffer_orientation_options_%29-9fxug.md): Creates a handler for performing requests on a Core Video pixel buffer of a known orientation.
- [init(CVPixelBuffer:depthData:orientation:options:)](init%28cvpixelbuffer_depthdata_orientation_options_%29-3u960.md)
- [init(cvPixelBuffer:depthData:orientation:options:)](init%28cvpixelbuffer_depthdata_orientation_options_%29-3mj2d.md)
- [init(CMSampleBuffer:options:)](init%28cmsamplebuffer_options_%29-4mpwd.md)
- [init(cmSampleBuffer:options:)](init%28cmsamplebuffer_options_%29-2yodn.md): Creates a request handler that performs requests on an image contained within a sample buffer.

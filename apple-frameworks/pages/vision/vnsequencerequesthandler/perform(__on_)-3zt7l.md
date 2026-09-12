> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnsequencerequesthandler/perform(_:on:)-3zt7l](https://developer.apple.com/documentation/vision/vnsequencerequesthandler/perform(_:on:)-3zt7l)

# perform(\_:on:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Schedules Vision requests to be performed on a Core Graphics image.

## Declaration

```swift
func perform(_ requests: [VNRequest], on image: CGImage) throws
```

## Parameters

- `requests`: An array of [VNRequest](../vnrequest.md) requests to perform.
- `image`: The input [CGImage](../../coregraphics/cgimage.md) on which to perform the request.

## See Also

### Performing a Sequence Request

- [perform(\_:on:orientation:)](perform%28__on_orientation_%29-3gcmv.md): Schedules one or more Vision requests to be performed on a Core Graphics image with known orientation.
- [perform(\_:on:)](perform%28__on_%29-9jtgj.md): Schedules one or more Vision requests to be performed on Core Image image data.
- [perform(\_:on:orientation:)](perform%28__on_orientation_%29-1bkm1.md): Schedules one or more Vision requests to be performed on Core Image image data with known orientation.
- [perform(\_:on:)](perform%28__on_%29-3d7nt.md): Schedules one or more Vision requests to be performed on a Core Video pixel buffer.
- [perform(\_:on:orientation:)](perform%28__on_orientation_%29-2wvt8.md): Schedules one or more Vision requests to be performed on a Core Video pixel buffer with known orientation.
- [perform(\_:on:)](perform%28__on_%29-45e73.md): Performs one or more requests on an image contained within a sample buffer.
- [perform(\_:on:orientation:)](perform%28__on_orientation_%29-6b7rk.md): Performs one or more requests on an image of a specified orientation contained within a sample buffer.
- [perform(\_:onImageData:)](perform%28__onimagedata_%29.md): Schedules one or more Vision requests to be performed on raw image data.
- [perform(\_:onImageData:orientation:)](perform%28__onimagedata_orientation_%29.md): Schedules one or more Vision requests to be performed on raw data containing an image with known orientation.
- [perform(\_:onImageURL:)](perform%28__onimageurl_%29.md): Schedules one or more Vision requests to be performed on an image.
- [perform(\_:onImageURL:orientation:)](perform%28__onimageurl_orientation_%29.md): Schedules one or more Vision requests to be performed on an image with known orientation, at a specific URL.

# performRequests:onCGImage:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Schedules Vision requests to be performed on a Core Graphics image.

## Declaration

```objectivec
- (BOOL) performRequests:(NSArray<VNRequest *> *) requests onCGImage:(CGImageRef) image error:(NSError **) error;
```

## Parameters

- `requests`: An array of [VNRequest](../vnrequest.md) requests to perform.
- `image`: The input [CGImageRef](../../coregraphics/cgimage.md) on which to perform the request.
- `error`: An optional error parameter populated when problems arise in scheduling the requests. Check if the return value is [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Performing a Sequence Request

- [performRequests:onCGImage:orientation:error:](perform%28__on_orientation_%29-3gcmv.md): Schedules one or more Vision requests to be performed on a Core Graphics image with known orientation.
- [performRequests:onCIImage:error:](perform%28__on_%29-9jtgj.md): Schedules one or more Vision requests to be performed on Core Image image data.
- [performRequests:onCIImage:orientation:error:](perform%28__on_orientation_%29-1bkm1.md): Schedules one or more Vision requests to be performed on Core Image image data with known orientation.
- [performRequests:onCVPixelBuffer:error:](perform%28__on_%29-3d7nt.md): Schedules one or more Vision requests to be performed on a Core Video pixel buffer.
- [performRequests:onCVPixelBuffer:orientation:error:](perform%28__on_orientation_%29-2wvt8.md): Schedules one or more Vision requests to be performed on a Core Video pixel buffer with known orientation.
- [performRequests:onCMSampleBuffer:error:](perform%28__on_%29-45e73.md): Performs one or more requests on an image contained within a sample buffer.
- [performRequests:onCMSampleBuffer:orientation:error:](perform%28__on_orientation_%29-6b7rk.md): Performs one or more requests on an image of a specified orientation contained within a sample buffer.
- [performRequests:onImageData:error:](perform%28__onimagedata_%29.md): Schedules one or more Vision requests to be performed on raw image data.
- [performRequests:onImageData:orientation:error:](perform%28__onimagedata_orientation_%29.md): Schedules one or more Vision requests to be performed on raw data containing an image with known orientation.
- [performRequests:onImageURL:error:](perform%28__onimageurl_%29.md): Schedules one or more Vision requests to be performed on an image.
- [performRequests:onImageURL:orientation:error:](perform%28__onimageurl_orientation_%29.md): Schedules one or more Vision requests to be performed on an image with known orientation, at a specific URL.

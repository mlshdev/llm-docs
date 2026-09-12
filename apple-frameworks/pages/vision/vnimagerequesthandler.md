> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagerequesthandler](https://developer.apple.com/documentation/vision/vnimagerequesthandler)

# VNImageRequestHandler (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that processes one or more image-analysis request pertaining to a single image.

## Declaration

```swift
class VNImageRequestHandler
```

## Mentioned In

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md)
- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md)
- [Recognizing Text in Images](recognizing-text-in-images.md)

<a id="overview"></a>

## Overview

Instantiate this handler to perform Vision requests on a single image. You specify the image and, optionally, a completion handler at the time of creation, and call [perform(\_:)](vnimagerequesthandler/perform%28__%29.md) to begin executing the request.

## Topics

### Creating a Request Handler

- [init(CGImage:options:)](vnimagerequesthandler/init%28cgimage_options_%29-5tp19.md)
- [init(cgImage:options:)](vnimagerequesthandler/init%28cgimage_options_%29-4qda6.md): Creates a handler to be used for performing requests on Core Graphics images.
- [init(CGImage:orientation:options:)](vnimagerequesthandler/init%28cgimage_orientation_options_%29-8imhf.md)
- [init(cgImage:orientation:options:)](vnimagerequesthandler/init%28cgimage_orientation_options_%29-63ojm.md): Creates a handler to be used for performing requests on a Core Graphics image with known orientation.
- [init(CIImage:options:)](vnimagerequesthandler/init%28ciimage_options_%29-55zel.md)
- [init(ciImage:options:)](vnimagerequesthandler/init%28ciimage_options_%29-4wf33.md): Creates a handler to use for performing requests on Core Image image data.
- [init(CIImage:orientation:options:)](vnimagerequesthandler/init%28ciimage_orientation_options_%29-8p8h1.md)
- [init(ciImage:orientation:options:)](vnimagerequesthandler/init%28ciimage_orientation_options_%29-3svy6.md): Creates a handler to be used for performing requests on Core Image image data of a known orientation.
- [init(CVPixelBuffer:options:)](vnimagerequesthandler/init%28cvpixelbuffer_options_%29-3pee9.md)
- [init(cvPixelBuffer:options:)](vnimagerequesthandler/init%28cvpixelbuffer_options_%29-bkd7.md): Creates a handler for performing requests on a Core Video pixel buffer.
- [init(CVPixelBuffer:orientation:options:)](vnimagerequesthandler/init%28cvpixelbuffer_orientation_options_%29-160f.md)
- [init(cvPixelBuffer:orientation:options:)](vnimagerequesthandler/init%28cvpixelbuffer_orientation_options_%29-9fxug.md): Creates a handler for performing requests on a Core Video pixel buffer of a known orientation.
- [init(CVPixelBuffer:depthData:orientation:options:)](vnimagerequesthandler/init%28cvpixelbuffer_depthdata_orientation_options_%29-3u960.md)
- [init(cvPixelBuffer:depthData:orientation:options:)](vnimagerequesthandler/init%28cvpixelbuffer_depthdata_orientation_options_%29-3mj2d.md)
- [init(CMSampleBuffer:options:)](vnimagerequesthandler/init%28cmsamplebuffer_options_%29-4mpwd.md)
- [init(cmSampleBuffer:options:)](vnimagerequesthandler/init%28cmsamplebuffer_options_%29-2yodn.md): Creates a request handler that performs requests on an image contained within a sample buffer.
- [init(CMSampleBuffer:orientation:options:)](vnimagerequesthandler/init%28cmsamplebuffer_orientation_options_%29-6qeht.md)
- [init(cmSampleBuffer:orientation:options:)](vnimagerequesthandler/init%28cmsamplebuffer_orientation_options_%29-335k4.md): Creates a request handler that performs requests on an image of a specified orientation contained within a sample buffer.
- [init(CMSampleBuffer:depthData:orientation:options:)](vnimagerequesthandler/init%28cmsamplebuffer_depthdata_orientation_options_%29-yi6q.md)
- [init(cmSampleBuffer:depthData:orientation:options:)](vnimagerequesthandler/init%28cmsamplebuffer_depthdata_orientation_options_%29-8bjyh.md): Creates a request handler that performs requests on an image in a sample buffer that contains depth data.
- [init(data:options:)](vnimagerequesthandler/init%28data_options_%29.md): Creates a handler to use for performing requests on an image in a data object.
- [init(data:orientation:options:)](vnimagerequesthandler/init%28data_orientation_options_%29.md): Creates a handler to use for performing requests on an image of known orientation.
- [init(URL:options:)](vnimagerequesthandler/init%28url_options_%29-19t0u.md)
- [init(url:options:)](vnimagerequesthandler/init%28url_options_%29-4k623.md): Creates a handler to be used for performing requests on an image at the specified URL.
- [init(URL:orientation:options:)](vnimagerequesthandler/init%28url_orientation_options_%29-ou7m.md)
- [init(url:orientation:options:)](vnimagerequesthandler/init%28url_orientation_options_%29-70nta.md): Creates a handler to be used for performing requests on an image with known orientation, at the specified URL.

### Executing a Request Handler

- [perform(\_:)](vnimagerequesthandler/perform%28__%29.md): Schedules Vision requests to perform.

### Setting Image Options

- [VNImageOption](vnimageoption.md): An option key passed into an image request handler that takes an auxiliary image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [Classifying images for categorization and search](classifying-images-for-categorization-and-search.md): Analyze and label images using a Vision classification request.
- [Analyzing Image Similarity with Feature Print](analyzing-image-similarity-with-feature-print.md): Generate a feature print to compute distance between images.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.

# VNImageRequestHandler (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that processes one or more image-analysis request pertaining to a single image.

## Declaration

```objectivec
@interface VNImageRequestHandler : NSObject
```

## Mentioned In

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md)
- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md)
- [Recognizing Text in Images](recognizing-text-in-images.md)

<a id="overview"></a>

## Overview

Instantiate this handler to perform Vision requests on a single image. You specify the image and, optionally, a completion handler at the time of creation, and call [performRequests:error:](vnimagerequesthandler/perform%28__%29.md) to begin executing the request.

## Topics

### Creating a Request Handler

- [initWithCGImage:options:](vnimagerequesthandler/init%28cgimage_options_%29-4qda6.md): Creates a handler to be used for performing requests on Core Graphics images.
- [initWithCGImage:orientation:options:](vnimagerequesthandler/init%28cgimage_orientation_options_%29-63ojm.md): Creates a handler to be used for performing requests on a Core Graphics image with known orientation.
- [initWithCIImage:options:](vnimagerequesthandler/init%28ciimage_options_%29-4wf33.md): Creates a handler to use for performing requests on Core Image image data.
- [initWithCIImage:orientation:options:](vnimagerequesthandler/init%28ciimage_orientation_options_%29-3svy6.md): Creates a handler to be used for performing requests on Core Image image data of a known orientation.
- [initWithCVPixelBuffer:options:](vnimagerequesthandler/init%28cvpixelbuffer_options_%29-bkd7.md): Creates a handler for performing requests on a Core Video pixel buffer.
- [initWithCVPixelBuffer:orientation:options:](vnimagerequesthandler/init%28cvpixelbuffer_orientation_options_%29-9fxug.md): Creates a handler for performing requests on a Core Video pixel buffer of a known orientation.
- [initWithCVPixelBuffer:depthData:orientation:options:](vnimagerequesthandler/init%28cvpixelbuffer_depthdata_orientation_options_%29-3mj2d.md)
- [initWithCMSampleBuffer:options:](vnimagerequesthandler/init%28cmsamplebuffer_options_%29-2yodn.md): Creates a request handler that performs requests on an image contained within a sample buffer.
- [initWithCMSampleBuffer:orientation:options:](vnimagerequesthandler/init%28cmsamplebuffer_orientation_options_%29-335k4.md): Creates a request handler that performs requests on an image of a specified orientation contained within a sample buffer.
- [initWithCMSampleBuffer:depthData:orientation:options:](vnimagerequesthandler/init%28cmsamplebuffer_depthdata_orientation_options_%29-8bjyh.md): Creates a request handler that performs requests on an image in a sample buffer that contains depth data.
- [initWithData:options:](vnimagerequesthandler/init%28data_options_%29.md): Creates a handler to use for performing requests on an image in a data object.
- [initWithData:orientation:options:](vnimagerequesthandler/init%28data_orientation_options_%29.md): Creates a handler to use for performing requests on an image of known orientation.
- [initWithURL:options:](vnimagerequesthandler/init%28url_options_%29-4k623.md): Creates a handler to be used for performing requests on an image at the specified URL.
- [initWithURL:orientation:options:](vnimagerequesthandler/init%28url_orientation_options_%29-70nta.md): Creates a handler to be used for performing requests on an image with known orientation, at the specified URL.

### Executing a Request Handler

- [performRequests:error:](vnimagerequesthandler/perform%28__%29.md): Schedules Vision requests to perform.

### Setting Image Options

- [VNImageOption](vnimageoption.md): An option key passed into an image request handler that takes an auxiliary image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/init(cvpixelbuffer:properties:options:)-69695](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/init(cvpixelbuffer:properties:options:)-69695)

# init(cvPixelBuffer:properties:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a CIFilter that will in turn return a properly processed CIImage as “outputImage”.

> Use new CIRAWFilter class instead.

## Declaration

```swift
init!(cvPixelBuffer pixelBuffer: CVPixelBuffer!, properties: [AnyHashable : Any]!, options: [CIRAWFilterOption : Any]! = [:])
```

<a id="discussion"></a>

## Discussion

Note that when using this initializer, you should pass in a CVPixelBufferRef with one of the following Raw pixel format types kCVPixelFormatType_14Bayer_GRBG, kCVPixelFormatType_14Bayer_RGGB, kCVPixelFormatType_14Bayer_BGGR, kCVPixelFormatType_14Bayer_GBRG as well as the root properties attachment from the CMSampleBufferRef.

# filterWithCVPixelBuffer:properties:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a CIFilter that will in turn return a properly processed CIImage as “outputImage”.

> Use new CIRAWFilter class instead.

## Declaration

```objectivec
+ (CIFilter *) filterWithCVPixelBuffer:(CVPixelBufferRef) pixelBuffer properties:(NSDictionary *) properties options:(NSDictionary<NSString *,id> *) options;
```

<a id="discussion"></a>

## Discussion

Note that when using this initializer, you should pass in a CVPixelBufferRef with one of the following Raw pixel format types kCVPixelFormatType_14Bayer_GRBG, kCVPixelFormatType_14Bayer_RGGB, kCVPixelFormatType_14Bayer_BGGR, kCVPixelFormatType_14Bayer_GBRG as well as the root properties attachment from the CMSampleBufferRef.

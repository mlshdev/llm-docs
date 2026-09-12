> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/browseraccessibilityimagedata(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/browseraccessibilityimagedata(_:))

# browserAccessibilityImageData(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func browserAccessibilityImageData(_ attributes: [AnyHashable : Any]) -> CVPixelBuffer?
```

## Parameters

- `attributes`: A dictionary of CVPixelBuffer attributes specifying the desired format and size.

<a id="return-value"></a>

## Return Value

A CVPixelBuffer containing the image pixel data, or NULL if this element does not represent an image or the requested pixel format is unsupported. The caller is responsible for releasing the returned pixel buffer.

<a id="discussion"></a>

## Discussion

Returns image pixel data for this element as a CVPixelBuffer.

Supported keys: kCVPixelBufferPixelFormatTypeKey (NSNumber / OSType) — The desired pixel format, e.g. kCVPixelFormatType_32RGBA. Required. kCVPixelBufferWidthKey  (NSNumber) — Target image width in pixels. Absent means native width. kCVPixelBufferHeightKey (NSNumber) — Target image height in pixels. Absent means native height.

# browserAccessibilityImageData: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (CVPixelBufferRef) browserAccessibilityImageData:(NSDictionary *) attributes;
```

## Parameters

- `attributes`: A dictionary of CVPixelBuffer attributes specifying the desired format and size.

<a id="return-value"></a>

## Return Value

A CVPixelBuffer containing the image pixel data, or NULL if this element does not represent an image or the requested pixel format is unsupported. The caller is responsible for releasing the returned pixel buffer.

<a id="discussion"></a>

## Discussion

Returns image pixel data for this element as a CVPixelBuffer.

Supported keys: kCVPixelBufferPixelFormatTypeKey (NSNumber / OSType) — The desired pixel format, e.g. kCVPixelFormatType_32RGBA. Required. kCVPixelBufferWidthKey  (NSNumber) — Target image width in pixels. Absent means native width. kCVPixelBufferHeightKey (NSNumber) — Target image height in pixels. Absent means native height.

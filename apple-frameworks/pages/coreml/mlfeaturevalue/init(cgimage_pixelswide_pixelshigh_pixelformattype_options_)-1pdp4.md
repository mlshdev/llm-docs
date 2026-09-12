> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(cgimage:pixelswide:pixelshigh:pixelformattype:options:)-1pdp4](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(cgimage:pixelswide:pixelshigh:pixelformattype:options:)-1pdp4)

# init(cgImage:pixelsWide:pixelsHigh:pixelFormatType:options:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from CGImage (orientation is assumed to be kCGImagePropertyOrientationUp)

## Declaration

```swift
convenience init(cgImage: CGImage, pixelsWide: Int, pixelsHigh: Int, pixelFormatType: OSType, options: [MLFeatureValue.ImageOption : Any]? = nil) throws
```

# featureValueWithCGImage:pixelsWide:pixelsHigh:pixelFormatType:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from CGImage (orientation is assumed to be kCGImagePropertyOrientationUp)

## Declaration

```objectivec
+ (instancetype) featureValueWithCGImage:(CGImageRef) cgImage pixelsWide:(NSInteger) pixelsWide pixelsHigh:(NSInteger) pixelsHigh pixelFormatType:(OSType) pixelFormatType options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

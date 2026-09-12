> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(imageat:pixelswide:pixelshigh:pixelformattype:options:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(imageat:pixelswide:pixelshigh:pixelformattype:options:))

# init(imageAt:pixelsWide:pixelsHigh:pixelFormatType:options:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from an image on disk. Orientation is read from Exif if avaiable

## Declaration

```swift
convenience init(imageAt url: URL, pixelsWide: Int, pixelsHigh: Int, pixelFormatType: OSType, options: [MLFeatureValue.ImageOption : Any]? = nil) throws
```

# featureValueWithImageAtURL:pixelsWide:pixelsHigh:pixelFormatType:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from an image on disk. Orientation is read from Exif if avaiable

## Declaration

```objectivec
+ (instancetype) featureValueWithImageAtURL:(NSURL *) url pixelsWide:(NSInteger) pixelsWide pixelsHigh:(NSInteger) pixelsHigh pixelFormatType:(OSType) pixelFormatType options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(imageat:constraint:options:)

# init(imageAt:constraint:options:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from an image on disk, using a model specified image constraint. Orientation is read from Exif if avaiable

## Declaration

```swift
convenience init(imageAt url: URL, constraint: MLImageConstraint, options: [MLFeatureValue.ImageOption : Any]? = nil) throws
```

# featureValueWithImageAtURL:constraint:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from an image on disk, using a model specified image constraint. Orientation is read from Exif if avaiable

## Declaration

```objectivec
+ (instancetype) featureValueWithImageAtURL:(NSURL *) url constraint:(MLImageConstraint *) constraint options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

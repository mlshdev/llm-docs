> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(imageat:orientation:constraint:options:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(imageat:orientation:constraint:options:))

# init(imageAt:orientation:constraint:options:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from an image on disk using a model specified image constraint. The passed in orientation supersedes any in the file

## Declaration

```swift
convenience init(imageAt url: URL, orientation: CGImagePropertyOrientation, constraint: MLImageConstraint, options: [MLFeatureValue.ImageOption : Any]? = nil) throws
```

# featureValueWithImageAtURL:orientation:constraint:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from an image on disk using a model specified image constraint. The passed in orientation supersedes any in the file

## Declaration

```objectivec
+ (instancetype) featureValueWithImageAtURL:(NSURL *) url orientation:(CGImagePropertyOrientation) orientation constraint:(MLImageConstraint *) constraint options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

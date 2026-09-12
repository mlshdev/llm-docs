> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassifyimagerequest/results](https://developer.apple.com/documentation/vision/vnclassifyimagerequest/results)

# results (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The results of the image classification request.

## Declaration

```swift
var results: [VNClassificationObservation]? { get }
```

## See Also

### Accessing Results

- [supportedIdentifiers()](supportedidentifiers%28%29.md): Returns the classification identifiers that the request supports in its current configuration.
- [VNClassificationObservation](../vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [knownClassifications(forRevision:)](knownclassifications%28forrevision_%29.md): Deprecated. Requests the collection of classifications that the Vision framework recognizes.

# results (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The results of the image classification request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<VNClassificationObservation *> * results;
```

## See Also

### Accessing Results

- [supportedIdentifiersAndReturnError:](supportedidentifiers%28%29.md): Returns the classification identifiers that the request supports in its current configuration.
- [VNClassificationObservation](../vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [knownClassificationsForRevision:error:](knownclassifications%28forrevision_%29.md): Deprecated. Requests the collection of classifications that the Vision framework recognizes.

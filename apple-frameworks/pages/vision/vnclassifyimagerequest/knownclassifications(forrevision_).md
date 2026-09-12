> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassifyimagerequest/knownclassifications(forrevision:)](https://developer.apple.com/documentation/vision/vnclassifyimagerequest/knownclassifications(forrevision:))

# knownClassifications(forRevision:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · tvOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Requests the collection of classifications that the Vision framework recognizes.

> Use [supportedIdentifiers()](supportedidentifiers%28%29.md) instead.

## Declaration

```swift
class func knownClassifications(forRevision requestRevision: Int) throws -> [VNClassificationObservation]
```

## Parameters

- `requestRevision`: The revision of the request for which to report classifications.

<a id="return-value"></a>

## Return Value

An array of classifications for the revision, or `nil` if an error occurs.

## See Also

### Accessing Results

- [supportedIdentifiers()](supportedidentifiers%28%29.md): Returns the classification identifiers that the request supports in its current configuration.
- [results](results.md): The results of the image classification request.
- [VNClassificationObservation](../vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.

# knownClassificationsForRevision:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · tvOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Requests the collection of classifications that the Vision framework recognizes.

> Use [supportedIdentifiersAndReturnError:](supportedidentifiers%28%29.md) instead.

## Declaration

```objectivec
+ (NSArray<VNClassificationObservation *> *) knownClassificationsForRevision:(NSUInteger) requestRevision error:(NSError **) error;
```

## Parameters

- `requestRevision`: The revision of the request for which to report classifications.
- `error`: The address of the error variable to populate if the call fails.

<a id="return-value"></a>

## Return Value

An array of classifications for the revision, or `nil` if an error occurs.

## See Also

### Accessing Results

- [supportedIdentifiersAndReturnError:](supportedidentifiers%28%29.md): Returns the classification identifiers that the request supports in its current configuration.
- [results](results.md): The results of the image classification request.
- [VNClassificationObservation](../vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.

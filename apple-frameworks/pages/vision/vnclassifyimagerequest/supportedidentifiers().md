> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassifyimagerequest/supportedidentifiers()](https://developer.apple.com/documentation/vision/vnclassifyimagerequest/supportedidentifiers())

# supportedIdentifiers() (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the classification identifiers that the request supports in its current configuration.

## Declaration

```swift
func supportedIdentifiers() throws -> [String]
```

<a id="return-value"></a>

## Return Value

An array of supported identifiers.

## See Also

### Accessing Results

- [results](results.md): The results of the image classification request.
- [VNClassificationObservation](../vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [knownClassifications(forRevision:)](knownclassifications%28forrevision_%29.md): Deprecated. Requests the collection of classifications that the Vision framework recognizes.

# supportedIdentifiersAndReturnError: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the classification identifiers that the request supports in its current configuration.

## Declaration

```objectivec
- (NSArray<NSString *> *) supportedIdentifiersAndReturnError:(NSError **) error;
```

## Parameters

- `error`: A pointer to an error object.

  If an error occurs, the system sets the pointer an `NSError` instance that contains the error details. Specify `nil` for this parameter if you don’t want error details.

<a id="return-value"></a>

## Return Value

An array of supported identifiers. On failure, this method returns `nil`.

## See Also

### Accessing Results

- [results](results.md): The results of the image classification request.
- [VNClassificationObservation](../vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [knownClassificationsForRevision:error:](knownclassifications%28forrevision_%29.md): Deprecated. Requests the collection of classifications that the Vision framework recognizes.

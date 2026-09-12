> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetector/features(in:)](https://developer.apple.com/documentation/coreimage/cidetector/features(in:))

# features(in:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

Searches for features in an image.

## Declaration

```swift
func features(in image: CIImage) -> [CIFeature]
```

## Parameters

- `image`: The image you want to examine.

<a id="return-value"></a>

## Return Value

An array of [CIFeature](../cifeature.md) objects. Each object represents a feature detected in the image.

## See Also

### Using a Detector Object to Find Features

- [features(in:options:)](features%28in_options_%29.md): Searches for features in an image based on the specified image orientation.

# featuresInImage: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

Searches for features in an image.

## Declaration

```objectivec
- (NSArray<CIFeature *> *) featuresInImage:(CIImage *) image;
```

## Parameters

- `image`: The image you want to examine.

<a id="return-value"></a>

## Return Value

An array of [CIFeature](../cifeature.md) objects. Each object represents a feature detected in the image.

## See Also

### Using a Detector Object to Find Features

- [featuresInImage:options:](features%28in_options_%29.md): Searches for features in an image based on the specified image orientation.

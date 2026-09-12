> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetector/features(in:options:)](https://developer.apple.com/documentation/coreimage/cidetector/features(in:options:))

# features(in:options:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

Searches for features in an image based on the specified image orientation.

## Declaration

```swift
func features(in image: CIImage, options: [String : Any]? = nil) -> [CIFeature]
```

## Parameters

- `image`: The image you want to examine.
- `options`: A dictionary that specifies feature detection options. See [Feature Detection Keys](../feature-detection-keys.md) for allowed keys and their possible values.

<a id="return-value"></a>

## Return Value

An array of [CIFeature](../cifeature.md) objects. Each object represents a feature detected in the image.

## See Also

### Using a Detector Object to Find Features

- [features(in:)](features%28in_%29.md): Searches for features in an image.

# featuresInImage:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

Searches for features in an image based on the specified image orientation.

## Declaration

```objectivec
- (NSArray<CIFeature *> *) featuresInImage:(CIImage *) image options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `image`: The image you want to examine.
- `options`: A dictionary that specifies feature detection options. See [Feature Detection Keys](../feature-detection-keys.md) for allowed keys and their possible values.

<a id="return-value"></a>

## Return Value

An array of [CIFeature](../cifeature.md) objects. Each object represents a feature detected in the image.

## See Also

### Using a Detector Object to Find Features

- [featuresInImage:](features%28in_%29.md): Searches for features in an image.

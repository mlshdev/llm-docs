> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vncoremlmodel/inputimagefeaturename

# inputImageFeatureName (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The name of the feature value that Vision sets from the request handler.

## Declaration

```swift
var inputImageFeatureName: String { get set }
```

<a id="Discussion"></a>

## Discussion

By default, Vision uses the first input found, but you can manually set that input to another [featureName](../vncoremlfeaturevalueobservation/featurename.md) instead.

## See Also

### Providing Features

- [featureProvider](featureprovider.md): An optional object to support inputs outside Vision.

# inputImageFeatureName (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The name of the feature value that Vision sets from the request handler.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * inputImageFeatureName;
```

<a id="Discussion"></a>

## Discussion

By default, Vision uses the first input found, but you can manually set that input to another [featureName](../vncoremlfeaturevalueobservation/featurename.md) instead.

## See Also

### Providing Features

- [featureProvider](featureprovider.md): An optional object to support inputs outside Vision.

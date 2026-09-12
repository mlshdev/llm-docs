> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/citextfeature/subfeatures](https://developer.apple.com/documentation/coreimage/citextfeature/subfeatures)

# subFeatures (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array containing additional features detected within the feature.

## Declaration

```swift
var subFeatures: [Any]? { get }
```

<a id="discussion"></a>

## Discussion

A text detector can identify both a major region that is likely to contain text as well as the areas within that region that likely to contain individual text features. Such features might be single characters, groups of closely-packed characters, or entire words.

To detect sub-features, `/CIDetector/featuresInImage:options:` needs to be called with the [CIDetectorReturnSubFeatures](../cidetectorreturnsubfeatures.md) option set to true.

# subFeatures (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array containing additional features detected within the feature.

## Declaration

```objectivec
@property (readonly, nullable) NSArray * subFeatures;
```

<a id="discussion"></a>

## Discussion

A text detector can identify both a major region that is likely to contain text as well as the areas within that region that likely to contain individual text features. Such features might be single characters, groups of closely-packed characters, or entire words.

To detect sub-features, `/CIDetector/featuresInImage:options:` needs to be called with the [CIDetectorReturnSubFeatures](../cidetectorreturnsubfeatures.md) option set to true.

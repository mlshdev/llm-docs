> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfidencelevel](https://developer.apple.com/documentation/arkit/arconfidencelevel)

# ARConfidenceLevel (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Degrees to which the framework is confident about depth-data accuracy.

## Declaration

```swift
enum ARConfidenceLevel
```

## Topics

### Levels

- [ARConfidenceLevel.low](arconfidencelevel/low.md): Depth-value accuracy in which the framework is less confident.
- [ARConfidenceLevel.medium](arconfidencelevel/medium.md): Depth-value accuracy in which the framework is moderately confident.
- [ARConfidenceLevel.high](arconfidencelevel/high.md): Depth-value accuracy in which the framework is fairly confident.

### Initializers

- [init(rawValue:)](arconfidencelevel/init%28rawvalue_%29.md)

### Default Implementations

- [Comparable Implementations](arconfidencelevel/comparable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Depth Information

- [depthMap](ardepthdata/depthmap.md): The estimated distance from the device to its environment, in meters.
- [confidenceMap](ardepthdata/confidencemap.md): The framework’s confidence in the accuracy of the depth-map data.

# ARConfidenceLevel (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Degrees to which the framework is confident about depth-data accuracy.

## Declaration

```objectivec
enum ARConfidenceLevel : NSInteger;
```

## Topics

### Levels

- [ARConfidenceLevelLow](arconfidencelevel/low.md): Depth-value accuracy in which the framework is less confident.
- [ARConfidenceLevelMedium](arconfidencelevel/medium.md): Depth-value accuracy in which the framework is moderately confident.
- [ARConfidenceLevelHigh](arconfidencelevel/high.md): Depth-value accuracy in which the framework is fairly confident.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Depth Information

- [depthMap](ardepthdata/depthmap.md): The estimated distance from the device to its environment, in meters.
- [confidenceMap](ardepthdata/confidencemap.md): The framework’s confidence in the accuracy of the depth-map data.

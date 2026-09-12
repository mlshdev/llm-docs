> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgaussiandistribution/mean](https://developer.apple.com/documentation/gameplaykit/gkgaussiandistribution/mean)

# mean (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The mean value of the distribution (also called the *expected value* or *median*).

## Declaration

```swift
var mean: Float { get }
```

<a id="Discussion"></a>

## Discussion

Random samplings from the distribution are most likely to result in the mean value, with other values increasingly far from the mean occurring with decreasing probability.

This property is read-only—its value is always the midpoint between the values of the inherited [lowestValue](../gkrandomdistribution/lowestvalue.md) and [highestValue](../gkrandomdistribution/highestvalue.md) properties (`mean = (highest + lowest) / 2`).

## See Also

### Working with Characteristics of a Distribution

- [deviation](deviation.md): The standard deviation of the distribution (also called *sigma*).

# mean (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The mean value of the distribution (also called the *expected value* or *median*).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) float mean;
```

<a id="Discussion"></a>

## Discussion

Random samplings from the distribution are most likely to result in the mean value, with other values increasingly far from the mean occurring with decreasing probability.

This property is read-only—its value is always the midpoint between the values of the inherited [lowestValue](../gkrandomdistribution/lowestvalue.md) and [highestValue](../gkrandomdistribution/highestvalue.md) properties (`mean = (highest + lowest) / 2`).

## See Also

### Working with Characteristics of a Distribution

- [deviation](deviation.md): The standard deviation of the distribution (also called *sigma*).

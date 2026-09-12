> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkapplewalkingsteadinessclassification/maximum](https://developer.apple.com/documentation/healthkit/hkapplewalkingsteadinessclassification/maximum)

# maximum

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS · watchOS 8.0+

The minimum walking steadiness percentage for the classification.

## Declaration

```swift
var maximum: HKQuantity { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the minimum walking steadiness value for the classification. It contains an [HKQuantity](../hkquantity.md) instance with a percentage value between `0.0` and `1.0`.

## See Also

### Accessing extremes

- [minimum](minimum.md): The maximum walking steadiness percentage for the classification.

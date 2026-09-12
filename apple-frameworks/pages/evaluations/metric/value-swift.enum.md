> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metric/value-swift.enum](https://developer.apple.com/documentation/evaluations/metric/value-swift.enum)

# Metric.Value

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A metric result value.

## Declaration

```swift
enum Value
```

## Topics

### Enumeration Cases

- [Metric.Value.failing](value-swift.enum/failing.md): A failing result.
- [Metric.Value.ignore](value-swift.enum/ignore.md): The metric doesn’t apply to this sample and aggregators skip it.
- [Metric.Value.passing](value-swift.enum/passing.md): A passing result.
- [Metric.Value.scoring(\_:)](value-swift.enum/scoring%28__%29.md): A numeric result.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a result

- [name](name.md): The name of the metric, used as the DataFrame column name.
- [value](value-swift.property.md): The result value of this metric.
- [doubleValue](doublevalue.md): The numeric value of this metric.
- [rationale](rationale.md): An optional rationale describing the result.

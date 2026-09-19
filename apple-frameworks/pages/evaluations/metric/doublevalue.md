> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/metric/doublevalue

# doubleValue

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The numeric value of this metric.

## Declaration

```swift
var doubleValue: Double? { get }
```

<a id="discussion"></a>

## Discussion

- `passing` → `1.0`
- `failing` → `0.0`
- `scoring(x)` → `x`
- `ignore` → `nil`

## See Also

### Inspecting a result

- [name](name.md): The name of the metric, used as the DataFrame column name.
- [value](value-swift.property.md): The result value of this metric.
- [rationale](rationale.md): An optional rationale describing the result.
- [Metric.Value](value-swift.enum.md): A metric result value.

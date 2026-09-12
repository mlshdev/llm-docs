> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metric/scoring(_:rationale:)](https://developer.apple.com/documentation/evaluations/metric/scoring(_:rationale:))

# scoring(\_:rationale:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Returns a metric with a numeric result.

## Declaration

```swift
func scoring(_ value: Double, rationale: String? = nil) -> Metric
```

## Mentioned In

- [Evaluating language model responses](../evaluating-language-model-responses.md)

<a id="discussion"></a>

## Discussion

```swift
let scoreResult = metric.scoring(0.85, rationale: "Partial match")
```

## See Also

### Producing results

- [passing(rationale:)](passing%28rationale_%29.md): Returns a metric with a passing result.
- [failing(rationale:)](failing%28rationale_%29.md): Returns a metric with a failing result.
- [ignore(rationale:)](ignore%28rationale_%29.md): Returns a metric with an ignored result, excluded from aggregation.

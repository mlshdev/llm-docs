> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metric/failing(rationale:)](https://developer.apple.com/documentation/evaluations/metric/failing(rationale:))

# failing(rationale:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Returns a metric with a failing result.

## Declaration

```swift
func failing(rationale: String? = nil) -> Metric
```

## Mentioned In

- [Evaluating language model responses](../evaluating-language-model-responses.md)

<a id="discussion"></a>

## Discussion

```swift
let failingResult = metric.failing(rationale: "No match found")
```

## See Also

### Producing results

- [passing(rationale:)](passing%28rationale_%29.md): Returns a metric with a passing result.
- [scoring(\_:rationale:)](scoring%28__rationale_%29.md): Returns a metric with a numeric result.
- [ignore(rationale:)](ignore%28rationale_%29.md): Returns a metric with an ignored result, excluded from aggregation.

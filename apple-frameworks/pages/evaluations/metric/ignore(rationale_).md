> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metric/ignore(rationale:)](https://developer.apple.com/documentation/evaluations/metric/ignore(rationale:))

# ignore(rationale:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Returns a metric with an ignored result, excluded from aggregation.

## Declaration

```swift
func ignore(rationale: String? = nil) -> Metric
```

<a id="discussion"></a>

## Discussion

```swift
let ignoredResult = metric.ignore()
```

## See Also

### Producing results

- [passing(rationale:)](passing%28rationale_%29.md): Returns a metric with a passing result.
- [failing(rationale:)](failing%28rationale_%29.md): Returns a metric with a failing result.
- [scoring(\_:rationale:)](scoring%28__rationale_%29.md): Returns a metric with a numeric result.

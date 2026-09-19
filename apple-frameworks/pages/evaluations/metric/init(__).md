> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/metric/init(_:)

# init(\_:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a metric with just a name.

## Declaration

```swift
init(_ name: String)
```

<a id="discussion"></a>

## Discussion

```swift
let metric = Metric("Accuracy")
```

Use the factory methods — `passing`, `failing`, `scoring`, or `ignore` — to produce results.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/init(labels:configuration:)

# init(labels:configuration:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a time series classifier.

## Declaration

```swift
init(labels: Set<Label>, configuration: TimeSeriesClassifierConfiguration = .init())
```

## Parameters

- `labels`: The labels used to train the classifier.
- `configuration`: The configuration.

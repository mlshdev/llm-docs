> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/datebins/init(data:desiredcount:calendar:)](https://developer.apple.com/documentation/charts/datebins/init(data:desiredcount:calendar:))

# init(data:desiredCount:calendar:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Automatically determine the bins from data.

## Declaration

```swift
nonisolated init(data: [Date], desiredCount: Int? = nil, calendar: Calendar = .autoupdatingCurrent)
```

## Parameters

- `data`: The given data values.
- `desiredCount`: The desired number of bins for the given data. If `nil`, infer the number of bins automatically from data using [Scott’s normal reference rule](https://doi.org/10.1093/biomet/66.3.605) capped at 200.

<a id="return-value"></a>

## Return Value

The inferred bins.

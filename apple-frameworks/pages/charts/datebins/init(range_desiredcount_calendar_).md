> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/datebins/init(range:desiredcount:calendar:)](https://developer.apple.com/documentation/charts/datebins/init(range:desiredcount:calendar:))

# init(range:desiredCount:calendar:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Automatically determine the bins from a range of data.

## Declaration

```swift
nonisolated init(range: ClosedRange<Date>, desiredCount: Int = 10, calendar: Calendar = .autoupdatingCurrent)
```

## Parameters

- `range`: The range the bins should cover.
- `desiredCount`: The desired number of bins for the given data.

<a id="return-value"></a>

## Return Value

The inferred bins.

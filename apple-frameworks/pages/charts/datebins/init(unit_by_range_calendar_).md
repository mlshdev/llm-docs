> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/datebins/init(unit:by:range:calendar:)](https://developer.apple.com/documentation/charts/datebins/init(unit:by:range:calendar:))

# init(unit:by:range:calendar:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates uniform bins covering the given range.

## Declaration

```swift
nonisolated init(unit: Calendar.Component, by stride: Int = 1, range: ClosedRange<Date>, calendar: Calendar = .autoupdatingCurrent)
```

## Parameters

- `unit`: The size of the bins.
- `stride`: The number of components for each bin.
- `range`: The range of the data the bins cover.
- `calendar`: The calendar to use.

<a id="return-value"></a>

## Return Value

The bins.

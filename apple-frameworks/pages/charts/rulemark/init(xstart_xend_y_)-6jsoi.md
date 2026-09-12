> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/rulemark/init(xstart:xend:y:)-6jsoi](https://developer.apple.com/documentation/charts/rulemark/init(xstart:xend:y:)-6jsoi)

# init(xStart:xEnd:y:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a horizontal rule mark that plots values on its x interval.

## Declaration

```swift
nonisolated init<X>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: CGFloat? = nil) where X : Plottable
```

## Parameters

- `xStart`: The value plotted with x start.
- `xEnd`: The value plotted with x end.
- `y`: The y position.   If `y` is `nil`, the rule will be centered vertically by default.

<a id="Discussion"></a>

### Discussion

Use this initializer to create a horizontal rule at x positions from `xStart` to `xEnd` for a single y position:

```swift
Chart(data) {
    RuleMark(
        xStart: .value("Start Date", $0.startDate),
        xEnd: .value("End Date", $0.endDate)
    )
}
```

![Horizontal rule chart with x-axis showing the month in the year 2020 starting with January and ending with December, and with y-axis showing a pollen source: Trees. There are 2 rules. 1 starting in January and going until the end of September and 1 spanning December.](https://developer.apple.com/images/com.apple.Charts/LineSegmentMarkSwift.LineSegmentMarkHorizontalSingleLineSegmentChart@2x.png)

See the second code example in [RuleMark](../rulemark.md) for the setup of the structure that contains the `startDate`, `endDate`, and `source` properties.

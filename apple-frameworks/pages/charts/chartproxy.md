> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy](https://developer.apple.com/documentation/charts/chartproxy)

# ChartProxy

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A proxy that you use to access the scales and plot area of a chart.

## Declaration

```swift
struct ChartProxy
```

<a id="overview"></a>

## Overview

You get a chart proxy from the [chartOverlay(alignment:content:)](https://developer.apple.com/documentation/swiftui/view/chartoverlay%28alignment:content:%29) and [chartBackground(alignment:content:)](https://developer.apple.com/documentation/swiftui/view/chartbackground%28alignment:content:%29) modifiers. You can use the chart proxy to convert data values to screen coordinates or vice-versa.

Below is an example where we convert the screen coordinates from a drag gesture to data values.

```swift
Chart(data) {
    LineMark(
        x: .value("date", $0.date),
        y: .value("price", $0.price)
    )
}
.chartOverlay { proxy in
    GeometryReader { geometry in
        Rectangle().fill(.clear).contentShape(Rectangle())
            .gesture(
                DragGesture()
                    .onChanged { value in
                        // Convert the gesture location to the coordinate space of the plot area.
                        let origin = geometry[proxy.plotAreaFrame].origin
                        let location = CGPoint(
                            x: value.location.x - origin.x,
                            y: value.location.y - origin.y
                        )
                        // Get the x (date) and y (price) value from the location.
                        let (date, price) = proxy.value(at: location, as: (Date, Double).self)
                        print("Location: \(date), \(price)")
                    }
            )
    }
}
```

## Topics

### Instance Properties

- [plotAreaFrame](chartproxy/plotareaframe.md): Deprecated. An anchor to the frame of the chart’s plot.
- [plotAreaSize](chartproxy/plotareasize.md): Deprecated. The size of the plot in the chart.
- [plotContainerFrame](chartproxy/plotcontainerframe.md): An anchor to the frame of the chart’s plot container, or `nil` if there is no chart in the context of the chart proxy.
- [plotFrame](chartproxy/plotframe.md): An anchor to the frame of the chart’s plot, or `nil` if there is no chart in the context of the chart proxy.
- [plotSize](chartproxy/plotsize.md): The size of the plot in the chart.

### Instance Methods

- [angle(at:)](chartproxy/angle%28at_%29.md): Returns the angle relative to the plot area center, where the 12 o’clock position is interpreted as zero degrees, increasing clockwise.
- [foregroundStyle(for:)](chartproxy/foregroundstyle%28for_%29.md): Returns the foreground style for the given data value. Returns `nil` if the foreground style scale is unavailable, or the value is invalid.
- [foregroundStyleDomain(dataType:)](chartproxy/foregroundstyledomain%28datatype_%29.md)
- [lineStyle(for:)](chartproxy/linestyle%28for_%29.md): Returns the line style for the given data value. Returns `nil` if the line style scale is unavailable, or the value is invalid.
- [lineStyleDomain(dataType:)](chartproxy/linestyledomain%28datatype_%29.md)
- [position(for:)](chartproxy/position%28for_%29.md): Returns the x and y positions as a `CGPoint` for the given data values, or `nil` if either the X or the y scale is unavailable or if any data value is invalid. The returned position is relative to the plot.
- [position(forX:)](chartproxy/position%28forx_%29.md): Returns the x position for the given data value, or `nil` if the x scale is unavailable or if the data value is invalid. The returned position is relative to the plot.
- [position(forY:)](chartproxy/position%28fory_%29.md): Returns the y position for the given data value, or `nil` if the y scale is unavailable or if the data value is invalid. The returned position is relative to the plot.
- [positionRange(for:)](chartproxy/positionrange%28for_%29.md): Returns the range of x and y positions for the given pair of data values, or `nil` if the y scale is unavailable or if the value is invalid.
- [positionRange(forX:)](chartproxy/positionrange%28forx_%29.md): Returns the range of x position for the given data value, or `nil` if the x scale is unavailable or if the value is invalid. The returned position range is relative to the plot.
- [positionRange(forY:)](chartproxy/positionrange%28fory_%29.md): Returns the range of y position for the given data value, or `nil` if the x scale is unavailable or if the value is invalid. The returned position range is relative to the plot.
- [selectAngleValue(at:)](chartproxy/selectanglevalue%28at_%29.md)
- [selectXRange(from:to:)](chartproxy/selectxrange%28from_to_%29.md)
- [selectXValue(at:)](chartproxy/selectxvalue%28at_%29.md)
- [selectYRange(from:to:)](chartproxy/selectyrange%28from_to_%29.md)
- [selectYValue(at:)](chartproxy/selectyvalue%28at_%29.md)
- [symbol(for:)](chartproxy/symbol%28for_%29.md): Returns the symbol for the given data value. Returns `nil` if the symbol scale is unavailable, or the value is invalid.
- [symbolDomain(dataType:)](chartproxy/symboldomain%28datatype_%29.md)
- [symbolSize(for:)](chartproxy/symbolsize%28for_%29.md): Returns the symbol size for the given data value. Returns `nil` if the symbol size scale is unavailable, or the value is invalid.
- [symbolSizeDomain(dataType:)](chartproxy/symbolsizedomain%28datatype_%29.md)
- [value(at:as:)](chartproxy/value%28at_as_%29.md): Returns the data values at the given position, or `nil` if the position does not correspond to a valid Y value.
- [value(atAngle:as:)](chartproxy/value%28atangle_as_%29.md): Returns the data value at the given angle, or `nil` if the angle does not correspond to a valid data value.
- [value(atX:as:)](chartproxy/value%28atx_as_%29.md): Returns the data value at the given x position, or `nil` if the position does not correspond to a valid X value.
- [value(atY:as:)](chartproxy/value%28aty_as_%29.md): Returns the data value at the given y position, or `nil` if the position does not correspond to a valid Y value.
- [xDomain(dataType:)](chartproxy/xdomain%28datatype_%29.md)
- [yDomain(dataType:)](chartproxy/ydomain%28datatype_%29.md)

## See Also

### Chart management

- [ChartPlotContent](chartplotcontent.md): A view that represents a chart’s plot area.

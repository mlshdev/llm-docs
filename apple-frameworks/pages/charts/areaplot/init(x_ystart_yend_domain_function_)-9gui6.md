> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/areaplot/init(x:ystart:yend:domain:function:)-9gui6](https://developer.apple.com/documentation/charts/areaplot/init(x:ystart:yend:domain:function:)-9gui6)

# init(x:yStart:yEnd:domain:function:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a mark that fills the area between two functions (yStart, yEnd) = f(x).

## Declaration

```swift
nonisolated init(x: LocalizedStringResource, yStart: LocalizedStringResource, yEnd: LocalizedStringResource, domain: ClosedRange<Double>? = nil, function: @escaping @Sendable (Double) -> (yStart: Double, yEnd: Double))
```

<a id="discussion"></a>

## Discussion

Parameters:

- x: The localized string resource for the x label.
- yStart: The localized string resource for the start label.
- yEnd: The localized string resource for the end label.
- domain: The domain of x. If set to `nil`, the domain of the chart’s x scale will be used.
- function: The function to graph. Returns a tuple of (yStart: yStart, yEnd: yEnd).

> **Note**

> For x values where the function is undefined or is infinity, the function is expected to return `Double.nan` or `Double.infinity` respectively.

## See Also

### Plotting functions

- [init(x:y:domain:function:)](init%28x_y_domain_function_%29-2fab1.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between zero and the given function.
- [init(x:y:domain:function:)](init%28x_y_domain_function_%29-1jmpp.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between zero and the given function.
- [init(x:y:domain:function:)](init%28x_y_domain_function_%29-etud.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between zero and the given function.
- [init(x:y:domain:function:)](init%28x_y_domain_function_%29-39eit.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between zero and the given function.
- [init(x:yStart:yEnd:domain:function:)](init%28x_ystart_yend_domain_function_%29-etcn.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between two functions (yStart, yEnd) = f(x).
- [init(x:yStart:yEnd:domain:function:)](init%28x_ystart_yend_domain_function_%29-5akqm.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between two functions (yStart, yEnd) = f(x).
- [init(x:yStart:yEnd:domain:function:)](init%28x_ystart_yend_domain_function_%29-23gxe.md): Conforms when `Content` is `FunctionAreaPlotContent`. Creates a mark that fills the area between two functions (yStart, yEnd) = f(x).

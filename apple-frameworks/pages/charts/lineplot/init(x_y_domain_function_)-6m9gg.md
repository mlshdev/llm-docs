> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/lineplot/init(x:y:domain:function:)-6m9gg](https://developer.apple.com/documentation/charts/lineplot/init(x:y:domain:function:)-6m9gg)

# init(x:y:domain:function:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a mark that graphs a function y = f(x).

## Declaration

```swift
nonisolated init(x: Text, y: Text, domain: ClosedRange<Double>? = nil, function: @escaping @Sendable (Double) -> Double)
```

<a id="discussion"></a>

## Discussion

Parameters:

- x: The x label.
- y: The y label.
- domain: The domain of x. If set to `nil`, the domain of the chart’s x scale will be used.
- function: The function to graph.

> **Note**

> For x values where the function is undefined or is infinity, the function is expected to return `Double.nan` or `Double.infinity` respectively.

## See Also

### Plotting functions

- [init(x:y:domain:function:)](init%28x_y_domain_function_%29-1135f.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a function y = f(x).
- [init(x:y:domain:function:)](init%28x_y_domain_function_%29-17i43.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a function y = f(x).
- [init(x:y:domain:function:)](init%28x_y_domain_function_%29-6gv5v.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a function y = f(x).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/lineplot/init(x:y:t:domain:function:)-5c4bo](https://developer.apple.com/documentation/charts/lineplot/init(x:y:t:domain:function:)-5c4bo)

# init(x:y:t:domain:function:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a mark that graphs a parametric function (x, y) = f(t).

## Declaration

```swift
nonisolated init(x: Text, y: Text, t: Text, domain: ClosedRange<Double>, function: @escaping @Sendable (Double) -> (x: Double, y: Double))
```

<a id="discussion"></a>

## Discussion

Parameters:

- x: The localized string key for the x label.
- y: The localized string key for the y label.
- t: The localized string key for the t label.
- domain: The domain of t. Must be a finite domain.
- function: The function to graph. Returns a tuple of (x, y) for a value of t.

> **Note**

> For t values where the function is undefined or is infinity, the function is expected to return `Double.nan` or `Double.infinity` respectively.

## See Also

### Plotting parametric functions

- [init(x:y:t:domain:function:)](init%28x_y_t_domain_function_%29-7bvyi.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a parametric function (x, y) = f(t).
- [init(x:y:t:domain:function:)](init%28x_y_t_domain_function_%29-610ta.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a parametric function (x, y) = f(t).
- [init(x:y:t:domain:function:)](init%28x_y_t_domain_function_%29-3mqls.md): Conforms when `Content` is `FunctionLinePlotContent`. Creates a mark that graphs a parametric function (x, y) = f(t).

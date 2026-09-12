> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axismark/foregroundstyle(_:)](https://developer.apple.com/documentation/charts/axismark/foregroundstyle(_:))

# foregroundStyle(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the axis content’s foreground elements to use a given style.

## Declaration

```swift
func foregroundStyle<S>(_ style: S) -> some AxisMark where S : ShapeStyle

```

## Parameters

- `style`: The color or pattern to use when filling in the foreground elements.

<a id="return-value"></a>

## Return Value

An axis content that uses the given foreground style.

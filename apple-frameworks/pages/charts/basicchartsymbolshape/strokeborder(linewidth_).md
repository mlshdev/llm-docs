> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/basicchartsymbolshape/strokeborder(linewidth:)

# strokeBorder(lineWidth:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a stroked symbol shape by inner-stroking the basic symbol shape.

## Declaration

```swift
func strokeBorder(lineWidth: CGFloat = 1) -> some ChartSymbolShape

```

## Parameters

- `lineWidth`: The stroke line width.

<a id="return-value"></a>

## Return Value

A symbol shape that strokes the shape of `self`.

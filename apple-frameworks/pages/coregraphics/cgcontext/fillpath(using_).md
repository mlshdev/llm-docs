> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/fillpath(using:)](https://developer.apple.com/documentation/coregraphics/cgcontext/fillpath(using:))

# fillPath(using:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Paints the area within the current path, as determined by the specified fill rule.

## Declaration

```swift
func fillPath(using rule: CGPathFillRule = .winding)
```

## Parameters

- `rule`: The rule for determining which areas to treat as the interior of the path. See [CGPathFillRule](../cgpathfillrule.md).

  This parameter defaults to the [CGPathFillRule.winding](../cgpathfillrule/winding.md) rule if unspecified.

<a id="Discussion"></a>

## Discussion

If the current path contains any non-closed subpaths, this method treats each subpath as if it had been closed with the [closePath()](closepath%28%29.md) method, then applies the specified rule to determine which areas to fill.

After filling the path, this method clears the context’s current path.

## See Also

### Drawing the Current Graphics Path

- [drawPath(using:)](drawpath%28using_%29.md): Draws the current path using the provided drawing mode.
- [CGPathDrawingMode](../cgpathdrawingmode.md): Options for rendering a path.
- [strokePath()](strokepath%28%29.md): Paints a line along the current path.

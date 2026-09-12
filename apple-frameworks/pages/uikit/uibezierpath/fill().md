> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/fill()](https://developer.apple.com/documentation/uikit/uibezierpath/fill())

# fill() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Uses the current drawing properties to paint the region that the path encloses.

## Declaration

```swift
func fill()
```

<a id="Discussion"></a>

## Discussion

This method fills the path using the current fill color and drawing properties. If the path contains any open subpaths, this method implicitly closes them before painting the fill region.

The painted region includes the pixels right up to, but not including, the path line itself. For paths with large line widths, this can result in overlap between the fill region and the stroked path (which is itself centered on the path line).

This method automatically saves the current graphics state prior to drawing and restores that state when it is done, so you do not have to save the graphics state yourself.

## See Also

### Drawing paths

- [fill(with:alpha:)](fill%28with_alpha_%29.md): Uses the specified blend mode and transparency values to paint the region that the path encloses.
- [stroke()](stroke%28%29.md): Draws a line along the path using the current drawing properties.
- [stroke(with:alpha:)](stroke%28with_alpha_%29.md): Draws a line along the path using the specified blend mode and transparency values.

# fill (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Uses the current drawing properties to paint the region that the path encloses.

## Declaration

```objectivec
- (void) fill;
```

<a id="Discussion"></a>

## Discussion

This method fills the path using the current fill color and drawing properties. If the path contains any open subpaths, this method implicitly closes them before painting the fill region.

The painted region includes the pixels right up to, but not including, the path line itself. For paths with large line widths, this can result in overlap between the fill region and the stroked path (which is itself centered on the path line).

This method automatically saves the current graphics state prior to drawing and restores that state when it is done, so you do not have to save the graphics state yourself.

## See Also

### Drawing paths

- [fillWithBlendMode:alpha:](fill%28with_alpha_%29.md): Uses the specified blend mode and transparency values to paint the region that the path encloses.
- [stroke](stroke%28%29.md): Draws a line along the path using the current drawing properties.
- [strokeWithBlendMode:alpha:](stroke%28with_alpha_%29.md): Draws a line along the path using the specified blend mode and transparency values.

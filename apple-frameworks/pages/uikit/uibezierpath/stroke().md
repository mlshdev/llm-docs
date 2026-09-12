> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/stroke()](https://developer.apple.com/documentation/uikit/uibezierpath/stroke())

# stroke() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws a line along the path using the current drawing properties.

## Declaration

```swift
func stroke()
```

<a id="Discussion"></a>

## Discussion

The drawn line is centered on the path with its sides parallel to the path segment. This method applies the current drawing properties to the rendered path.

This method automatically saves the current graphics state prior to drawing and restores that state when it is done, so you do not have to save the graphics state yourself.

## See Also

### Drawing paths

- [fill()](fill%28%29.md): Uses the current drawing properties to paint the region that the path encloses.
- [fill(with:alpha:)](fill%28with_alpha_%29.md): Uses the specified blend mode and transparency values to paint the region that the path encloses.
- [stroke(with:alpha:)](stroke%28with_alpha_%29.md): Draws a line along the path using the specified blend mode and transparency values.

# stroke (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws a line along the path using the current drawing properties.

## Declaration

```objectivec
- (void) stroke;
```

<a id="Discussion"></a>

## Discussion

The drawn line is centered on the path with its sides parallel to the path segment. This method applies the current drawing properties to the rendered path.

This method automatically saves the current graphics state prior to drawing and restores that state when it is done, so you do not have to save the graphics state yourself.

## See Also

### Drawing paths

- [fill](fill%28%29.md): Uses the current drawing properties to paint the region that the path encloses.
- [fillWithBlendMode:alpha:](fill%28with_alpha_%29.md): Uses the specified blend mode and transparency values to paint the region that the path encloses.
- [strokeWithBlendMode:alpha:](stroke%28with_alpha_%29.md): Draws a line along the path using the specified blend mode and transparency values.

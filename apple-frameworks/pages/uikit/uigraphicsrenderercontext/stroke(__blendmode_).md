> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderercontext/stroke(_:blendmode:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderercontext/stroke(_:blendmode:))

# stroke(\_:blendMode:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Paints a rectangular path using the currently selected stroke color and specified blend mode.

## Declaration

```swift
func stroke(_ rect: CGRect, blendMode: CGBlendMode)
```

## Parameters

- `rect`: A rectangle, specified in the Core Graphics coordinate space with values in points.
- `blendMode`: The blend mode applied to the stroke operation.

<a id="Discussion"></a>

## Discussion

Before calling this method, select the stroke color with the [setStroke()](../uicolor/setstroke%28%29.md) method on an instance of [UIColor](../uicolor.md).

The blend mode specifies how the new value for a given pixel is calculated, given the existing pixel value and the currently selected fill color. For more information on the blend modes available, see [CGBlendMode](../../coregraphics/cgblendmode.md).

## See Also

### Drawing content

- [stroke(\_:)](stroke%28__%29.md): Paints a rectangular path using the currently selected stroke color.
- [fill(\_:blendMode:)](fill%28__blendmode_%29.md): Paints a rectangular area with the currently selected fill color using the supplied blend mode.
- [fill(\_:)](fill%28__%29.md): Paints a rectangular area with the currently selected fill color.

# strokeRect:blendMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Paints a rectangular path using the currently selected stroke color and specified blend mode.

## Declaration

```objectivec
- (void) strokeRect:(CGRect) rect blendMode:(CGBlendMode) blendMode;
```

## Parameters

- `rect`: A rectangle, specified in the Core Graphics coordinate space with values in points.
- `blendMode`: The blend mode applied to the stroke operation.

<a id="Discussion"></a>

## Discussion

Before calling this method, select the stroke color with the [setStroke](../uicolor/setstroke%28%29.md) method on an instance of [UIColor](../uicolor.md).

The blend mode specifies how the new value for a given pixel is calculated, given the existing pixel value and the currently selected fill color. For more information on the blend modes available, see [CGBlendMode](../../coregraphics/cgblendmode.md).

## See Also

### Drawing content

- [strokeRect:](stroke%28__%29.md): Paints a rectangular path using the currently selected stroke color.
- [fillRect:blendMode:](fill%28__blendmode_%29.md): Paints a rectangular area with the currently selected fill color using the supplied blend mode.
- [fillRect:](fill%28__%29.md): Paints a rectangular area with the currently selected fill color.

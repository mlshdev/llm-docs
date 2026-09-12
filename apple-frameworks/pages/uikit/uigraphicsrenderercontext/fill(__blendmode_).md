> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderercontext/fill(_:blendmode:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderercontext/fill(_:blendmode:))

# fill(\_:blendMode:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Paints a rectangular area with the currently selected fill color using the supplied blend mode.

## Declaration

```swift
func fill(_ rect: CGRect, blendMode: CGBlendMode)
```

## Parameters

- `rect`: A rectangle, specified in the Core Graphics coordinate space with values in points.
- `blendMode`: The blend mode applied to the fill operation.

<a id="Discussion"></a>

## Discussion

Before calling this method, select the fill color with the [setFill()](../uicolor/setfill%28%29.md) method on an instance of [UIColor](../uicolor.md).

The blend mode specifies how the new value for a given pixel is calculated, given the existing pixel value and the currently selected fill color. For more information on the blend modes available, see [CGBlendMode](../../coregraphics/cgblendmode.md).

For an example of how to use this method, see [Using blend mode](../uigraphicsimagerenderer.md#Using-blend-mode) in [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md).

## See Also

### Drawing content

- [stroke(\_:)](stroke%28__%29.md): Paints a rectangular path using the currently selected stroke color.
- [stroke(\_:blendMode:)](stroke%28__blendmode_%29.md): Paints a rectangular path using the currently selected stroke color and specified blend mode.
- [fill(\_:)](fill%28__%29.md): Paints a rectangular area with the currently selected fill color.

# fillRect:blendMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Paints a rectangular area with the currently selected fill color using the supplied blend mode.

## Declaration

```objectivec
- (void) fillRect:(CGRect) rect blendMode:(CGBlendMode) blendMode;
```

## Parameters

- `rect`: A rectangle, specified in the Core Graphics coordinate space with values in points.
- `blendMode`: The blend mode applied to the fill operation.

<a id="Discussion"></a>

## Discussion

Before calling this method, select the fill color with the [setFill](../uicolor/setfill%28%29.md) method on an instance of [UIColor](../uicolor.md).

The blend mode specifies how the new value for a given pixel is calculated, given the existing pixel value and the currently selected fill color. For more information on the blend modes available, see [CGBlendMode](../../coregraphics/cgblendmode.md).

For an example of how to use this method, see [Using blend mode](../uigraphicsimagerenderer.md#Using-blend-mode) in [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md).

## See Also

### Drawing content

- [strokeRect:](stroke%28__%29.md): Paints a rectangular path using the currently selected stroke color.
- [strokeRect:blendMode:](stroke%28__blendmode_%29.md): Paints a rectangular path using the currently selected stroke color and specified blend mode.
- [fillRect:](fill%28__%29.md): Paints a rectangular area with the currently selected fill color.

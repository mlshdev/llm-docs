> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderercontext/fill(_:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderercontext/fill(_:))

# fill(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Paints a rectangular area with the currently selected fill color.

## Declaration

```swift
func fill(_ rect: CGRect)
```

## Parameters

- `rect`: A rectangle, specified in the Core Graphics coordinate space with values in points.

<a id="Discussion"></a>

## Discussion

Before calling this method, select the fill color with the [setFill()](../uicolor/setfill%28%29.md) method on an instance of [UIColor](../uicolor.md).

For an example of how to use this method, see [Creating an image with an image renderer](../uigraphicsimagerenderer.md#Creating-an-image-with-an-image-renderer) in [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md).

## See Also

### Drawing content

- [stroke(\_:)](stroke%28__%29.md): Paints a rectangular path using the currently selected stroke color.
- [stroke(\_:blendMode:)](stroke%28__blendmode_%29.md): Paints a rectangular path using the currently selected stroke color and specified blend mode.
- [fill(\_:blendMode:)](fill%28__blendmode_%29.md): Paints a rectangular area with the currently selected fill color using the supplied blend mode.

# fillRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Paints a rectangular area with the currently selected fill color.

## Declaration

```objectivec
- (void) fillRect:(CGRect) rect;
```

## Parameters

- `rect`: A rectangle, specified in the Core Graphics coordinate space with values in points.

<a id="Discussion"></a>

## Discussion

Before calling this method, select the fill color with the [setFill](../uicolor/setfill%28%29.md) method on an instance of [UIColor](../uicolor.md).

For an example of how to use this method, see [Creating an image with an image renderer](../uigraphicsimagerenderer.md#Creating-an-image-with-an-image-renderer) in [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md).

## See Also

### Drawing content

- [strokeRect:](stroke%28__%29.md): Paints a rectangular path using the currently selected stroke color.
- [strokeRect:blendMode:](stroke%28__blendmode_%29.md): Paints a rectangular path using the currently selected stroke color and specified blend mode.
- [fillRect:blendMode:](fill%28__blendmode_%29.md): Paints a rectangular area with the currently selected fill color using the supplied blend mode.

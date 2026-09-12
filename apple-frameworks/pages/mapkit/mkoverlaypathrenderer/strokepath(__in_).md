> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/strokepath(_:in:)](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/strokepath(_:in:))

# strokePath(\_:in:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Draws a line along the specified path.

## Declaration

```swift
func strokePath(_ path: CGPath, in context: CGContext)
```

## Parameters

- `path`: The path to draw.
- `context`: The graphics context in which to draw the path.

<a id="Discussion"></a>

## Discussion

You must set the current stroke color before calling this method. Typically you do this by calling the [applyStrokeProperties(to:atZoomScale:)](applystrokeproperties%28to_atzoomscale_%29.md) method prior to drawing. If the [strokeColor](strokecolor.md) property is currently `nil`, this method does nothing.

## See Also

### Drawing the path

- [applyStrokeProperties(to:atZoomScale:)](applystrokeproperties%28to_atzoomscale_%29.md): Applies the renderer’s stroke-related drawing properties to the specified graphics context.
- [applyFillProperties(to:atZoomScale:)](applyfillproperties%28to_atzoomscale_%29.md): Applies the receiver’s fill-related drawing properties to the specified graphics context.
- [fillPath(\_:in:)](fillpath%28__in_%29.md): Fills the area that the specified path encloses.
- [shouldRasterize](shouldrasterize.md): A Boolean value that determines whether the overlay path renderer renders the overlay as a bitmap before compositing.

# strokePath:inContext: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Draws a line along the specified path.

## Declaration

```objectivec
- (void) strokePath:(CGPathRef) path inContext:(CGContextRef) context;
```

## Parameters

- `path`: The path to draw.
- `context`: The graphics context in which to draw the path.

<a id="Discussion"></a>

## Discussion

You must set the current stroke color before calling this method. Typically you do this by calling the [applyStrokePropertiesToContext:atZoomScale:](applystrokeproperties%28to_atzoomscale_%29.md) method prior to drawing. If the [strokeColor](strokecolor.md) property is currently `nil`, this method does nothing.

## See Also

### Drawing the path

- [applyStrokePropertiesToContext:atZoomScale:](applystrokeproperties%28to_atzoomscale_%29.md): Applies the renderer’s stroke-related drawing properties to the specified graphics context.
- [applyFillPropertiesToContext:atZoomScale:](applyfillproperties%28to_atzoomscale_%29.md): Applies the receiver’s fill-related drawing properties to the specified graphics context.
- [fillPath:inContext:](fillpath%28__in_%29.md): Fills the area that the specified path encloses.
- [shouldRasterize](shouldrasterize.md): A Boolean value that determines whether the overlay path renderer renders the overlay as a bitmap before compositing.

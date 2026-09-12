> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/shouldrasterize](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/shouldrasterize)

# shouldRasterize (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that determines whether the overlay path renderer renders the overlay as a bitmap before compositing.

## Declaration

```swift
var shouldRasterize: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

Whenever possible, MapKit vectorizes overlay shapes by default so that they scale along with the map and remain sharp. In some cases, you may want to force the rasterization of an overlay and not vectorize it. Set this variable to `true` to force the overlay path renderer to render the overlay as a bitmap.

## See Also

### Drawing the path

- [applyStrokeProperties(to:atZoomScale:)](applystrokeproperties%28to_atzoomscale_%29.md): Applies the renderer’s stroke-related drawing properties to the specified graphics context.
- [applyFillProperties(to:atZoomScale:)](applyfillproperties%28to_atzoomscale_%29.md): Applies the receiver’s fill-related drawing properties to the specified graphics context.
- [strokePath(\_:in:)](strokepath%28__in_%29.md): Draws a line along the specified path.
- [fillPath(\_:in:)](fillpath%28__in_%29.md): Fills the area that the specified path encloses.

# shouldRasterize (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that determines whether the overlay path renderer renders the overlay as a bitmap before compositing.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL shouldRasterize;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

Whenever possible, MapKit vectorizes overlay shapes by default so that they scale along with the map and remain sharp. In some cases, you may want to force the rasterization of an overlay and not vectorize it. Set this variable to `true` to force the overlay path renderer to render the overlay as a bitmap.

## See Also

### Drawing the path

- [applyStrokePropertiesToContext:atZoomScale:](applystrokeproperties%28to_atzoomscale_%29.md): Applies the renderer’s stroke-related drawing properties to the specified graphics context.
- [applyFillPropertiesToContext:atZoomScale:](applyfillproperties%28to_atzoomscale_%29.md): Applies the receiver’s fill-related drawing properties to the specified graphics context.
- [strokePath:inContext:](strokepath%28__in_%29.md): Draws a line along the specified path.
- [fillPath:inContext:](fillpath%28__in_%29.md): Fills the area that the specified path encloses.

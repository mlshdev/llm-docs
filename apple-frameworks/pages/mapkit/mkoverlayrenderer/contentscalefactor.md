> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/contentscalefactor](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/contentscalefactor)

# contentScaleFactor (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The scale factor for drawing the overlay’s content.

## Declaration

```swift
var contentScaleFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The scale factor determines how the overlay renders map content from the logical coordinate space (in points) to the device coordinate space (in pixels). This value is typically either `1.0` or `2.0`. Higher scale factors indicate that each point represents more than one pixel on the screen. For example, if the scale factor is `2.0` and the drawing rectangle size is 50 x 50 points, the size of the underlying area is 100 x 100 pixels.

When drawing the content for your overlays, you can use this value to determine how best to render your content.

## See Also

### Attributes of the overlay

- [overlay](overlay.md): The overlay object containing the data for drawing.
- [alpha](alpha.md): The amount of transparency to apply to the overlay.
- [blendMode](blendmode.md): The blend mode to apply to the overlay.

# contentScaleFactor (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The scale factor for drawing the overlay’s content.

## Declaration

```objectivec
@property (atomic, readonly) CGFloat contentScaleFactor;
```

<a id="Discussion"></a>

## Discussion

The scale factor determines how the overlay renders map content from the logical coordinate space (in points) to the device coordinate space (in pixels). This value is typically either `1.0` or `2.0`. Higher scale factors indicate that each point represents more than one pixel on the screen. For example, if the scale factor is `2.0` and the drawing rectangle size is 50 x 50 points, the size of the underlying area is 100 x 100 pixels.

When drawing the content for your overlays, you can use this value to determine how best to render your content.

## See Also

### Attributes of the overlay

- [overlay](overlay.md): The overlay object containing the data for drawing.
- [alpha](alpha.md): The amount of transparency to apply to the overlay.
- [blendMode](blendmode.md): The blend mode to apply to the overlay.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/blendmode](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/blendmode)

# blendMode (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The blend mode to apply to the overlay.

## Declaration

```swift
var blendMode: CGBlendMode { get set }
```

<a id="Discussion"></a>

## Discussion

Choose the blend mode from one of the possible [CGBlendMode](../../coregraphics/cgblendmode.md) enumerations.

## See Also

### Attributes of the overlay

- [overlay](overlay.md): The overlay object containing the data for drawing.
- [alpha](alpha.md): The amount of transparency to apply to the overlay.
- [contentScaleFactor](contentscalefactor.md): The scale factor for drawing the overlay’s content.

# blendMode (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+

The blend mode to apply to the overlay.

## Declaration

```objectivec
@property (nonatomic, assign) CGBlendMode blendMode;
```

<a id="Discussion"></a>

## Discussion

Choose the blend mode from one of the possible [CGBlendMode](../../coregraphics/cgblendmode.md) enumerations.

## See Also

### Attributes of the overlay

- [overlay](overlay.md): The overlay object containing the data for drawing.
- [alpha](alpha.md): The amount of transparency to apply to the overlay.
- [contentScaleFactor](contentscalefactor.md): The scale factor for drawing the overlay’s content.

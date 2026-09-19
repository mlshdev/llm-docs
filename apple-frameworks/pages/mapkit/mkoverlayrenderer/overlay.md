> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/overlay

# overlay (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The overlay object containing the data for drawing.

## Declaration

```swift
var overlay: any MKOverlay { get }
```

<a id="Discussion"></a>

## Discussion

The overlay object contains the coordinate at which to draw the overlay and other information that your app provides.

## See Also

### Attributes of the overlay

- [alpha](alpha.md): The amount of transparency to apply to the overlay.
- [contentScaleFactor](contentscalefactor.md): The scale factor for drawing the overlay’s content.
- [blendMode](blendmode.md): The blend mode to apply to the overlay.

# overlay (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The overlay object containing the data for drawing.

## Declaration

```objectivec
@property (nonatomic, readonly) id<MKOverlay> overlay;
```

<a id="Discussion"></a>

## Discussion

The overlay object contains the coordinate at which to draw the overlay and other information that your app provides.

## See Also

### Attributes of the overlay

- [alpha](alpha.md): The amount of transparency to apply to the overlay.
- [contentScaleFactor](contentscalefactor.md): The scale factor for drawing the overlay’s content.
- [blendMode](blendmode.md): The blend mode to apply to the overlay.

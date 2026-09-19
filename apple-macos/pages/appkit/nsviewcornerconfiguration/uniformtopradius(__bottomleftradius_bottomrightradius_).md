> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/uniformtopradius(_:bottomleftradius:bottomrightradius:)

# uniformTopRadius(\_:bottomLeftRadius:bottomRightRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `topRadius` uniformly to the top-left and top-right corners, with optional independent radii for the bottom-left and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```swift
class func uniformTopRadius(_ topRadius: NSViewCornerRadius, bottomLeftRadius: NSViewCornerRadius?, bottomRightRadius: NSViewCornerRadius?) -> NSViewCornerConfiguration
```

## Parameters

- `topRadius`: Radius for top edge.
- `bottomLeftRadius`: Radius for the bottom left corner.
- `bottomRightRadius`: Radius for the bottom right corner.

# configurationWithUniformTopRadius:bottomLeftRadius:bottomRightRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `topRadius` uniformly to the top-left and top-right corners, with optional independent radii for the bottom-left and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithUniformTopRadius:(NSViewCornerRadius *) topRadius bottomLeftRadius:(NSViewCornerRadius *) bottomLeftRadius bottomRightRadius:(NSViewCornerRadius *) bottomRightRadius;
```

## Parameters

- `topRadius`: Radius for top edge.
- `bottomLeftRadius`: Radius for the bottom left corner.
- `bottomRightRadius`: Radius for the bottom right corner.

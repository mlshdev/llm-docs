> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/uniformedges(topradius:bottomradius:)

# uniformEdges(topRadius:bottomRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `topRadius` uniformly to the top-left and top-right corners, and the `bottomRadius` uniformly to the bottom-left and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```swift
class func uniformEdges(topRadius: NSViewCornerRadius, bottomRadius: NSViewCornerRadius) -> NSViewCornerConfiguration
```

## Parameters

- `topRadius`: Radius for top edge.
- `bottomRadius`: Radius for the bottom edge.

# configurationWithUniformTopRadius:bottomRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `topRadius` uniformly to the top-left and top-right corners, and the `bottomRadius` uniformly to the bottom-left and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithUniformTopRadius:(NSViewCornerRadius *) topRadius bottomRadius:(NSViewCornerRadius *) bottomRadius;
```

## Parameters

- `topRadius`: Radius for top edge.
- `bottomRadius`: Radius for the bottom edge.

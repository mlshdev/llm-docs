> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerconfiguration/uniformedges(leftradius:rightradius:)](https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/uniformedges(leftradius:rightradius:))

# uniformEdges(leftRadius:rightRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `leftRadius` uniformly to the top-left and bottom-left corners, and the `rightRadius` uniformly to the top-right and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```swift
class func uniformEdges(leftRadius: NSViewCornerRadius, rightRadius: NSViewCornerRadius) -> NSViewCornerConfiguration
```

## Parameters

- `leftRadius`: Radius for left edge.
- `rightRadius`: Radius for the right edge.

# configurationWithUniformLeftRadius:rightRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `leftRadius` uniformly to the top-left and bottom-left corners, and the `rightRadius` uniformly to the top-right and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithUniformLeftRadius:(NSViewCornerRadius *) leftRadius rightRadius:(NSViewCornerRadius *) rightRadius;
```

## Parameters

- `leftRadius`: Radius for left edge.
- `rightRadius`: Radius for the right edge.

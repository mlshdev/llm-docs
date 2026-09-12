> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerconfiguration/uniformleftradius(_:toprightradius:bottomrightradius:)](https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/uniformleftradius(_:toprightradius:bottomrightradius:))

# uniformLeftRadius(\_:topRightRadius:bottomRightRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `leftRadius` uniformly to the top-left and bottom-left corners, with optional independent radii for the top-right and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```swift
class func uniformLeftRadius(_ leftRadius: NSViewCornerRadius, topRightRadius: NSViewCornerRadius?, bottomRightRadius: NSViewCornerRadius?) -> NSViewCornerConfiguration
```

## Parameters

- `leftRadius`: Radius for left edge.
- `topRightRadius`: Radius for the top right corner.
- `bottomRightRadius`: Radius for the bottom right corner.

# configurationWithUniformLeftRadius:topRightRadius:bottomRightRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `leftRadius` uniformly to the top-left and bottom-left corners, with optional independent radii for the top-right and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithUniformLeftRadius:(NSViewCornerRadius *) leftRadius topRightRadius:(NSViewCornerRadius *) topRightRadius bottomRightRadius:(NSViewCornerRadius *) bottomRightRadius;
```

## Parameters

- `leftRadius`: Radius for left edge.
- `topRightRadius`: Radius for the top right corner.
- `bottomRightRadius`: Radius for the bottom right corner.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerconfiguration/uniformbottomradius(_:topleftradius:toprightradius:)](https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/uniformbottomradius(_:topleftradius:toprightradius:))

# uniformBottomRadius(\_:topLeftRadius:topRightRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `bottomRadius` uniformly to the bottom-left and bottom-right corners, with optional independent radii for the top-left and top-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```swift
class func uniformBottomRadius(_ bottomRadius: NSViewCornerRadius, topLeftRadius: NSViewCornerRadius?, topRightRadius: NSViewCornerRadius?) -> NSViewCornerConfiguration
```

## Parameters

- `bottomRadius`: Radius for bottom edge.
- `topLeftRadius`: Radius for the top left corner.
- `topRightRadius`: Radius for the top right corner.

# configurationWithUniformBottomRadius:topLeftRadius:topRightRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `bottomRadius` uniformly to the bottom-left and bottom-right corners, with optional independent radii for the top-left and top-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithUniformBottomRadius:(NSViewCornerRadius *) bottomRadius topLeftRadius:(NSViewCornerRadius *) topLeftRadius topRightRadius:(NSViewCornerRadius *) topRightRadius;
```

## Parameters

- `bottomRadius`: Radius for bottom edge.
- `topLeftRadius`: Radius for the top left corner.
- `topRightRadius`: Radius for the top right corner.

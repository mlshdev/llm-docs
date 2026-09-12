> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerconfiguration/uniformrightradius(_:topleftradius:bottomleftradius:)](https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/uniformrightradius(_:topleftradius:bottomleftradius:))

# uniformRightRadius(\_:topLeftRadius:bottomLeftRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `rightRadius` uniformly to the top-right and bottom-right corners, with optional independent radii for the top-left and bottom-left corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```swift
class func uniformRightRadius(_ rightRadius: NSViewCornerRadius, topLeftRadius: NSViewCornerRadius?, bottomLeftRadius: NSViewCornerRadius?) -> NSViewCornerConfiguration
```

## Parameters

- `rightRadius`: Radius for right edge.
- `topLeftRadius`: Radius for the top left corner.
- `bottomLeftRadius`: Radius for the bottom left corner.

# configurationWithUniformRightRadius:topLeftRadius:bottomLeftRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the `rightRadius` uniformly to the top-right and bottom-right corners, with optional independent radii for the top-left and bottom-left corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithUniformRightRadius:(NSViewCornerRadius *) rightRadius topLeftRadius:(NSViewCornerRadius *) topLeftRadius bottomLeftRadius:(NSViewCornerRadius *) bottomLeftRadius;
```

## Parameters

- `rightRadius`: Radius for right edge.
- `topLeftRadius`: Radius for the top left corner.
- `bottomLeftRadius`: Radius for the bottom left corner.

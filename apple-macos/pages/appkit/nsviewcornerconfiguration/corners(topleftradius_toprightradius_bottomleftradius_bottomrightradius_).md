> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerconfiguration/corners(topleftradius:toprightradius:bottomleftradius:bottomrightradius:)](https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/corners(topleftradius:toprightradius:bottomleftradius:bottomrightradius:))

# corners(topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration with independent radii for each corner.

## Declaration

```swift
class func corners(topLeftRadius: NSViewCornerRadius?, topRightRadius: NSViewCornerRadius?, bottomLeftRadius: NSViewCornerRadius?, bottomRightRadius: NSViewCornerRadius?) -> NSViewCornerConfiguration
```

## Parameters

- `topLeftRadius`: Radius of top left corner.
- `topRightRadius`: Radius of top right corner.
- `bottomLeftRadius`: Radius of bottom left corner.
- `bottomRightRadius`: Radius of bottom right corner.

# configurationWithTopLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration with independent radii for each corner.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithTopLeftRadius:(NSViewCornerRadius *) topLeftRadius topRightRadius:(NSViewCornerRadius *) topRightRadius bottomLeftRadius:(NSViewCornerRadius *) bottomLeftRadius bottomRightRadius:(NSViewCornerRadius *) bottomRightRadius;
```

## Parameters

- `topLeftRadius`: Radius of top left corner.
- `topRightRadius`: Radius of top right corner.
- `bottomLeftRadius`: Radius of bottom left corner.
- `bottomRightRadius`: Radius of bottom right corner.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerconfiguration/uniformcorners(radius:topleftradius:toprightradius:bottomleftradius:bottomrightradius:)](https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/uniformcorners(radius:topleftradius:toprightradius:bottomleftradius:bottomrightradius:))

# uniformCorners(radius:topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the given uniform radius uniformly to all corners that are otherwise unspecified. Any specified corner is independent of the others.

## Declaration

```swift
class func uniformCorners(radius: NSViewCornerRadius, topLeftRadius: NSViewCornerRadius?, topRightRadius: NSViewCornerRadius?, bottomLeftRadius: NSViewCornerRadius?, bottomRightRadius: NSViewCornerRadius?) -> NSViewCornerConfiguration
```

## Parameters

- `radius`: Uniform radius for all unspecified corners.
- `topLeftRadius`: Radius of top left corner.
- `topRightRadius`: Radius of top right corner.
- `bottomLeftRadius`: Radius of bottom left corner.
- `bottomRightRadius`: Radius of bottom right corner.

# configurationWithUniformRadius:topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the given uniform radius uniformly to all corners that are otherwise unspecified. Any specified corner is independent of the others.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithUniformRadius:(NSViewCornerRadius *) radius topLeftRadius:(NSViewCornerRadius *) topLeftRadius topRightRadius:(NSViewCornerRadius *) topRightRadius bottomLeftRadius:(NSViewCornerRadius *) bottomLeftRadius bottomRightRadius:(NSViewCornerRadius *) bottomRightRadius;
```

## Parameters

- `radius`: Uniform radius for all unspecified corners.
- `topLeftRadius`: Radius of top left corner.
- `topRightRadius`: Radius of top right corner.
- `bottomLeftRadius`: Radius of bottom left corner.
- `bottomRightRadius`: Radius of bottom right corner.

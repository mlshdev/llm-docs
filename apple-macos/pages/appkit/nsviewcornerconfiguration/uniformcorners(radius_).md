> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/uniformcorners(radius:)

# uniformCorners(radius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the given radius uniformly to all corners, using the largest of the resolved corner radii when they differ.

## Declaration

```swift
class func uniformCorners(radius: NSViewCornerRadius) -> NSViewCornerConfiguration
```

# configurationWithUniformRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the given radius uniformly to all corners, using the largest of the resolved corner radii when they differ.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithUniformRadius:(NSViewCornerRadius *) radius;
```

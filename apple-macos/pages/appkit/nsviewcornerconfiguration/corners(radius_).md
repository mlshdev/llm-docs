> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration/corners(radius:)

# corners(radius:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the given radius independently to all corners.

## Declaration

```swift
class func corners(radius: NSViewCornerRadius) -> NSViewCornerConfiguration
```

<a id="discussion"></a>

## Discussion

When used with a container concentric radius, this allows each individual corner to resolve to different radii.

# configurationWithRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

A configuration that applies the given radius independently to all corners.

## Declaration

```objectivec
+ (NSViewCornerConfiguration *) configurationWithRadius:(NSViewCornerRadius *) radius;
```

<a id="discussion"></a>

## Discussion

When used with a container concentric radius, this allows each individual corner to resolve to different radii.

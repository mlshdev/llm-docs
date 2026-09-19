> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicontentunavailableimageproperties/cornerradius

# cornerRadius

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The preferred corner radius for the image.

## Declaration

```objectivec
@property (nonatomic) CGFloat cornerRadius;
```

<a id="Discussion"></a>

## Discussion

The default value is 0. If the image is too small to fit the requested radius, the view adjusts the corner curve and radius to fit.

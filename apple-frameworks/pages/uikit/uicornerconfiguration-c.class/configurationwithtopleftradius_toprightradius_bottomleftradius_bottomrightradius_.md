> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicornerconfiguration-c.class/configurationwithtopleftradius:toprightradius:bottomleftradius:bottomrightradius:

# configurationWithTopLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration with independent radii for each corner.

## Declaration

```objectivec
+ (instancetype) configurationWithTopLeftRadius:(UICornerRadius *) topLeftRadius topRightRadius:(UICornerRadius *) topRightRadius bottomLeftRadius:(UICornerRadius *) bottomLeftRadius bottomRightRadius:(UICornerRadius *) bottomRightRadius;
```

## See Also

### Configuring independent corners

- [configurationWithRadius:](configurationwithradius_.md): A configuration that applies the given radius independently to all corners.

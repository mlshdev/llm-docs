> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerconfiguration-c.class/configurationwithradius:](https://developer.apple.com/documentation/uikit/uicornerconfiguration-c.class/configurationwithradius:)

# configurationWithRadius:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration that applies the given radius independently to all corners.

## Declaration

```objectivec
+ (instancetype) configurationWithRadius:(UICornerRadius *) radius;
```

<a id="discussion"></a>

## Discussion

When used with a container concentric radius, this allows each individual corner to resolve to different radii.

## See Also

### Configuring independent corners

- [configurationWithTopLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:](configurationwithtopleftradius_toprightradius_bottomleftradius_bottomrightradius_.md): A configuration with independent radii for each corner.

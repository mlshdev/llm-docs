> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicornerconfiguration-c.class/capsuleconfigurationwithmaximumradius:

# capsuleConfigurationWithMaximumRadius:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration that rounds the corners into a capsule shape, scaling with the view’s size and clamped to the `maximumRadius`.

## Declaration

```objectivec
+ (instancetype) capsuleConfigurationWithMaximumRadius:(CGFloat) maximumRadius;
```

## See Also

### Configuring corners as a capsule

- [capsuleConfiguration](capsuleconfiguration.md): A configuration that rounds the corners into a capsule shape, scaling with the view’s size.

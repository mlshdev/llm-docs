> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uieditmenuconfiguration/configurationwithidentifier:sourcepoint:

# configurationWithIdentifier:sourcePoint:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new configuration with the source location you specify.

## Declaration

```objectivec
+ (instancetype) configurationWithIdentifier:(id<NSCopying>) identifier sourcePoint:(CGPoint) sourcePoint;
```

## Parameters

- `identifier`: The unique identifier for this configuration object.
- `sourcePoint`: The source location of the interaction.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuconfiguration/configurationwithidentifier:sourcepoint:](https://developer.apple.com/documentation/uikit/uieditmenuconfiguration/configurationwithidentifier:sourcepoint:)

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

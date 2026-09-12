> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailableconfiguration-c.class/emptyconfiguration](https://developer.apple.com/documentation/uikit/uicontentunavailableconfiguration-c.class/emptyconfiguration)

# emptyConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a configuration ready to customize.

## Declaration

```objectivec
+ (instancetype) emptyConfiguration;
```

<a id="return-value"></a>

## Return Value

A new configuration.

<a id="Discussion"></a>

## Discussion

Use this method to create a new configuration to customize. This is useful if your empty content doesn’t fit the uses covered by configurations available with [searchConfiguration](searchconfiguration.md) or [loadingConfiguration](loadingconfiguration.md).

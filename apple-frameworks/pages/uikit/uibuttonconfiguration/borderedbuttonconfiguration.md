> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/borderedbuttonconfiguration](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/borderedbuttonconfiguration)

# borderedButtonConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a configuration for a button that has a bordered style.

## Declaration

```objectivec
+ (instancetype) borderedButtonConfiguration;
```

<a id="return-value"></a>

## Return Value

A new configuration object.

<a id="Discussion"></a>

## Discussion

This style provides an alternative name for the [grayButtonConfiguration](graybuttonconfiguration.md) style.

## See Also

### Creating configurations

- [plainButtonConfiguration](plainbuttonconfiguration.md): Creates a configuration for a button with a transparent background.
- [grayButtonConfiguration](graybuttonconfiguration.md): Creates a configuration for a button with a gray background.
- [tintedButtonConfiguration](tintedbuttonconfiguration.md): Creates a configuration for a button with a tinted background color.
- [filledButtonConfiguration](filledbuttonconfiguration.md): Creates a configuration for a button with a background filled with the button’s tint color.
- [borderlessButtonConfiguration](borderlessbuttonconfiguration.md): Creates a configuration for a button that has a borderless style.
- [borderedTintedButtonConfiguration](borderedtintedbuttonconfiguration.md): Creates a configuration for a button that has a tinted, bordered style.
- [borderedProminentButtonConfiguration](borderedprominentbuttonconfiguration.md): Creates a configuration for a button that has a prominent, bordered style.
- [glassButtonConfiguration](glassbuttonconfiguration.md): Creates a configuration for a button that has a Liquid Glass style.
- [prominentGlassButtonConfiguration](prominentglassbuttonconfiguration.md): Creates a configuration for a button that has a prominent Liquid Glass style.
- [clearGlassButtonConfiguration](clearglassbuttonconfiguration.md): Creates a configuration for a button that has a clear Liquid Glass style.
- [prominentClearGlassButtonConfiguration](prominentclearglassbuttonconfiguration.md): Creates a configuration for a button that has a prominent, clear Liquid Glass style.
- [updatedConfigurationForButton:](updatedconfigurationforbutton_.md): Returns a copy of the configuration, updated for the given button.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/updatedconfigurationforbutton:](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/updatedconfigurationforbutton:)

# updatedConfigurationForButton:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a copy of the configuration, updated for the given button.

## Declaration

```objectivec
- (instancetype) updatedConfigurationForButton:(UIButton *) button;
```

## Parameters

- `button`: A button to use as a basis for the configuration.

<a id="return-value"></a>

## Return Value

An updated configuration. This method preserves custom values set on the configuration, and updates default values based on the button state.

## See Also

### Creating configurations

- [plainButtonConfiguration](plainbuttonconfiguration.md): Creates a configuration for a button with a transparent background.
- [grayButtonConfiguration](graybuttonconfiguration.md): Creates a configuration for a button with a gray background.
- [tintedButtonConfiguration](tintedbuttonconfiguration.md): Creates a configuration for a button with a tinted background color.
- [filledButtonConfiguration](filledbuttonconfiguration.md): Creates a configuration for a button with a background filled with the button’s tint color.
- [borderlessButtonConfiguration](borderlessbuttonconfiguration.md): Creates a configuration for a button that has a borderless style.
- [borderedButtonConfiguration](borderedbuttonconfiguration.md): Creates a configuration for a button that has a bordered style.
- [borderedTintedButtonConfiguration](borderedtintedbuttonconfiguration.md): Creates a configuration for a button that has a tinted, bordered style.
- [borderedProminentButtonConfiguration](borderedprominentbuttonconfiguration.md): Creates a configuration for a button that has a prominent, bordered style.
- [glassButtonConfiguration](glassbuttonconfiguration.md): Creates a configuration for a button that has a Liquid Glass style.
- [prominentGlassButtonConfiguration](prominentglassbuttonconfiguration.md): Creates a configuration for a button that has a prominent Liquid Glass style.
- [clearGlassButtonConfiguration](clearglassbuttonconfiguration.md): Creates a configuration for a button that has a clear Liquid Glass style.
- [prominentClearGlassButtonConfiguration](prominentclearglassbuttonconfiguration.md): Creates a configuration for a button that has a prominent, clear Liquid Glass style.

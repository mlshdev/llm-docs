> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparameterflags](https://developer.apple.com/documentation/professional_video_applications/fxparameterflags)

# FxParameterFlags (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** FxPlug 3.1+

These constants specify the characteristics of parameters display.

## Declaration

```swift
typealias FxParameterFlags = UInt32
```

<a id="discussion"></a>

## Discussion

Not all of the flags are meaningfully to all of the parameter types. The only flags, for example, that apply to group parameters are [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md), [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md), [kFxParameterFlag_HIDDEN](kfxparameterflag_hidden.md), and [kFxParameterFlag_DISABLED](kfxparameterflag_disabled.md).

You are unable to give a group parameter a custom user interface.

## Topics

### Constants

- [kFxParameterFlag_DEFAULT](kfxparameterflag_default.md): Convenience constant. No flags set.
- [kFxParameterFlag_NOT_ANIMATABLE](kfxparameterflag_not_animatable.md): This parameter’s value is constant across time and cannot be animated.
- [kFxParameterFlag_HIDDEN](kfxparameterflag_hidden.md): This parameter displays no UI to the user, but its value is saved/loaded.
- [kFxParameterFlag_DISABLED](kfxparameterflag_disabled.md): This parameter is dimmed and disabled.
- [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md): This group parameter’s subgroup is closed and its sub-parameters are not visible in the Inspector.
- [kFxParameterFlag_DONT_SAVE](kfxparameterflag_dont_save.md): This parameter’s values are not saved or loaded.
- [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md): This parameter is not visible in the dashboard controls.
- [kFxParameterFlag_CUSTOM_UI](kfxparameterflag_custom_ui.md): This parameter uses a custom user interface that replaces the standard parameter UI.
- [kFxParameterFlag_IGNORE_MINMAX](kfxparameterflag_ignore_minmax.md): This parameter’s range is unbounded.

## See Also

### Constants

- [FxHistogramChannel](fxhistogramchannel.md): Constants used to identify which channel a histogram operation should apply to.

# FxParameterFlags (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

These constants specify the characteristics of parameters display.

## Declaration

```objectivec
typedef UInt32 FxParameterFlags;
```

<a id="discussion"></a>

## Discussion

Not all of the flags are meaningfully to all of the parameter types. The only flags, for example, that apply to group parameters are [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md), [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md), [kFxParameterFlag_HIDDEN](kfxparameterflag_hidden.md), and [kFxParameterFlag_DISABLED](kfxparameterflag_disabled.md).

You are unable to give a group parameter a custom user interface.

## Topics

### Constants

- [kFxParameterFlag_DEFAULT](kfxparameterflag_default.md): Convenience constant. No flags set.
- [kFxParameterFlag_NOT_ANIMATABLE](kfxparameterflag_not_animatable.md): This parameter’s value is constant across time and cannot be animated.
- [kFxParameterFlag_HIDDEN](kfxparameterflag_hidden.md): This parameter displays no UI to the user, but its value is saved/loaded.
- [kFxParameterFlag_DISABLED](kfxparameterflag_disabled.md): This parameter is dimmed and disabled.
- [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md): This group parameter’s subgroup is closed and its sub-parameters are not visible in the Inspector.
- [kFxParameterFlag_DONT_SAVE](kfxparameterflag_dont_save.md): This parameter’s values are not saved or loaded.
- [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md): This parameter is not visible in the dashboard controls.
- [kFxParameterFlag_CUSTOM_UI](kfxparameterflag_custom_ui.md): This parameter uses a custom user interface that replaces the standard parameter UI.
- [kFxParameterFlag_IGNORE_MINMAX](kfxparameterflag_ignore_minmax.md): This parameter’s range is unbounded.

## See Also

### Constants

- [FxHistogramChannel](fxhistogramchannel.md): Constants used to identify which channel a histogram operation should apply to.

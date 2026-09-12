> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxparameterflag_use_full_view_width](https://developer.apple.com/documentation/professional_video_applications/kfxparameterflag_use_full_view_width)

# kFxParameterFlag_USE_FULL_VIEW_WIDTH (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 3.1+

This parameter uses the full width of the view.

## Declaration

```swift
var kFxParameterFlag_USE_FULL_VIEW_WIDTH: Int { get }
```

<a id="discussion"></a>

## Discussion

This flag is only valid for parameters that also set [kFxParameterFlag_CUSTOM_UI](kfxparameterflag_custom_ui.md). Of course, not all of the flags apply meaningfully to all of the parameter types. The only flags, for example, that apply to Group parameters are [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md), [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md), `HIDDEN`, and `DISABLED`. You can’t give a group parameter a custom UI.

## See Also

### Constants

- [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md): This group parameter’s subgroup is closed and its sub-parameters are not visible in the Inspector.
- [kFxParameterFlag_CURVE_EDITOR_HIDDEN](kfxparameterflag_curve_editor_hidden.md)
- [kFxParameterFlag_CUSTOM_UI](kfxparameterflag_custom_ui.md): This parameter uses a custom user interface that replaces the standard parameter UI.
- [kFxParameterFlag_DEFAULT](kfxparameterflag_default.md): Convenience constant. No flags set.
- [kFxParameterFlag_DISABLED](kfxparameterflag_disabled.md): This parameter is dimmed and disabled.
- [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md): This parameter is not visible in the dashboard controls.
- [kFxParameterFlag_DONT_SAVE](kfxparameterflag_dont_save.md): This parameter’s values are not saved or loaded.
- [kFxParameterFlag_HIDDEN](kfxparameterflag_hidden.md): This parameter displays no UI to the user, but its value is saved/loaded.
- [kFxParameterFlag_IGNORE_MINMAX](kfxparameterflag_ignore_minmax.md): This parameter’s range is unbounded.
- [kFxParameterFlag_NOT_ANIMATABLE](kfxparameterflag_not_animatable.md): This parameter’s value is constant across time and cannot be animated.
- [kFxParameterFlag_DONT_REMAP_COLORS](kfxparameterflag_dont_remap_colors.md): Indicates that the host must not remap colors to sRGB.

# kFxParameterFlag_USE_FULL_VIEW_WIDTH (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration Case

This parameter uses the full width of the view.

## Declaration

```objectivec
kFxParameterFlag_USE_FULL_VIEW_WIDTH
```

<a id="discussion"></a>

## Discussion

This flag is only valid for parameters that also set [kFxParameterFlag_CUSTOM_UI](kfxparameterflag_custom_ui.md). Of course, not all of the flags apply meaningfully to all of the parameter types. The only flags, for example, that apply to Group parameters are [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md), [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md), `HIDDEN`, and `DISABLED`. You can’t give a group parameter a custom UI.

## See Also

### Constants

- [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md): This group parameter’s subgroup is closed and its sub-parameters are not visible in the Inspector.
- [kFxParameterFlag_CURVE_EDITOR_HIDDEN](kfxparameterflag_curve_editor_hidden.md)
- [kFxParameterFlag_CUSTOM_UI](kfxparameterflag_custom_ui.md): This parameter uses a custom user interface that replaces the standard parameter UI.
- [kFxParameterFlag_DEFAULT](kfxparameterflag_default.md): Convenience constant. No flags set.
- [kFxParameterFlag_DISABLED](kfxparameterflag_disabled.md): This parameter is dimmed and disabled.
- [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md): This parameter is not visible in the dashboard controls.
- [kFxParameterFlag_DONT_SAVE](kfxparameterflag_dont_save.md): This parameter’s values are not saved or loaded.
- [kFxParameterFlag_HIDDEN](kfxparameterflag_hidden.md): This parameter displays no UI to the user, but its value is saved/loaded.
- [kFxParameterFlag_IGNORE_MINMAX](kfxparameterflag_ignore_minmax.md): This parameter’s range is unbounded.
- [kFxParameterFlag_NOT_ANIMATABLE](kfxparameterflag_not_animatable.md): This parameter’s value is constant across time and cannot be animated.
- [kFxParameterFlag_DONT_REMAP_COLORS](kfxparameterflag_dont_remap_colors.md): Indicates that the host must not remap colors to sRGB.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxparameterflag_custom_ui](https://developer.apple.com/documentation/professional_video_applications/kfxparameterflag_custom_ui)

# kFxParameterFlag_CUSTOM_UI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 3.1+

This parameter uses a custom user interface that replaces the standard parameter UI.

## Declaration

```swift
var kFxParameterFlag_CUSTOM_UI: Int { get }
```

<a id="discussion"></a>

## Discussion

The plug-in must provide a custom view for this parameter. See `FXCustomParameterActionAPI` and `FxCustomParameterViewHost`.

## See Also

### Constants

- [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md): This group parameter’s subgroup is closed and its sub-parameters are not visible in the Inspector.
- [kFxParameterFlag_CURVE_EDITOR_HIDDEN](kfxparameterflag_curve_editor_hidden.md)
- [kFxParameterFlag_DEFAULT](kfxparameterflag_default.md): Convenience constant. No flags set.
- [kFxParameterFlag_DISABLED](kfxparameterflag_disabled.md): This parameter is dimmed and disabled.
- [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md): This parameter is not visible in the dashboard controls.
- [kFxParameterFlag_DONT_SAVE](kfxparameterflag_dont_save.md): This parameter’s values are not saved or loaded.
- [kFxParameterFlag_HIDDEN](kfxparameterflag_hidden.md): This parameter displays no UI to the user, but its value is saved/loaded.
- [kFxParameterFlag_IGNORE_MINMAX](kfxparameterflag_ignore_minmax.md): This parameter’s range is unbounded.
- [kFxParameterFlag_NOT_ANIMATABLE](kfxparameterflag_not_animatable.md): This parameter’s value is constant across time and cannot be animated.
- [kFxParameterFlag_DONT_REMAP_COLORS](kfxparameterflag_dont_remap_colors.md): Indicates that the host must not remap colors to sRGB.
- [kFxParameterFlag_USE_FULL_VIEW_WIDTH](kfxparameterflag_use_full_view_width.md): This parameter uses the full width of the view.

# kFxParameterFlag_CUSTOM_UI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration Case

This parameter uses a custom user interface that replaces the standard parameter UI.

## Declaration

```objectivec
kFxParameterFlag_CUSTOM_UI
```

<a id="discussion"></a>

## Discussion

The plug-in must provide a custom view for this parameter. See `FXCustomParameterActionAPI` and `FxCustomParameterViewHost`.

## See Also

### Constants

- [kFxParameterFlag_COLLAPSED](kfxparameterflag_collapsed.md): This group parameter’s subgroup is closed and its sub-parameters are not visible in the Inspector.
- [kFxParameterFlag_CURVE_EDITOR_HIDDEN](kfxparameterflag_curve_editor_hidden.md)
- [kFxParameterFlag_DEFAULT](kfxparameterflag_default.md): Convenience constant. No flags set.
- [kFxParameterFlag_DISABLED](kfxparameterflag_disabled.md): This parameter is dimmed and disabled.
- [kFxParameterFlag_DONT_DISPLAY_IN_DASHBOARD](kfxparameterflag_dont_display_in_dashboard.md): This parameter is not visible in the dashboard controls.
- [kFxParameterFlag_DONT_SAVE](kfxparameterflag_dont_save.md): This parameter’s values are not saved or loaded.
- [kFxParameterFlag_HIDDEN](kfxparameterflag_hidden.md): This parameter displays no UI to the user, but its value is saved/loaded.
- [kFxParameterFlag_IGNORE_MINMAX](kfxparameterflag_ignore_minmax.md): This parameter’s range is unbounded.
- [kFxParameterFlag_NOT_ANIMATABLE](kfxparameterflag_not_animatable.md): This parameter’s value is constant across time and cannot be animated.
- [kFxParameterFlag_DONT_REMAP_COLORS](kfxparameterflag_dont_remap_colors.md): Indicates that the host must not remap colors to sRGB.
- [kFxParameterFlag_USE_FULL_VIEW_WIDTH](kfxparameterflag_use_full_view_width.md): This parameter uses the full width of the view.

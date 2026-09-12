> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kfxparameterflag_dont_remap_colors](https://developer.apple.com/documentation/professional_video_applications/kfxparameterflag_dont_remap_colors)

# kFxParameterFlag_DONT_REMAP_COLORS (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** FxPlug 3.1+

Indicates that the host must not remap colors to sRGB.

## Declaration

```swift
var kFxParameterFlag_DONT_REMAP_COLORS: Int { get }
```

## Mentioned In

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

This flag indicates that this parameter is a color channel that doesn’t logically represent a color, and therefore the host doesn’t color manage the values. The parameter API retrieves the component values as-is without converting them to the working color space.

> **Note**

>  The host ignores this flag for all other channel types.

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
- [kFxParameterFlag_USE_FULL_VIEW_WIDTH](kfxparameterflag_use_full_view_width.md): This parameter uses the full width of the view.

# kFxParameterFlag_DONT_REMAP_COLORS (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration Case

Indicates that the host must not remap colors to sRGB.

## Declaration

```objectivec
kFxParameterFlag_DONT_REMAP_COLORS
```

## Mentioned In

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

This flag indicates that this parameter is a color channel that doesn’t logically represent a color, and therefore the host doesn’t color manage the values. The parameter API retrieves the component values as-is without converting them to the working color space.

> **Note**

>  The host ignores this flag for all other channel types.

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
- [kFxParameterFlag_USE_FULL_VIEW_WIDTH](kfxparameterflag_use_full_view_width.md): This parameter uses the full width of the view.

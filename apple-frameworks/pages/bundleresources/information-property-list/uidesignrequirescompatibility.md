> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uidesignrequirescompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility)

# UIDesignRequiresCompatibility

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean value that indicates whether the system runs the app using a compatibility mode for UI.

## Details

`UIDesignRequiresCompatibility`

<a id="Discussion"></a>

## Discussion

> **Warning**

> Temporarily use this key while reviewing and refining your app’s UI for the design in the latest SDKs.

If `YES`, the system runs the app using a compatibility mode for UI elements. The compatibility mode displays the app as it looks when built against previous versions of the SDKs.

If `NO`, the system uses the UI design of the running OS, with no compatibility mode. Absence of the key, or `NO`, is the default value for apps linking against the latest SDKs.

The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst 27 or later, macOS 27 or later, or tvOS 27 or later.

## See Also

### Styling

- [UIUserInterfaceStyle](uiuserinterfacestyle.md): The user interface style for the app.
- [UIViewEdgeAntialiasing](uiviewedgeantialiasing.md): A Boolean value that indicates whether Core Animation layers use antialiasing when drawing a layer that isn’t aligned to pixel boundaries.
- [UIWhitePointAdaptivityStyle](uiwhitepointadaptivitystyle.md): The app’s white-point adaptivity style, enabled on devices with True Tone displays.
- [UIViewGroupOpacity](uiviewgroupopacity.md): A Boolean value that indicates whether Core Animation sublayers inherit the opacity of their superlayer.
- [UIRequiresFullScreenIgnoredStartingWithVersion](uirequiresfullscreenignoredstartingwithversion.md): A string value that specifies a system version after which the system ignores the requires full screen key.
- [UISupportsAssistiveAccess](uisupportsassistiveaccess.md): A Boolean value that indicates if an iOS or iPadOS app supports Assistive Access.
- [UISupportsFullScreenInAssistiveAccess](uisupportsfullscreeninassistiveaccess.md): A Boolean value that indicates if an iOS or iPadOS app appears as full screen in Assistive Access.
- [NSPrefersDisplaySafeAreaCompatibilityMode](nsprefersdisplaysafeareacompatibilitymode.md): A Boolean value that indicates whether the app prefers to run in compatibility mode when necessary.
- [NSAccentColorName](nsaccentcolorname.md): The name of a color in an asset catalog to use for a target’s global accent color.
- [NSWidgetBackgroundColorName](nswidgetbackgroundcolorname.md): The name of a color in an asset catalog to use for a widget’s configuration interface.

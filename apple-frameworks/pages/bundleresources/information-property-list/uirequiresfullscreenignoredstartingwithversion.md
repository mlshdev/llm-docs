> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uirequiresfullscreenignoredstartingwithversion](https://developer.apple.com/documentation/bundleresources/information-property-list/uirequiresfullscreenignoredstartingwithversion)

# UIRequiresFullScreenIgnoredStartingWithVersion

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.2+ · iPadOS 26.2+

A string value that specifies a system version after which the system ignores the requires full screen key.

## Details

`UIRequiresFullScreenIgnoredStartingWithVersion`

<a id="Discussion"></a>

## Discussion

Use this key only if you’ve already updated your app so that it no longer uses [UIRequiresFullScreen](uirequiresfullscreen.md) in later versions of iOS. Add the key, then specify in which version of iOS you want the system to begin ignoring the [UIRequiresFullScreen](uirequiresfullscreen.md) key. The system ignores the key starting in the version you specify and in later versions of iOS.

The system only uses this key when your information property list also contains [UIRequiresFullScreen](uirequiresfullscreen.md) with a value of `true`.

## See Also

### Styling

- [UIDesignRequiresCompatibility](uidesignrequirescompatibility.md): A Boolean value that indicates whether the system runs the app using a compatibility mode for UI.
- [UIUserInterfaceStyle](uiuserinterfacestyle.md): The user interface style for the app.
- [UIViewEdgeAntialiasing](uiviewedgeantialiasing.md): A Boolean value that indicates whether Core Animation layers use antialiasing when drawing a layer that isn’t aligned to pixel boundaries.
- [UIWhitePointAdaptivityStyle](uiwhitepointadaptivitystyle.md): The app’s white-point adaptivity style, enabled on devices with True Tone displays.
- [UIViewGroupOpacity](uiviewgroupopacity.md): A Boolean value that indicates whether Core Animation sublayers inherit the opacity of their superlayer.
- [UISupportsAssistiveAccess](uisupportsassistiveaccess.md): A Boolean value that indicates if an iOS or iPadOS app supports Assistive Access.
- [UISupportsFullScreenInAssistiveAccess](uisupportsfullscreeninassistiveaccess.md): A Boolean value that indicates if an iOS or iPadOS app appears as full screen in Assistive Access.
- [NSPrefersDisplaySafeAreaCompatibilityMode](nsprefersdisplaysafeareacompatibilitymode.md): A Boolean value that indicates whether the app prefers to run in compatibility mode when necessary.
- [NSAccentColorName](nsaccentcolorname.md): The name of a color in an asset catalog to use for a target’s global accent color.
- [NSWidgetBackgroundColorName](nswidgetbackgroundcolorname.md): The name of a color in an asset catalog to use for a widget’s configuration interface.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uisupportsassistiveaccess](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportsassistiveaccess)

# UISupportsAssistiveAccess

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates if an iOS or iPadOS app supports Assistive Access.

## Details

`UISupportsAssistiveAccess`

<a id="Discussion"></a>

## Discussion

Adding this key to your project’s Info pane with a value of `YES` indicates your app supports a streamlined experience designed for Assistive Access. It allows your app’s UI to match the prominent style of Assistive Access controls. It also lists your app as Optimized for Assistive Access in Settings, so that a trusted supporter configuring Assistive Access on someone’s behalf knows that your app is optimized for this feature.

## See Also

### Styling

- [UIDesignRequiresCompatibility](uidesignrequirescompatibility.md): A Boolean value that indicates whether the system runs the app using a compatibility mode for UI.
- [UIUserInterfaceStyle](uiuserinterfacestyle.md): The user interface style for the app.
- [UIViewEdgeAntialiasing](uiviewedgeantialiasing.md): A Boolean value that indicates whether Core Animation layers use antialiasing when drawing a layer that isn’t aligned to pixel boundaries.
- [UIWhitePointAdaptivityStyle](uiwhitepointadaptivitystyle.md): The app’s white-point adaptivity style, enabled on devices with True Tone displays.
- [UIViewGroupOpacity](uiviewgroupopacity.md): A Boolean value that indicates whether Core Animation sublayers inherit the opacity of their superlayer.
- [UIRequiresFullScreenIgnoredStartingWithVersion](uirequiresfullscreenignoredstartingwithversion.md): A string value that specifies a system version after which the system ignores the requires full screen key.
- [UISupportsFullScreenInAssistiveAccess](uisupportsfullscreeninassistiveaccess.md): A Boolean value that indicates if an iOS or iPadOS app appears as full screen in Assistive Access.
- [NSPrefersDisplaySafeAreaCompatibilityMode](nsprefersdisplaysafeareacompatibilitymode.md): A Boolean value that indicates whether the app prefers to run in compatibility mode when necessary.
- [NSAccentColorName](nsaccentcolorname.md): The name of a color in an asset catalog to use for a target’s global accent color.
- [NSWidgetBackgroundColorName](nswidgetbackgroundcolorname.md): The name of a color in an asset catalog to use for a widget’s configuration interface.

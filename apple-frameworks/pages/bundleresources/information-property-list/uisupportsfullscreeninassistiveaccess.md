> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uisupportsfullscreeninassistiveaccess](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportsfullscreeninassistiveaccess)

# UISupportsFullScreenInAssistiveAccess

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A Boolean value that indicates if an iOS or iPadOS app appears as full screen in Assistive Access.

## Details

`UISupportsFullScreenInAssistiveAccess`

<a id="Discussion"></a>

## Discussion

Adding this key to your app’s `Info.plist` file with a value of `YES` allows your app’s UI to expand into all the available space above the Back button in Assistive Access. It also lists your app as Optimized for Assistive Access in Settings, so that a trusted supporter configuring Assistive Access on someone’s behalf knows that your app’s UI is optimized for this feature.

![An image of iPad and iPhone devices that show the Home Screen in Assistive Access with five apps: Music, Calls, Messages, Photos, and Camera. The iPad shows the apps in a grid layout, and the iPhone shows the apps in a list layout.](https://developer.apple.com/images/com.apple.bundleresources/media-4403388@2x.png)

For more information, read [Optimizing your app for Assistive Access](../../accessibility/optimizing-your-app-for-assistive-access.md).

## See Also

### Related Documentation

- [Assistive Access](../../accessibility/assistive-access.md): A mode that tailors the iOS and iPadOS experience for people with cognitive disabilities.
- [Optimizing your app for Assistive Access](../../accessibility/optimizing-your-app-for-assistive-access.md): Adjust your app’s UI to make sure it works well for people who use Assistive Access.

### Styling

- [UIDesignRequiresCompatibility](uidesignrequirescompatibility.md): A Boolean value that indicates whether the system runs the app using a compatibility mode for UI.
- [UIUserInterfaceStyle](uiuserinterfacestyle.md): The user interface style for the app.
- [UIViewEdgeAntialiasing](uiviewedgeantialiasing.md): A Boolean value that indicates whether Core Animation layers use antialiasing when drawing a layer that isn’t aligned to pixel boundaries.
- [UIWhitePointAdaptivityStyle](uiwhitepointadaptivitystyle.md): The app’s white-point adaptivity style, enabled on devices with True Tone displays.
- [UIViewGroupOpacity](uiviewgroupopacity.md): A Boolean value that indicates whether Core Animation sublayers inherit the opacity of their superlayer.
- [UIRequiresFullScreenIgnoredStartingWithVersion](uirequiresfullscreenignoredstartingwithversion.md): A string value that specifies a system version after which the system ignores the requires full screen key.
- [UISupportsAssistiveAccess](uisupportsassistiveaccess.md): A Boolean value that indicates if an iOS or iPadOS app supports Assistive Access.
- [NSPrefersDisplaySafeAreaCompatibilityMode](nsprefersdisplaysafeareacompatibilitymode.md): A Boolean value that indicates whether the app prefers to run in compatibility mode when necessary.
- [NSAccentColorName](nsaccentcolorname.md): The name of a color in an asset catalog to use for a target’s global accent color.
- [NSWidgetBackgroundColorName](nswidgetbackgroundcolorname.md): The name of a color in an asset catalog to use for a widget’s configuration interface.

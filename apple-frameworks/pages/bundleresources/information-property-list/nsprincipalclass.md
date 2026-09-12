> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsprincipalclass](https://developer.apple.com/documentation/bundleresources/information-property-list/nsprincipalclass)

# NSPrincipalClass

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

The name of the bundle’s main executable class.

## Details

`NSPrincipalClass`

<a id="Discussion"></a>

## Discussion

The system uses the class identified by this key to set the [principalClass](../../foundation/bundle/principalclass.md) property of a bundle when it’s loaded.

Xcode sets the default value of this key to [NSApplication](https://developer.apple.com/documentation/appkit/nsapplication) for macOS apps, and to [UIApplication](../../uikit/uiapplication.md) for iOS and tvOS apps. For other types of bundles, you must set this key in [The Info.plist File](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/ProvidingUserAssitAppleHelp/authoring_help/authoring_help_book.html#//apple_ref/doc/uid/TP30000903-CH206-SW22).

## See Also

### Launch

- [CLKComplicationPrincipalClass](clkcomplicationprincipalclass.md): The name of the class that implements the complication data source protocol.
- [CFBundleExecutable](cfbundleexecutable.md): The name of the bundle’s executable file.
- [LSEnvironment](lsenvironment.md): Environment variables to set before launching the app.
- [UIApplicationShortcutItems](uiapplicationshortcutitems.md)

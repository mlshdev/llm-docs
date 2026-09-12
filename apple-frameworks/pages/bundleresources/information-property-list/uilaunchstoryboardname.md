> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchstoryboardname](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchstoryboardname)

# UILaunchStoryboardName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · tvOS 9.0+ · watchOS 2.0+

The filename of the storyboard from which to generate the app’s launch image.

## Details

`UILaunchStoryboardName`

<a id="Discussion"></a>

## Discussion

Specify the name of the storyboard file without the filename extension. For example, if the filename of your storyboard is `LaunchScreen.storyboard`, specify “LaunchScreen” as the value for this key.

If you prefer to configure your app’s launch screen without storyboards, use [UILaunchScreen](uilaunchscreen.md) instead.

## See Also

### Launch interface

- [UILaunchScreen](uilaunchscreen.md): The user interface to show while an app launches.
- [UILaunchScreens](uilaunchscreens.md): The user interfaces to show while an app launches in response to different URL schemes.
- [UILaunchStoryboards](uilaunchstoryboards.md): The launch storyboard to use to generate a launch image when your app opens from a supported scheme.
- [LSUIPresentationMode](lsuipresentationmode.md): The initial user-interface mode for the app.
- [UILaunchToFullScreenByDefaultOnMac](uilaunchtofullscreenbydefaultonmac.md): A Boolean value that indicates whether to launch your iPad app in full-screen mode when running on a Mac.

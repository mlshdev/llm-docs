> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchscreens/uilaunchscreendefinitions](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreens/uilaunchscreendefinitions)

# UILaunchScreenDefinitions

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A collection of launch screen configuration dictionaries.

## Details

`UILaunchScreenDefinitions`

<a id="Discussion"></a>

## Discussion

Each dictionary in the array resembles the one you might define for the [UILaunchScreen](../uilaunchscreen.md) key, with the addition of a [UILaunchScreenIdentifier](uilaunchscreendefinitions/uilaunchscreenidentifier.md) key that provides a unique identifier for the dictionary. You use that identifier when associating to the dictionary with a URL scheme in the [UIURLToLaunchScreenAssociations](uiurltolaunchscreenassociations.md) array, or to indicate it as the default launch screen with the [UIDefaultLaunchScreen](uidefaultlaunchscreen.md) key.

## Topics

### Identity

- [UILaunchScreenIdentifier](uilaunchscreendefinitions/uilaunchscreenidentifier.md): A unique name for the launch screen configuration.

### Main Interface

- [UIColorName](uilaunchscreendefinitions/uicolorname.md): The name of a color to use as the background color on the launch screen.
- [UIImageName](uilaunchscreendefinitions/uiimagename.md): The name of an image to display during app launch.
- [UIImageRespectsSafeAreaInsets](uilaunchscreendefinitions/uiimagerespectssafeareainsets.md): A Boolean that specifies whether the launch image should respect the safe area insets.

### Border Elements

- [UINavigationBar](uilaunchscreendefinitions/uinavigationbar.md): Navigation bar visibility and configuration during launch.
- [UITabBar](uilaunchscreendefinitions/uitabbar.md): Tab bar visibility and configuration during launch.
- [UIToolbar](uilaunchscreendefinitions/uitoolbar.md): Toolbar visibility and configuration during launch.

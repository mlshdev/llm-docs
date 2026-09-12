> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchscreen/uitabbar](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreen/uitabbar)

# UITabBar

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Tab bar visibility and configuration during launch.

## Details

`UITabBar`

<a id="Discussion"></a>

## Discussion

When you provide a dictionary for this key, the system displays a tab bar during launch. You can optionally set the dictionary’s [UIImageName](uitabbar/uiimagename.md) key to define a custom image for the tab bar.

Omit this key if you don’t want to display a tab bar during launch.

## Topics

### Optional Image

- [UIImageName](uitabbar/uiimagename.md): A custom image that replaces the tab bar during launch.

## See Also

### Border Elements

- [UINavigationBar](uinavigationbar.md): Navigation bar visibility and configuration during launch.
- [UIToolbar](uitoolbar.md): Toolbar visibility and configuration during launch.

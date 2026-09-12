> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchscreen/uinavigationbar](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreen/uinavigationbar)

# UINavigationBar

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Navigation bar visibility and configuration during launch.

## Details

`UINavigationBar`

<a id="Discussion"></a>

## Discussion

When you provide a dictionary for this key, the system displays a navigation bar during launch. You can optionally set the dictionary’s [UIImageName](uinavigationbar/uiimagename.md) key to define a custom image for the navigation bar.

Omit this key if you don’t want to display a navigation bar during launch.

## Topics

### Optional Image

- [UIImageName](uinavigationbar/uiimagename.md): A custom image that replaces the navigation bar during launch.

## See Also

### Border Elements

- [UITabBar](uitabbar.md): Tab bar visibility and configuration during launch.
- [UIToolbar](uitoolbar.md): Toolbar visibility and configuration during launch.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreen/uitoolbar

# UIToolbar

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Toolbar visibility and configuration during launch.

## Details

`UIToolbar`

<a id="Discussion"></a>

## Discussion

When you provide a dictionary for this key, the system displays a toolbar during launch. You can optionally set the dictionary’s [UIImageName](uitoolbar/uiimagename.md) key to define a custom image for the toolbar.

Omit this key if you don’t want to display a toolbar during launch.

## Topics

### Optional Image

- [UIImageName](uitoolbar/uiimagename.md): A custom image that replaces the toolbar during launch.

## See Also

### Border Elements

- [UINavigationBar](uinavigationbar.md): Navigation bar visibility and configuration during launch.
- [UITabBar](uitabbar.md): Tab bar visibility and configuration during launch.

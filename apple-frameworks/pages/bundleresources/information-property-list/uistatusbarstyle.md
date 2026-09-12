> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uistatusbarstyle](https://developer.apple.com/documentation/bundleresources/information-property-list/uistatusbarstyle)

# UIStatusBarStyle

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 2.0+

The style of the status bar as the app launches.

## Details

`UIStatusBarStyle`

## Possible Values

- `UIStatusBarStyleDefault`: A style that automatically chooses light or dark content based on the user interface style. This is the default status bar style.
- `UIStatusBarStyleBlackTranslucent`: A transparent black style.
- `UIStatusBarStyleBlackOpaque`: An opaque black style.
- `UIStatusBarStyleLightContent`: A light status bar, intended for use on dark backgrounds.
- `UIStatusBarStyleDarkContent`: A dark status bar, intended for use on light backgrounds.

## See Also

### Status bar

- [UIStatusBarHidden](uistatusbarhidden.md): A Boolean value that indicates whether the system initially hides the status bar when the app launches.
- [UIStatusBarTintParameters](uistatusbartintparameters.md): The status bar tint.
- [UIViewControllerBasedStatusBarAppearance](uiviewcontrollerbasedstatusbarappearance.md): A Boolean value that indicates whether the system bases the appearance of the status bar on the style preferred by the current view controller.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiviewcontrollerbasedstatusbarappearance](https://developer.apple.com/documentation/bundleresources/information-property-list/uiviewcontrollerbasedstatusbarappearance)

# UIViewControllerBasedStatusBarAppearance

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 7.0+ · iPadOS 7.0+

A Boolean value that indicates whether the system bases the appearance of the status bar on the style preferred by the current view controller.

## Details

`UIViewControllerBasedStatusBarAppearance`

<a id="Discussion"></a>

## Discussion

If this key is `YES`, the system uses the current view controller’s preferred status bar style. If this key is `NO`, it uses the status bar style of the [UIApplication](../../uikit/uiapplication.md) object. The default value is `YES`.

## See Also

### Status bar

- [UIStatusBarHidden](uistatusbarhidden.md): A Boolean value that indicates whether the system initially hides the status bar when the app launches.
- [UIStatusBarStyle](uistatusbarstyle.md): The style of the status bar as the app launches.
- [UIStatusBarTintParameters](uistatusbartintparameters.md): The status bar tint.

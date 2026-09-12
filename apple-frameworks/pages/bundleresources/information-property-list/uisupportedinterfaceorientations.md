> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uisupportedinterfaceorientations](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportedinterfaceorientations)

# UISupportedInterfaceOrientations

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 3.2+ · iPadOS 3.2+

The interface orientations supported by your app.

## Details

`UISupportedInterfaceOrientations`

## Possible Values

- `UIInterfaceOrientationPortrait`: The app supports the display in portrait mode, with the device upright and the front camera at the top.
- `UIInterfaceOrientationPortraitUpsideDown`: The app supports the display in portrait mode but is upside down, with the device upright and  the front camera at the bottom. [UIViewController](../../uikit/uiviewcontroller.md) ignores this option on devices without a Home button.
- `UIInterfaceOrientationLandscapeLeft`: The app supports the display in landscape mode, with the device upright and the front camera on the right.
- `UIInterfaceOrientationLandscapeRight`: The app supports the display in landscape mode, with the device upright and the front camera on the left.

<a id="discussion"></a>

## Discussion

> **Tip**

> To set supported orientations for specific platforms and devices, add platform- or device-specific keys to the information property list. For more information, see [Add platform- and device-specific properties](../managing-your-app-s-information-property-list.md#Add-platform-and-device-specific-properties).

## See Also

### Orientation

- [UIInterfaceOrientation](uiinterfaceorientation.md): The initial orientation of the app’s user interface.
- [UIPreferredDefaultInterfaceOrientation](uipreferreddefaultinterfaceorientation.md): A string that indicates the preferred initial interface orientation for iPad and iPhone apps running on visionOS.

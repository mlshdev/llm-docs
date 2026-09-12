> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiinterfaceorientation](https://developer.apple.com/documentation/bundleresources/information-property-list/uiinterfaceorientation)

# UIInterfaceOrientation

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+

The initial orientation of the app’s user interface.

## Details

`UIInterfaceOrientation`

## Possible Values

- `UIInterfaceOrientationPortrait`: The device is in portrait mode, with the device upright and the Home button on the bottom.
- `UIInterfaceOrientationPortraitUpsideDown`: The device is in portrait mode but is upside down, with the device upright and the Home button at the top.
- `UIInterfaceOrientationLandscapeLeft`: The device is in landscape mode, with the device upright and the Home button on the left.
- `UIInterfaceOrientationLandscapeRight`: The device is in landscape mode, with the device upright and the Home button on the right.

<a id="Discussion"></a>

## Discussion

The default value is `UIInterfaceOrientationPortrait`. If you add the [UISupportedInterfaceOrientations](uisupportedinterfaceorientations.md) key to the information property list, the system ignores this key.

For more information, see [UIInterfaceOrientation](../../uikit/uiinterfaceorientation.md).

## See Also

### Orientation

- [UISupportedInterfaceOrientations](uisupportedinterfaceorientations.md): The interface orientations supported by your app.
- [UIPreferredDefaultInterfaceOrientation](uipreferreddefaultinterfaceorientation.md): A string that indicates the preferred initial interface orientation for iPad and iPhone apps running on visionOS.

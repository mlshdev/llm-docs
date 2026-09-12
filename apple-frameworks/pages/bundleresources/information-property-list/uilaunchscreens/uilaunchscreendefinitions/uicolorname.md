> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchscreens/uilaunchscreendefinitions/uicolorname](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreens/uilaunchscreendefinitions/uicolorname)

# UIColorName (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The name of a color to use as the background color on the launch screen.

## Details

`UIColorName`

<a id="Discussion"></a>

## Discussion

Provide a value for this key that’s the name of a color in your asset catalog. You use the same string for the value that you might use when calling the [init(named:)](../../../../uikit/uicolor/init%28named_%29.md) initializer of [UIColor](../../../../uikit/uicolor.md).

If you don’t set a color, the system uses a default of [systemBackground](../../../../uikit/uicolor/systembackground.md), which varies according to whether the user has selected the light appearance or Dark Mode for the device.

## See Also

### Main Interface

- [UIImageName](uiimagename.md): The name of an image to display during app launch.
- [UIImageRespectsSafeAreaInsets](uiimagerespectssafeareainsets.md): A Boolean that specifies whether the launch image should respect the safe area insets.

# UIColorName (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The name of a color to use as the background color on the launch screen.

## Details

`UIColorName`

<a id="Discussion"></a>

## Discussion

Provide a value for this key that’s the name of a color in your asset catalog. You use the same string for the value that you might use when calling the [colorNamed:](../../../../uikit/uicolor/init%28named_%29.md) initializer of [UIColor](../../../../uikit/uicolor.md).

If you don’t set a color, the system uses a default of [systemBackgroundColor](../../../../uikit/uicolor/systembackground.md), which varies according to whether the user has selected the light appearance or Dark Mode for the device.

## See Also

### Main Interface

- [UIImageName](uiimagename.md): The name of an image to display during app launch.
- [UIImageRespectsSafeAreaInsets](uiimagerespectssafeareainsets.md): A Boolean that specifies whether the launch image should respect the safe area insets.

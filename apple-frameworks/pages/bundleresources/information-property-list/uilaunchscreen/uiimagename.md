> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchscreen/uiimagename](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreen/uiimagename)

# UIImageName (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The name of an image to display during app launch.

## Details

`UIImageName`

<a id="Discussion"></a>

## Discussion

Provide a value for this key that’s the name of an image in your asset catalog. You use the same string for the value that you might use when calling the [init(named:)](../../../uikit/uiimage/init%28named_%29.md) initializer of [UIImage](../../../uikit/uiimage.md). Because the image comes from your asset catalog, you can use slicing to provide a small image that works on many different platforms.

If you don’t specify an image, the display shows the background color, as given by the [UIColorName](uicolorname.md) key. The background color may also show through any transparency in your image.

## See Also

### Main Interface

- [UIColorName](uicolorname.md): The name of a color to use as the background color on the launch screen.
- [UIImageRespectsSafeAreaInsets](uiimagerespectssafeareainsets.md): A Boolean that specifies whether the launch image should respect the safe area insets.

# UIImageName (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The name of an image to display during app launch.

## Details

`UIImageName`

<a id="Discussion"></a>

## Discussion

Provide a value for this key that’s the name of an image in your asset catalog. You use the same string for the value that you might use when calling the [imageNamed:](../../../uikit/uiimage/init%28named_%29.md) initializer of [UIImage](../../../uikit/uiimage.md). Because the image comes from your asset catalog, you can use slicing to provide a small image that works on many different platforms.

If you don’t specify an image, the display shows the background color, as given by the [UIColorName](uicolorname.md) key. The background color may also show through any transparency in your image.

## See Also

### Main Interface

- [UIColorName](uicolorname.md): The name of a color to use as the background color on the launch screen.
- [UIImageRespectsSafeAreaInsets](uiimagerespectssafeareainsets.md): A Boolean that specifies whether the launch image should respect the safe area insets.

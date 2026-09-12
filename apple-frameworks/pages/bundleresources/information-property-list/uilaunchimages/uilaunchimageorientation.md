> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchimages/uilaunchimageorientation](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchimages/uilaunchimageorientation)

# UILaunchImageOrientation

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 13.0)

A string containing the orientation of the image

## Details

`UILaunchImageOrientation`

## Possible Values

- `Portrait`: The image has portrait orientation.
- `PortraitUpsideDown`: The image has portrait orientation but is upside down.
- `Landscape`: The image has landscape orientation.
- `LandscapeLeft`: The image is in landscape orientation with the bottom of the device on the left side.
- `LandscapeRight`: The image is in landscape orientation with the bottom of the device on the right side.

<a id="Discussion"></a>

## Discussion

If it is not specified, the default orientation is `Portrait`.

## See Also

### Launch Image Configuration

- [UILaunchImageMinimumOSVersion](uilaunchimageminimumosversion.md): Deprecated. A string representing the minimum iOS version number for which the image is intended.
- [UILaunchImageName](uilaunchimagename.md): Deprecated. A string containing the name of the image file.
- [UILaunchImageSize](uilaunchimagesize.md): Deprecated. A string containing the width and height of the image.

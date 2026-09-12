> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchimages/uilaunchimageminimumosversion](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchimages/uilaunchimageminimumosversion)

# UILaunchImageMinimumOSVersion

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 13.0)

A string representing the minimum iOS version number for which the image is intended.

## Details

`UILaunchImageMinimumOSVersion`

<a id="Discussion"></a>

## Discussion

The version number string is formatted in the form `n.n.n`, where n is a number. For example, images targeting iOS 7 and later should specify a string “7.0”.

## See Also

### Launch Image Configuration

- [UILaunchImageName](uilaunchimagename.md): Deprecated. A string containing the name of the image file.
- [UILaunchImageOrientation](uilaunchimageorientation.md): Deprecated. A string containing the orientation of the image
- [UILaunchImageSize](uilaunchimagesize.md): Deprecated. A string containing the width and height of the image.

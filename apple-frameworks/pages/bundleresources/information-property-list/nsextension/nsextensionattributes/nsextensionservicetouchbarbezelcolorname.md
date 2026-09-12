> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbarbezelcolorname](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbarbezelcolorname)

# NSExtensionServiceTouchBarBezelColorName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

The color to use for the bezel around the extension when it appears as a Quick Action in the Touch Bar.

## Details

`NSExtensionServiceTouchBarBezelColorName`

<a id="Discussion"></a>

## Discussion

This key is used in conjunction with the [NSExtensionServiceAllowsTouchBarItem](nsextensionserviceallowstouchbaritem.md) key.

Set the [NSExtensionServiceTouchBarBezelColorName](nsextensionservicetouchbarbezelcolorname.md) key’s value to the name of a color that exists in your extension’s asset catalog—a color that matches a system color is recommended. If no color is specified, a default color is used.

## See Also

### Related Documentation

- [NSColor](https://developer.apple.com/documentation/appkit/nscolor): An object that stores color data and sometimes opacity (alpha value).
- [Standard colors](https://developer.apple.com/documentation/appkit/standard-colors): Retrieve the standard color objects for common colors like red, blue, green, black, white, and more.
- [Color creation](https://developer.apple.com/documentation/appkit/color-creation): Load colors from asset catalogs, and create colors from raw component values, such as those used by grayscale, RGB, HSB, and CMYK colors.

### Touch Bar

- [NSExtensionServiceAllowsTouchBarItem](nsextensionserviceallowstouchbaritem.md): A Boolean value indicating whether the extension appears as a Quick Action in the Touch Bar.
- [NSExtensionServiceTouchBarIconName](nsextensionservicetouchbariconname.md): The name of an icon for display when the extension appears as a Quick Action in the Touch Bar
- [NSExtensionServiceTouchBarLabel](nsextensionservicetouchbarlabel.md): A name for display when the extension appears as a Quick Action in the Touch Bar.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbarlabel](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbarlabel)

# NSExtensionServiceTouchBarLabel

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

A name for display when the extension appears as a Quick Action in the Touch Bar.

## Details

`NSExtensionServiceTouchBarLabel`

<a id="Discussion"></a>

## Discussion

This key is used in conjunction with the [NSExtensionServiceAllowsTouchBarItem](nsextensionserviceallowstouchbaritem.md) key.

If the [NSExtensionServiceTouchBarLabel](nsextensionservicetouchbarlabel.md) key isn’t provided, the extension’s display name is used.

## See Also

### Touch Bar

- [NSExtensionServiceAllowsTouchBarItem](nsextensionserviceallowstouchbaritem.md): A Boolean value indicating whether the extension appears as a Quick Action in the Touch Bar.
- [NSExtensionServiceTouchBarBezelColorName](nsextensionservicetouchbarbezelcolorname.md): The color to use for the bezel around the extension when it appears as a Quick Action in the Touch Bar.
- [NSExtensionServiceTouchBarIconName](nsextensionservicetouchbariconname.md): The name of an icon for display when the extension appears as a Quick Action in the Touch Bar

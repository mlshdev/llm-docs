> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicefinderpreviewiconname](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicefinderpreviewiconname)

# NSExtensionServiceFinderPreviewIconName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

The name of an icon for display when the extension appears in the Finder Preview pane and Quick Actions menu.

## Details

`NSExtensionServiceFinderPreviewIconName`

<a id="Discussion"></a>

## Discussion

This key is used in conjunction with the [NSExtensionServiceAllowsFinderPreviewItem](nsextensionserviceallowsfinderpreviewitem.md) key.

Set the [NSExtensionServiceFinderPreviewIconName](nsextensionservicefinderpreviewiconname.md) key’s value to a system icon name or the name of an icon in the extension bundle. This icon should be a *template image*: a monochromatic image with transparency, anti-aliasing, and no drop shadow that uses a mask to define its shape. For design guidance, see [Human Interface Guidelines \> macOS \> Custom Icons](https://developer.apple.com/design/human-interface-guidelines/macos/icons-and-images/custom-icons/). If no icon is specified, a default icon is used.

## See Also

### Quick Actions

- [NSExtensionServiceAllowsFinderPreviewItem](nsextensionserviceallowsfinderpreviewitem.md): A Boolean value indicating whether the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceFinderPreviewLabel](nsextensionservicefinderpreviewlabel.md): A name for display when the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceRoleType](nsextensionserviceroletype.md): The type of task an Action extension performs.

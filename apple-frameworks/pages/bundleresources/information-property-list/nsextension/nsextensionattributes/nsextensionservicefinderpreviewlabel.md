> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicefinderpreviewlabel

# NSExtensionServiceFinderPreviewLabel

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

A name for display when the extension appears in the Finder Preview pane and Quick Actions menu.

## Details

`NSExtensionServiceFinderPreviewLabel`

<a id="Discussion"></a>

## Discussion

This key is used in conjunction with the [NSExtensionServiceAllowsFinderPreviewItem](nsextensionserviceallowsfinderpreviewitem.md) key.

If the [NSExtensionServiceFinderPreviewLabel](nsextensionservicefinderpreviewlabel.md) key isn’t provided, the extension’s display name is used.

## See Also

### Quick Actions

- [NSExtensionServiceAllowsFinderPreviewItem](nsextensionserviceallowsfinderpreviewitem.md): A Boolean value indicating whether the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceFinderPreviewIconName](nsextensionservicefinderpreviewiconname.md): The name of an icon for display when the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceRoleType](nsextensionserviceroletype.md): The type of task an Action extension performs.

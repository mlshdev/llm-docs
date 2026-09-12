> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiprerenderedicon](https://developer.apple.com/documentation/bundleresources/information-property-list/uiprerenderedicon)

# UIPrerenderedIcon

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · tvOS 9.0+ · watchOS 2.0+

A Boolean value that indicates whether the app’s icon contains a shine effect.

## Details

`UIPrerenderedIcon`

<a id="Discussion"></a>

## Discussion

If `YES`, the system doesn’t apply a shine effect to the app icon; otherwise, it does. If your app icon already has a shine, set this key to `YES` to prevent the system from applying the same effect again. The default value is `NO`.

## See Also

### Icons

- [CFBundleIcons](cfbundleicons.md): Information about all of the icons used by the app.
- [CFBundleIconFiles](cfbundleiconfiles.md): The names of the bundle’s icon image files.
- [CFBundleIconFile](cfbundleiconfile.md): The file containing the bundle’s icon.
- [CFBundleIconName](cfbundleiconname.md): The name of the asset that represents the app icon.

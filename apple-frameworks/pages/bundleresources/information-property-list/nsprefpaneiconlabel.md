> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsprefpaneiconlabel](https://developer.apple.com/documentation/bundleresources/information-property-list/nsprefpaneiconlabel)

# NSPrefPaneIconLabel

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

The name of a preference pane displayed beneath the preference pane icon in the System Preferences app.

## Details

`NSPrefPaneIconLabel`

<a id="Discussion"></a>

## Discussion

For long names, you can split the name into two lines by including a newline character (`‘\n’`) in the string. If you omit this key, System Preferences uses the [CFBundleName](cfbundlename.md) key for the name.

## See Also

### Preferences

- [NSPrefPaneIconFile](nsprefpaneiconfile.md): The name of an image file used to represent a preference pane in the System Preferences app.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon)

# CFBundlePrimaryIcon

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The app’s primary icon for display on the Home Screen, in the Settings app, and many other places throughout the system.

## Details

`CFBundlePrimaryIcon`

<a id="Discussion"></a>

## Discussion

In your app for iOS, iPadOS, or watchOS, the value is a dictionary that contains the keys and values listed below. In your app for tvOS or visionOS, the value is a string that names an icon in your app’s asset catalog.

## Topics

### Specifying app icon files

- [CFBundleIconFiles](cfbundleprimaryicon/cfbundleiconfiles.md): The names of the icon files in the app’s asset catalog or bundle.
- [UIPrerenderedIcon](cfbundleprimaryicon/uiprerenderedicon.md): A Boolean value indicating whether the app’s icon files already incorporate a shine effect.

### Customizing the App Shortcuts platter

- [NSAppIconActionTintColorName](cfbundleprimaryicon/nsappiconactiontintcolorname.md): The tint color to apply to text and symbols in the App Shortcuts platter.
- [NSAppIconComplementingColorNames](cfbundleprimaryicon/nsappiconcomplementingcolornames.md): The names of the colors to use for the background of the App Shortcuts platter.

### Associating an SF Symbol

- [CFBundleSymbolName](cfbundleprimaryicon/cfbundlesymbolname.md): The name of the symbol to show in the action sheet, and in Finder’s sidebar on macOS.

## See Also

### Property List Keys

- [CFBundleAlternateIcons](cfbundlealternateicons.md): A list of alternate icons for the Home screen and Settings app.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/atsapplicationfontspath](https://developer.apple.com/documentation/bundleresources/information-property-list/atsapplicationfontspath)

# ATSApplicationFontsPath

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

The location of a font file or folder of fonts in the bundle’s Resources folder.

## Details

`ATSApplicationFontsPath`

<a id="Discussion"></a>

## Discussion

If you set this key, the system allows the app in the bundle to use the fonts at the specified path. Set this key to the path relative to the bundle’s `Resources` folder. For example, if the fonts are in `.../Resources/MyFonts`, set this key to `MyFonts/`.

## See Also

### Fonts

- [UIAppFonts](uiappfonts.md): App-specific font files located in the bundle and that the system loads at runtime.

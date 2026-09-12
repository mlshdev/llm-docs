> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/utimportedtypedeclarations/uttypeicons/uttypeiconbadgename](https://developer.apple.com/documentation/bundleresources/information-property-list/utimportedtypedeclarations/uttypeicons/uttypeiconbadgename)

# UTTypeIconBadgeName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · visionOS 1.0+

The name of an iconset in your app’s asset catalog to use as the center badge image of the document icon.

## Details

`UTTypeIconBadgeName`

<a id="Discussion"></a>

## Discussion

This key is optional. If you omit this key, the system automatically uses the app’s icon as the center badge.

If you set this key, the system uses the named iconset instead, positioning it at the center of the document icon canvas, then masks and scales it as needed.

## See Also

### Composited icon resources

- [UTTypeIconBackgroundName](uttypeiconbackgroundname.md): The name of an icon set in your app’s asset catalog to use as the background fill of the document icon.
- [UTTypeIconText](uttypeicontext.md): A short string the system renders at the bottom edge of the document icon.

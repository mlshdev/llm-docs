> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/wkcompanionappbundleidentifier

# WKCompanionAppBundleIdentifier

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** watchOS 1.0+

The bundle ID of the watchOS app’s companion iOS app.

## Details

`WKCompanionAppBundleIdentifier`

<a id="Discussion"></a>

## Discussion

Xcode automatically includes this key in the WatchKit app’s information property list when you create a watchOS project from a template. The value should be the same as the iOS app’s [CFBundleIdentifier](cfbundleidentifier.md).

## See Also

### Identification

- [CFBundleIdentifier](cfbundleidentifier.md): A unique identifier for a bundle.
- [WKAppBundleIdentifier](wkappbundleidentifier.md): The bundle ID of the watchOS app.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cfbundlename](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundlename)

# CFBundleName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A user-visible short name for the bundle.

## Details

`CFBundleName`

## Mentioned In

- [Managing your app’s information property list values](../managing-your-app-s-information-property-list.md)

<a id="Discussion"></a>

## Discussion

This name can contain up to 15 characters. The system may display it to users if [CFBundleDisplayName](cfbundledisplayname.md) isn’t set.

## See Also

### Naming

- [CFBundleDisplayName](cfbundledisplayname.md): The user-visible name for the bundle, used by Siri and visible on the iOS Home screen.
- [CFBundleSpokenName](cfbundlespokenname.md): A replacement for the app name in text-to-speech operations.

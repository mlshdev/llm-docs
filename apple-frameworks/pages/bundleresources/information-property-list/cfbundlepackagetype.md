> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cfbundlepackagetype](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundlepackagetype)

# CFBundlePackageType

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of bundle.

## Details

`CFBundlePackageType`

<a id="Discussion"></a>

## Discussion

This key consists of a four-letter code for the bundle type. For apps, the code is `APPL`, for frameworks, it’s `FMWK`, and for bundles, it’s `BNDL`. The default value is derived from the bundle extension or, if it can’t be derived, the default value is `BNDL`.

## See Also

### Categorization

- [LSApplicationCategoryType](lsapplicationcategorytype.md): The category that best describes your app for the App Store.

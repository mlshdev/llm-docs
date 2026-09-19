> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion

# ENAPIVersion

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.7+ · iPadOS 13.7+

A number that specifies the version of the API to use.

## Details

`ENAPIVersion`

## Possible Values

- `1`: Use version 1 of the API.
- `2`: Use version 2 of the API.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This type is available in iOS 12.5, and in iOS 13.7 and later.

iOS 13.7 introduces a new method to calculate the user’s Exposure Risk Value, described in [ENExposureConfiguration](https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration). Set this value to `2` to use this new version and its calculation method, or set this value to `1` to use the earlier API and its calculation method. If you don’t explicitly set this value, the default is `1`.

## See Also

### Exposure notification

- [ENDeveloperRegion](endeveloperregion.md): A string that specifies the region that the app supports.

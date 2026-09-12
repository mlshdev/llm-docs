> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/bainitialdownloadrestrictions/badownloaddomainallowlist](https://developer.apple.com/documentation/bundleresources/information-property-list/bainitialdownloadrestrictions/badownloaddomainallowlist)

# BADownloadDomainAllowList

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

The permitted list of domains the extension can use when scheduling the initial set of asset downloads.

## Details

`BADownloadDomainAllowList`

<a id="Discussion"></a>

## Discussion

This key is required to use Background Assets.

## See Also

### Initial download restrictions

- [BADownloadAllowance](badownloadallowance.md): The combined, maximum size of the initial, non-essential asset download files.
- [BAEssentialDownloadAllowance](baessentialdownloadallowance.md): The combined, maximum size of the essential asset download files.

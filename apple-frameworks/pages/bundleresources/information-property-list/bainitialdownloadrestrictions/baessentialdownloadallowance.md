> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/bainitialdownloadrestrictions/baessentialdownloadallowance](https://developer.apple.com/documentation/bundleresources/information-property-list/bainitialdownloadrestrictions/baessentialdownloadallowance)

# BAEssentialDownloadAllowance

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.4+ · visionOS 2.4+

The combined, maximum size of the essential asset download files.

## Details

`BAEssentialDownloadAllowance`

<a id="Discussion"></a>

## Discussion

If you compress the essential assets, use the compressed file sizes that the system downloads, not the uncompressed file sizes, when providing this value. This key is required to use Background Assets.

## See Also

### Initial download restrictions

- [BADownloadAllowance](badownloadallowance.md): The combined, maximum size of the initial, non-essential asset download files.
- [BADownloadDomainAllowList](badownloaddomainallowlist.md): The permitted list of domains the extension can use when scheduling the initial set of asset downloads.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/osbundleusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/osbundleusagedescription)

# OSBundleUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

A message that tells people why the app is trying to install a driver extension bundle.

## Details

`OSBundleUsageDescription`

<a id="Discussion"></a>

## Discussion

This key is required for all [DriverKit](../../driverkit.md) extensions. Failure to include this key results in an error at activation time. For system extensions that are not DriverKit extensions, use [NSSystemExtensionUsageDescription](nssystemextensionusagedescription.md) instead.

## See Also

### System Extensions

- [NSSystemExtensionUsageDescription](nssystemextensionusagedescription.md): A message that tells people why the app is trying to install a system extension bundle.

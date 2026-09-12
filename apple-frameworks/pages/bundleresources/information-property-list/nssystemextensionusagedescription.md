> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nssystemextensionusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nssystemextensionusagedescription)

# NSSystemExtensionUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

A message that tells people why the app is trying to install a system extension bundle.

## Details

`NSSystemExtensionUsageDescription`

<a id="Discussion"></a>

## Discussion

This key is required for all system extensions except [DriverKit](../../driverkit.md) extensions. Failure to include this key results in an error at activation time. For DriverKit extensions, use [OSBundleUsageDescription](osbundleusagedescription.md) instead.

## See Also

### System Extensions

- [OSBundleUsageDescription](osbundleusagedescription.md): A message that tells people why the app is trying to install a driver extension bundle.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/osbundlelibraries](https://developer.apple.com/documentation/bundleresources/information-property-list/osbundlelibraries)

# OSBundleLibraries

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

The drivers that the system must load before your driver.

## Details

`OSBundleLibraries`

<a id="Discussion"></a>

## Discussion

Use this key to specify other drivers that your driver depends on. For example, specify any drivers that contain symbols your driver creates or uses at startup. The system loads the drivers in this list before it attempts to load your driver. If the system fails to resolve the dependencies or load the corresponding libraries, the kernel doesn’t load your driver.

Each key in the dictionary is the bundle identifier of another driver, and the value is a string that contains the minimum version of the driver you require. Your driver must be compatible with the specified version of the other driver.

Don’t include this key for codeless kexts.

## See Also

### Kext dependencies

- [OSBundleCompatibleVersion](osbundlecompatibleversion.md): The backward limit of compatibility for the current driver.

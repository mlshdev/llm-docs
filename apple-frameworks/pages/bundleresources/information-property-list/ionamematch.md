> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/ionamematch](https://developer.apple.com/documentation/bundleresources/information-property-list/ionamematch)

# IONameMatch

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

One or more strings that contain the names of possible provider objects in the system registry.

## Details

`IONameMatch`

<a id="Discussion"></a>

## Discussion

The value of this key is a string or an array of strings. The system begins the matching process with a provider object, and looks for additional drivers or nubs that support that provider object. When this key is present, the system compares its values to the provider object’s name. (It also compares the strings to the provider’s `compatible` and `device_type` properties.) If it doesn’t find any matches, the system doesn’t match the driver to the provider object.

The default name of a provider object is its class name, but providers may register a custom name. For more information about how to set or get information for registered services, see [IORegistryEntry](https://developer.apple.com/documentation/kernel/ioregistryentry).

## See Also

### Advanced Match Criteria

- [IOPropertyMatch](iopropertymatch.md): The device-specific keys the system must match in order to use your driver.
- [IOResourceMatch](ioresourcematch.md): One or more system-specific or device-specific resources that your driver requires.
- [IOParentMatch](ioparentmatch.md)
- [IOPathMatch](iopathmatch.md)
- [IOMatchCategory](iomatchcategory.md)

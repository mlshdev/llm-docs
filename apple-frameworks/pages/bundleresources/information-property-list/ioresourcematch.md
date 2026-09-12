> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/ioresourcematch](https://developer.apple.com/documentation/bundleresources/information-property-list/ioresourcematch)

# IOResourceMatch

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

One or more system-specific or device-specific resources that your driver requires.

## Details

`IOResourceMatch`

<a id="Discussion"></a>

## Discussion

The value of this key is a string or an array of strings. Each string contains the name of a resource that must be published in the global resource list before the system loads the driver. For example, specify `IOBSD` to prevent the system from loading your driver until after the BSD kernel is available.

To access the list of global resources, call the [getResourceService](https://developer.apple.com/documentation/kernel/ioservice/1532617-getresourceservice) method of [IOService](https://developer.apple.com/documentation/kernel/ioservice-1g). To publish custom resources from your driver, call the [publishResource](https://developer.apple.com/documentation/kernel/ioservice/1532848-publishresource) method.

## See Also

### Advanced Match Criteria

- [IOPropertyMatch](iopropertymatch.md): The device-specific keys the system must match in order to use your driver.
- [IONameMatch](ionamematch.md): One or more strings that contain the names of possible provider objects in the system registry.
- [IOParentMatch](ioparentmatch.md)
- [IOPathMatch](iopathmatch.md)
- [IOMatchCategory](iomatchcategory.md)

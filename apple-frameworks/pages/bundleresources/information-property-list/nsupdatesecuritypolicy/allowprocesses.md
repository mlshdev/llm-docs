> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsupdatesecuritypolicy/allowprocesses](https://developer.apple.com/documentation/bundleresources/information-property-list/nsupdatesecuritypolicy/allowprocesses)

# AllowProcesses

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 13.0+

A dictionary that maps Team IDs to an array of signing (bundle) IDs that the system uses to determine whether a process can update an app’s bundle.

## Details

`AllowProcesses`

## See Also

### Related Documentation

- [NSUpdateSecurityPolicy](../nsupdatesecuritypolicy.md): A dictionary that identifies which apps or installer packages the operating system allows to write to the app’s bundle.

### Security policies

- [AllowPackages](allowpackages.md): An array of Team IDs that the system uses to determine whether an installer package, signed by one of the specified Team IDs, can update an app’s bundle.

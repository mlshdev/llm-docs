> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlocalidentifiernotfound](https://developer.apple.com/documentation/photos/phlocalidentifiernotfound)

# PHLocalIdentifierNotFound (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** macOS 10.13+ (deprecated in 12.0)

A constant value that indicates that the system can’t resolve a local object from a global identifier.

> Use [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping) instead.

## Declaration

```swift
let PHLocalIdentifierNotFound: String
```

## See Also

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappings(forLocalIdentifiers:)](phphotolibrary/cloudidentifiermappings%28forlocalidentifiers_%29.md): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappings(for:)](phphotolibrary/localidentifiermappings%28for_%29.md): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [cloudIdentifiers(forLocalIdentifiers:)](phphotolibrary/cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [localIdentifiers(for:)](phphotolibrary/localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.

# PHLocalIdentifierNotFound (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** macOS 10.13+ (deprecated in 12.0)

A constant value that indicates that the system can’t resolve a local object from a global identifier.

> Use [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping) instead.

## Declaration

```objectivec
extern NSString * const PHLocalIdentifierNotFound;
```

## See Also

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [PHCloudIdentifierMapping](https://developer.apple.com/documentation/photos/phcloudidentifiermapping): An object that contains the cloud identifier result from looking up a local identifier, or an error indicating why the lookup failed.
- [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping): An object that contains the local identifier result from looking up a cloud identifier, or an error indicating why the lookup failed.
- [cloudIdentifiersForLocalIdentifiers:](phphotolibrary/cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [localIdentifiersForCloudIdentifiers:](phphotolibrary/localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.

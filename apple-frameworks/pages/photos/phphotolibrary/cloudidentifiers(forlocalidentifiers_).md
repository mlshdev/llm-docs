> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/cloudidentifiers(forlocalidentifiers:)](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiers(forlocalidentifiers:))

# cloudIdentifiers(forLocalIdentifiers:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.13+ (deprecated in 12.0)

Retrieves the equivalent iCloud identifiers for the list of local identifiers.

> Use [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:) instead.

## Declaration

```swift
func cloudIdentifiers(forLocalIdentifiers localIdentifiers: [String]) -> [PHCloudIdentifier]
```

## Parameters

- `localIdentifiers`: The local identifiers for which to retrieve iCloud identifier equivalents.

<a id="return-value"></a>

## Return Value

The array of corresponding iCloud identifiers.

<a id="Discussion"></a>

## Discussion

Retrieving iCloud identifiers can be an expensive operation, so you should perform this lookup sparingly. Instead, work with local identifiers and retrieve their iCloud identifier equivalents only once: either after loading from or before saving to persistent storage.

## See Also

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappings(forLocalIdentifiers:)](cloudidentifiermappings%28forlocalidentifiers_%29.md): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappings(for:)](localidentifiermappings%28for_%29.md): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](../phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [localIdentifiers(for:)](localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.
- [PHLocalIdentifierNotFound](../phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.

# cloudIdentifiersForLocalIdentifiers: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.13+ (deprecated in 12.0)

Retrieves the equivalent iCloud identifiers for the list of local identifiers.

> Use [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:) instead.

## Declaration

```objectivec
- (NSArray<PHCloudIdentifier *> *) cloudIdentifiersForLocalIdentifiers:(NSArray<NSString *> *) localIdentifiers;
```

## Parameters

- `localIdentifiers`: The local identifiers for which to retrieve iCloud identifier equivalents.

<a id="return-value"></a>

## Return Value

The array of corresponding iCloud identifiers.

<a id="Discussion"></a>

## Discussion

Retrieving iCloud identifiers can be an expensive operation, so you should perform this lookup sparingly. Instead, work with local identifiers and retrieve their iCloud identifier equivalents only once: either after loading from or before saving to persistent storage.

## See Also

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](../phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [PHCloudIdentifierMapping](https://developer.apple.com/documentation/photos/phcloudidentifiermapping): An object that contains the cloud identifier result from looking up a local identifier, or an error indicating why the lookup failed.
- [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping): An object that contains the local identifier result from looking up a cloud identifier, or an error indicating why the lookup failed.
- [localIdentifiersForCloudIdentifiers:](localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.
- [PHLocalIdentifierNotFound](../phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.

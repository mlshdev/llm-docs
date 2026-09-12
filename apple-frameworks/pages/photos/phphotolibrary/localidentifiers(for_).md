> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/localidentifiers(for:)](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiers(for:))

# localIdentifiers(for:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.13+ (deprecated in 12.0)

Retrieves the equivalent local identifiers for the list of iCloud identifiers.

> Use [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:) instead.

## Declaration

```swift
func localIdentifiers(for cloudIdentifiers: [PHCloudIdentifier]) -> [String]
```

## Parameters

- `cloudIdentifiers`: The iCloud identifiers for which to retrieve local identifier equivalents.

<a id="return-value"></a>

## Return Value

The array of corresponding iCloud identifiers.

## See Also

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappings(forLocalIdentifiers:)](cloudidentifiermappings%28forlocalidentifiers_%29.md): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappings(for:)](localidentifiermappings%28for_%29.md): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](../phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [cloudIdentifiers(forLocalIdentifiers:)](cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [PHLocalIdentifierNotFound](../phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.

# localIdentifiersForCloudIdentifiers: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.13+ (deprecated in 12.0)

Retrieves the equivalent local identifiers for the list of iCloud identifiers.

> Use [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:) instead.

## Declaration

```objectivec
- (NSArray<NSString *> *) localIdentifiersForCloudIdentifiers:(NSArray<PHCloudIdentifier *> *) cloudIdentifiers;
```

## Parameters

- `cloudIdentifiers`: The iCloud identifiers for which to retrieve local identifier equivalents.

<a id="return-value"></a>

## Return Value

The array of corresponding iCloud identifiers.

## See Also

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](../phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [PHCloudIdentifierMapping](https://developer.apple.com/documentation/photos/phcloudidentifiermapping): An object that contains the cloud identifier result from looking up a local identifier, or an error indicating why the lookup failed.
- [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping): An object that contains the local identifier result from looking up a cloud identifier, or an error indicating why the lookup failed.
- [cloudIdentifiersForLocalIdentifiers:](cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [PHLocalIdentifierNotFound](../phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.

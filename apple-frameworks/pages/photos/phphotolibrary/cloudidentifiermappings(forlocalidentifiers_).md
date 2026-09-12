> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/cloudidentifiermappings(forlocalidentifiers:)](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappings(forlocalidentifiers:))

# cloudIdentifierMappings(forLocalIdentifiers:)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS

Retrieves the cloud identifier mappings for the list of local identifiers.

## Declaration

```swift
func cloudIdentifierMappings(forLocalIdentifiers localIdentifiers: [String]) -> [String : Result<PHCloudIdentifier, any Error>]
```

## Parameters

- `localIdentifiers`: A list of local identifiers for which to retrieve cloud identifiers mappings.

<a id="return-value"></a>

## Return Value

A dictionary that contains a map of local identifiers to their corresponding cloud mappings.

<a id="Discussion"></a>

## Discussion

Retrieving cloud identifiers can be an expensive operation, so perform this lookup sparingly. Instead, work with local identifiers and perform mapping work at load and save points. Then store and share the cloud identifiers to make them available on other devices.

If the attempt to look up a cloud identifier fails, the error parameter indicates the reason.

## See Also

### Converting Between Local and iCloud Identifiers

- [localIdentifierMappings(for:)](localidentifiermappings%28for_%29.md): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](../phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [cloudIdentifiers(forLocalIdentifiers:)](cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [localIdentifiers(for:)](localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.
- [PHLocalIdentifierNotFound](../phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.

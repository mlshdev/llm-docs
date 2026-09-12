> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/init(identifier:displayname:pathrelativetodocumentstorage:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/init(identifier:displayname:pathrelativetodocumentstorage:))

# init(identifier:displayName:pathRelativeToDocumentStorage:) (Swift)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Returns a newly instantiated domain.

## Declaration

```swift
init(identifier: NSFileProviderDomainIdentifier, displayName: String, pathRelativeToDocumentStorage: String)
```

## Parameters

- `identifier`: A string that identifies the domain. The file provider extension can select any string to uniquely identify the domain, as long as it doesn’t contain the colon (:) or slash (/) symbols.
- `displayName`: The name for the domain that the system shows to the user.
- `pathRelativeToDocumentStorage`: A path relative to the file provider extension’s [documentStorageURL](../nsfileproviderextension/documentstorageurl.md) that the system uses to store the domain’s content.

## See Also

### Creating domains

- [init(identifier:displayName:)](init%28identifier_displayname_%29.md): Creates a new file provider domain with the specified identifier and display name.
- [NSFileProviderDomainIdentifier](../nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.
- [init(displayName:userInfo:volumeURL:)](init%28displayname_userinfo_volumeurl_%29.md): Creates a new file provider domain with the specified URL and display name.

# initWithIdentifier:displayName:pathRelativeToDocumentStorage: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Returns a newly instantiated domain.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSFileProviderDomainIdentifier) identifier displayName:(NSString *) displayName pathRelativeToDocumentStorage:(NSString *) pathRelativeToDocumentStorage;
```

## Parameters

- `identifier`: A string that identifies the domain. The file provider extension can select any string to uniquely identify the domain, as long as it doesn’t contain the colon (:) or slash (/) symbols.
- `displayName`: The name for the domain that the system shows to the user.
- `pathRelativeToDocumentStorage`: A path relative to the file provider extension’s [documentStorageURL](../nsfileproviderextension/documentstorageurl.md) that the system uses to store the domain’s content.

## See Also

### Creating domains

- [initWithIdentifier:displayName:](init%28identifier_displayname_%29.md): Creates a new file provider domain with the specified identifier and display name.
- [NSFileProviderDomainIdentifier](../nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.
- [initWithDisplayName:userInfo:volumeURL:](init%28displayname_userinfo_volumeurl_%29.md): Creates a new file provider domain with the specified URL and display name.

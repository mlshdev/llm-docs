> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/init(identifier:displayname:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/init(identifier:displayname:))

# init(identifier:displayName:) (Swift)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new file provider domain with the specified identifier and display name.

## Declaration

```swift
init(identifier: NSFileProviderDomainIdentifier, displayName: String)
```

## Parameters

- `identifier`: A string that identifies the domain. The file provider extension can select any string to uniquely identify the domain, as long as it doesn’t contain the colon (:) or slash (/) symbols.
- `displayName`: The name for the domain that the system shows to the user.

## See Also

### Creating domains

- [init(identifier:displayName:pathRelativeToDocumentStorage:)](init%28identifier_displayname_pathrelativetodocumentstorage_%29.md): Returns a newly instantiated domain.
- [NSFileProviderDomainIdentifier](../nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.
- [init(displayName:userInfo:volumeURL:)](init%28displayname_userinfo_volumeurl_%29.md): Creates a new file provider domain with the specified URL and display name.

# initWithIdentifier:displayName: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new file provider domain with the specified identifier and display name.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSFileProviderDomainIdentifier) identifier displayName:(NSString *) displayName;
```

## Parameters

- `identifier`: A string that identifies the domain. The file provider extension can select any string to uniquely identify the domain, as long as it doesn’t contain the colon (:) or slash (/) symbols.
- `displayName`: The name for the domain that the system shows to the user.

## See Also

### Creating domains

- [initWithIdentifier:displayName:pathRelativeToDocumentStorage:](init%28identifier_displayname_pathrelativetodocumentstorage_%29.md): Returns a newly instantiated domain.
- [NSFileProviderDomainIdentifier](../nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.
- [initWithDisplayName:userInfo:volumeURL:](init%28displayname_userinfo_volumeurl_%29.md): Creates a new file provider domain with the specified URL and display name.

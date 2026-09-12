> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/init(displayname:userinfo:volumeurl:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/init(displayname:userinfo:volumeurl:))

# init(displayName:userInfo:volumeURL:) (Swift)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a new file provider domain with the specified URL and display name.

## Declaration

```swift
init(displayName: String, userInfo: [AnyHashable : Any] = [:], volumeURL: URL?)
```

## See Also

### Creating domains

- [init(identifier:displayName:pathRelativeToDocumentStorage:)](init%28identifier_displayname_pathrelativetodocumentstorage_%29.md): Returns a newly instantiated domain.
- [init(identifier:displayName:)](init%28identifier_displayname_%29.md): Creates a new file provider domain with the specified identifier and display name.
- [NSFileProviderDomainIdentifier](../nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.

# initWithDisplayName:userInfo:volumeURL: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Creates a new file provider domain with the specified URL and display name.

## Declaration

```objectivec
- (instancetype) initWithDisplayName:(NSString *) displayName userInfo:(NSDictionary *) userInfo volumeURL:(NSURL *) volumeURL;
```

## See Also

### Creating domains

- [initWithIdentifier:displayName:pathRelativeToDocumentStorage:](init%28identifier_displayname_pathrelativetodocumentstorage_%29.md): Returns a newly instantiated domain.
- [initWithIdentifier:displayName:](init%28identifier_displayname_%29.md): Creates a new file provider domain with the specified identifier and display name.
- [NSFileProviderDomainIdentifier](../nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.

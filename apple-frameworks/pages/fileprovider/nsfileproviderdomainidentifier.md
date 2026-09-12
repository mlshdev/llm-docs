> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomainidentifier](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomainidentifier)

# NSFileProviderDomainIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A unique identifier for a file provider’s domain.

## Declaration

```swift
struct NSFileProviderDomainIdentifier
```

## Topics

### Initializers

- [init(\_:)](nsfileproviderdomainidentifier/init%28__%29.md): Returns a newly initialized domain identifier.
- [init(rawValue:)](nsfileproviderdomainidentifier/init%28rawvalue_%29.md): Returns a newly initialized domain identifier.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating domains

- [init(identifier:displayName:pathRelativeToDocumentStorage:)](nsfileproviderdomain/init%28identifier_displayname_pathrelativetodocumentstorage_%29.md): Returns a newly instantiated domain.
- [init(identifier:displayName:)](nsfileproviderdomain/init%28identifier_displayname_%29.md): Creates a new file provider domain with the specified identifier and display name.
- [init(displayName:userInfo:volumeURL:)](nsfileproviderdomain/init%28displayname_userinfo_volumeurl_%29.md): Creates a new file provider domain with the specified URL and display name.

# NSFileProviderDomainIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A unique identifier for a file provider’s domain.

## Declaration

```objectivec
typedef NSString * NSFileProviderDomainIdentifier;
```

## See Also

### Creating domains

- [initWithIdentifier:displayName:pathRelativeToDocumentStorage:](nsfileproviderdomain/init%28identifier_displayname_pathrelativetodocumentstorage_%29.md): Returns a newly instantiated domain.
- [initWithIdentifier:displayName:](nsfileproviderdomain/init%28identifier_displayname_%29.md): Creates a new file provider domain with the specified identifier and display name.
- [initWithDisplayName:userInfo:volumeURL:](nsfileproviderdomain/init%28displayname_userinfo_volumeurl_%29.md): Creates a new file provider domain with the specified URL and display name.

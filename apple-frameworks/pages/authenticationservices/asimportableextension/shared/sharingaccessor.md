> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportableextension/shared/sharingaccessor](https://developer.apple.com/documentation/authenticationservices/asimportableextension/shared/sharingaccessor)

# ASImportableExtension.Shared.SharingAccessor

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
struct SharingAccessor
```

## Topics

### Initializers

- [init(type:accountID:name:permissions:)](sharingaccessor/init%28type_accountid_name_permissions_%29.md)

### Instance Properties

- [accountID](sharingaccessor/accountid.md): The ID of the account that has been granted access to this shared entity.
- [name](sharingaccessor/name.md): The name of the accessor’s account.
- [permissions](sharingaccessor/permissions.md): The permissions given to this accessor.
- [type](sharingaccessor/type.md): The type of accessor.

### Enumerations

- [ASImportableExtension.Shared.SharingAccessor.AccessorType](sharingaccessor/accessortype.md)
- [ASImportableExtension.Shared.SharingAccessor.Permission](sharingaccessor/permission.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

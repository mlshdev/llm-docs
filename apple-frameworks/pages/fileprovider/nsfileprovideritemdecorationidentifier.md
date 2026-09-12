> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemdecorationidentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemdecorationidentifier)

# NSFileProviderItemDecorationIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

A decoration identifier defined in the File Provider extension’s information property list.

## Declaration

```swift
struct NSFileProviderItemDecorationIdentifier
```

## Topics

### Creating Decoration Identifiers

- [init(\_:)](nsfileprovideritemdecorationidentifier/init%28__%29.md): Returns a new decoration identifier matching the provided String.
- [init(rawValue:)](nsfileprovideritemdecorationidentifier/init%28rawvalue_%29.md): Returns a new decoration identifier matching the provided value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Items and metadata

- [NSFileProviderItemFields](nsfileprovideritemfields.md): Fields that specify which of the item’s properties have changed.
- [NSFileProviderItemVersion](nsfileprovideritemversion.md): The version of the item’s content and its metadata.
- [NSFileProviderRequest](nsfileproviderrequest.md): An object that provides information about the application requesting data from the File Provider extension.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.

# NSFileProviderItemDecorationIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

A decoration identifier defined in the File Provider extension’s information property list.

## Declaration

```objectivec
typedef NSString * NSFileProviderItemDecorationIdentifier;
```

## See Also

### Items and metadata

- [NSFileProviderItemFields](nsfileprovideritemfields.md): Fields that specify which of the item’s properties have changed.
- [NSFileProviderItemVersion](nsfileprovideritemversion.md): The version of the item’s content and its metadata.
- [NSFileProviderRequest](nsfileproviderrequest.md): An object that provides information about the application requesting data from the File Provider extension.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.

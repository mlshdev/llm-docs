> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertypeandcreator](https://developer.apple.com/documentation/fileprovider/nsfileprovidertypeandcreator)

# NSFileProviderTypeAndCreator (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A structure that contains the file type and file creator codes for an item.

## Declaration

```swift
struct NSFileProviderTypeAndCreator
```

## Topics

### Creating Type and Creator Structures

- [init()](nsfileprovidertypeandcreator/init%28%29.md): Returns a new type and creator structure with both codes set to `0`.
- [init(type:creator:)](nsfileprovidertypeandcreator/init%28type_creator_%29.md): Creates a structure that contains the provided type and creator codes.

### Accessing Type and Creator Codes

- [creator](nsfileprovidertypeandcreator/creator.md): The item’s creator code.
- [type](nsfileprovidertypeandcreator/type.md): The item’s type code.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Provided items

- [NSFileProviderItem](nsfileprovideritem-swift.typealias.md): An item the File Provider extension manages.
- [NSFileProviderItemProtocol](nsfileprovideritemprotocol.md): A protocol that defines the properties of an item managed by the File Provider extension.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [NSFileProviderItemCapabilities](nsfileprovideritemcapabilities.md): An item’s capabilities, which define the actions that the user can perform in the document browser.

# NSFileProviderTypeAndCreator (Objective-C)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

A structure that contains the file type and file creator codes for an item.

## Declaration

```objectivec
typedef struct NSFileProviderTypeAndCreator { ... } NSFileProviderTypeAndCreator;
```

## Topics

### Accessing Type and Creator Codes

- [creator](nsfileprovidertypeandcreator/creator.md): The item’s creator code.
- [type](nsfileprovidertypeandcreator/type.md): The item’s type code.

## See Also

### Provided items

- [NSFileProviderItem](nsfileprovideritem-swift.typealias.md): An item the File Provider extension manages.
- [NSFileProviderItem](nsfileprovideritemprotocol.md): A protocol that defines the properties of an item managed by the File Provider extension.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [NSFileProviderItemCapabilities](nsfileprovideritemcapabilities.md): An item’s capabilities, which define the actions that the user can perform in the document browser.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdeleteitemoptions](https://developer.apple.com/documentation/fileprovider/nsfileproviderdeleteitemoptions)

# NSFileProviderDeleteItemOptions (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Options for deleting items.

## Declaration

```swift
struct NSFileProviderDeleteItemOptions
```

## Topics

### Choosing Delete Options

- [recursive](nsfileproviderdeleteitemoptions/recursive.md): A value indicating that the delete operation removes the item and all of its children.

### Creating Delete Options

- [init(rawValue:)](nsfileproviderdeleteitemoptions/init%28rawvalue_%29.md): Creates an option instance from the raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing Items

- [createItem(basedOn:fields:contents:options:request:completionHandler:)](nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](nsfileprovidercreateitemoptions.md): Options for creating items.
- [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md): Tells the file provider that an item’s content or metadata changed.
- [NSFileProviderModifyItemOptions](nsfileprovidermodifyitemoptions.md): Options for modifying items.
- [deleteItem(identifier:baseVersion:options:request:completionHandler:)](nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md): Tells the file provider to delete an item forever.

# NSFileProviderDeleteItemOptions (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Options for deleting items.

## Declaration

```objectivec
enum NSFileProviderDeleteItemOptions : NSUInteger;
```

## Topics

### Choosing Delete Options

- [NSFileProviderDeleteItemRecursive](nsfileproviderdeleteitemoptions/recursive.md): A value indicating that the delete operation removes the item and all of its children.

## See Also

### Managing Items

- [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](nsfileprovidercreateitemoptions.md): Options for creating items.
- [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md): Tells the file provider that an item’s content or metadata changed.
- [NSFileProviderModifyItemOptions](nsfileprovidermodifyitemoptions.md): Options for modifying items.
- [deleteItemWithIdentifier:baseVersion:options:request:completionHandler:](nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md): Tells the file provider to delete an item forever.

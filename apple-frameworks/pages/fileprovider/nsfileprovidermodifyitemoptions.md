> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermodifyitemoptions](https://developer.apple.com/documentation/fileprovider/nsfileprovidermodifyitemoptions)

# NSFileProviderModifyItemOptions (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Options for modifying items.

## Declaration

```swift
struct NSFileProviderModifyItemOptions
```

## Topics

### Choosing Modify Item Options

- [mayAlreadyExist](nsfileprovidermodifyitemoptions/mayalreadyexist.md): An option that indicates the changes may already exist in your remote storage.
- [failOnConflict](nsfileprovidermodifyitemoptions/failonconflict.md): An option to fail an upload in the event of a version conflict.

### Creating Modify Options

- [init(rawValue:)](nsfileprovidermodifyitemoptions/init%28rawvalue_%29.md): Creates an option instance from the raw value.

### Type Properties

- [isImmediateUploadRequestByPresentingApplication](nsfileprovidermodifyitemoptions/isimmediateuploadrequestbypresentingapplication.md): An option to require the upload to complete before calling the completion handler.

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
- [deleteItem(identifier:baseVersion:options:request:completionHandler:)](nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md): Tells the file provider to delete an item forever.
- [NSFileProviderDeleteItemOptions](nsfileproviderdeleteitemoptions.md): Options for deleting items.

# NSFileProviderModifyItemOptions (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Options for modifying items.

## Declaration

```objectivec
enum NSFileProviderModifyItemOptions : NSUInteger;
```

## Topics

### Choosing Modify Item Options

- [NSFileProviderModifyItemMayAlreadyExist](nsfileprovidermodifyitemoptions/mayalreadyexist.md): An option that indicates the changes may already exist in your remote storage.
- [NSFileProviderModifyItemFailOnConflict](nsfileprovidermodifyitemoptions/failonconflict.md): An option to fail an upload in the event of a version conflict.

### Enumeration Cases

- [NSFileProviderModifyItemIsImmediateUploadRequestByPresentingApplication](nsfileprovidermodifyitemoptions/isimmediateuploadrequestbypresentingapplication.md): An option to require the upload to complete before calling the completion handler.

## See Also

### Managing Items

- [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md): Tells the file provider to create or import an item based on a template.
- [NSFileProviderCreateItemOptions](nsfileprovidercreateitemoptions.md): Options for creating items.
- [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md): Tells the file provider that an item’s content or metadata changed.
- [deleteItemWithIdentifier:baseVersion:options:request:completionHandler:](nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md): Tells the file provider to delete an item forever.
- [NSFileProviderDeleteItemOptions](nsfileproviderdeleteitemoptions.md): Options for deleting items.

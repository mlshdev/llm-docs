> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationoptionsgroup](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoptionsgroup)

# SWCollaborationOptionsGroup (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents a group of collaboration options that the system displays together.

## Declaration

```swift
class SWCollaborationOptionsGroup
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## Topics

### Creating a collaboration options group

- [init(identifier:options:)](swcollaborationoptionsgroup/init%28identifier_options_%29.md): Creates and initializes a collaboration options group object.

### Accessing options group attributes

- [footer](swcollaborationoptionsgroup/footer.md): A localized string that provides additional information for the group of options.
- [identifier](swcollaborationoptionsgroup/identifier.md): A unique identifier.
- [options](swcollaborationoptionsgroup/options.md): An array of collaboration options the system displays as a group.
- [title](swcollaborationoptionsgroup/title.md): A localized string the system displays as the title of the group section.

### Initializers

- [init(coder:)](swcollaborationoptionsgroup/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SWCollaborationOptionsPickerGroup](swcollaborationoptionspickergroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Manage options in a collaboration

- [SWCollaborationOption](swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsPickerGroup](swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWCollaborationShareOptions](swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [SWLocalCollaborationIdentifier](swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

# SWCollaborationOptionsGroup (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents a group of collaboration options that the system displays together.

## Declaration

```objectivec
@interface SWCollaborationOptionsGroup : NSObject
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## Topics

### Creating a collaboration options group

- [initWithIdentifier:options:](swcollaborationoptionsgroup/init%28identifier_options_%29.md): Creates and initializes a collaboration options group object.
- [optionsGroupWithIdentifier:options:](swcollaborationoptionsgroup/optionsgroupwithidentifier_options_.md): Creates and initializes a collaboration options group object.

### Accessing options group attributes

- [footer](swcollaborationoptionsgroup/footer.md): A localized string that provides additional information for the group of options.
- [identifier](swcollaborationoptionsgroup/identifier.md): A unique identifier.
- [options](swcollaborationoptionsgroup/options.md): An array of collaboration options the system displays as a group.
- [title](swcollaborationoptionsgroup/title.md): A localized string the system displays as the title of the group section.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SWCollaborationOptionsPickerGroup](swcollaborationoptionspickergroup.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Manage options in a collaboration

- [SWCollaborationOption](swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsPickerGroup](swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWCollaborationShareOptions](swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [SWLocalCollaborationIdentifier](swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

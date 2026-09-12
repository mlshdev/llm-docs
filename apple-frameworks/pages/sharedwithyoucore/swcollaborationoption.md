> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationoption](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoption)

# SWCollaborationOption (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that determines how the system shares a document in a collaboration.

## Declaration

```swift
class SWCollaborationOption
```

<a id="overview"></a>

## Overview

The `SWCollaborationOption` represents a user-configurable setting for a collaboration that the system uses to share the document. The system displays these options on the Share Sheet or in Messages.

## Topics

### Creating collaboration options

- [init(title:identifier:)](swcollaborationoption/init%28title_identifier_%29.md): Creates and initializes a collaboration option object with a provided title and identifier.
- [init(title:identifier:subtitle:selected:requiredOptionsIdentifiers:)](swcollaborationoption/init%28title_identifier_subtitle_selected_requiredoptionsidentifiers_%29.md): Creates and initializes a collaboration option object with the provided values.

### Accessing option attributes

- [identifier](swcollaborationoption/identifier.md): A unique identifier.
- [isSelected](swcollaborationoption/isselected.md): A Boolean value that represents the selected state of an option.
- [requiredOptionsIdentifiers](swcollaborationoption/requiredoptionsidentifiers.md): An array of option identifiers that the app must select before the system makes the option interactive.
- [subtitle](swcollaborationoption/subtitle.md): A localized string the system displays to represent the permissions option in the collaboration view.
- [title](swcollaborationoption/title.md): A localized string the system displays as a title to represent the permissions option.

### Initializers

- [init(coder:)](swcollaborationoption/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

- [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationOptionsPickerGroup](swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWCollaborationShareOptions](swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [SWLocalCollaborationIdentifier](swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

# SWCollaborationOption (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that determines how the system shares a document in a collaboration.

## Declaration

```objectivec
@interface SWCollaborationOption : NSObject
```

<a id="overview"></a>

## Overview

The `SWCollaborationOption` represents a user-configurable setting for a collaboration that the system uses to share the document. The system displays these options on the Share Sheet or in Messages.

## Topics

### Creating collaboration options

- [initWithTitle:identifier:](swcollaborationoption/initwithtitle_identifier_.md): Creates and initializes a collaboration option object.
- [optionWithTitle:identifier:](swcollaborationoption/init%28title_identifier_%29.md): Creates and initializes a collaboration option object with a provided title and identifier.

### Accessing option attributes

- [identifier](swcollaborationoption/identifier.md): A unique identifier.
- [selected](swcollaborationoption/isselected.md): A Boolean value that represents the selected state of an option.
- [requiredOptionsIdentifiers](swcollaborationoption/requiredoptionsidentifiers.md): An array of option identifiers that the app must select before the system makes the option interactive.
- [subtitle](swcollaborationoption/subtitle.md): A localized string the system displays to represent the permissions option in the collaboration view.
- [title](swcollaborationoption/title.md): A localized string the system displays as a title to represent the permissions option.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Manage options in a collaboration

- [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationOptionsPickerGroup](swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWCollaborationShareOptions](swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [SWLocalCollaborationIdentifier](swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

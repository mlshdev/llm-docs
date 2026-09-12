> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationoptionspickergroup](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoptionspickergroup)

# SWCollaborationOptionsPickerGroup (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents a group of collaboration options that the system displays together with mutually exclusive options.

## Declaration

```swift
class SWCollaborationOptionsPickerGroup
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

`SWCollaborationOptionsPickerGroup` displays as a picker view. A person can select only one option in the group. To allow a person to select more than one option, use [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md).

## Topics

### Accessing options group attributes

- [selectedOptionIdentifier](swcollaborationoptionspickergroup/selectedoptionidentifier.md): The identifier of the selected option in the group.

## Relationships

### Inherits From

- [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md)

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
- [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationShareOptions](swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [SWLocalCollaborationIdentifier](swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

# SWCollaborationOptionsPickerGroup (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents a group of collaboration options that the system displays together with mutually exclusive options.

## Declaration

```objectivec
@interface SWCollaborationOptionsPickerGroup : SWCollaborationOptionsGroup
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

`SWCollaborationOptionsPickerGroup` displays as a picker view. A person can select only one option in the group. To allow a person to select more than one option, use [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md).

## Topics

### Accessing options group attributes

- [selectedOptionIdentifier](swcollaborationoptionspickergroup/selectedoptionidentifier.md): The identifier of the selected option in the group.

## Relationships

### Inherits From

- [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md)

## See Also

### Manage options in a collaboration

- [SWCollaborationOption](swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationShareOptions](swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [SWLocalCollaborationIdentifier](swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

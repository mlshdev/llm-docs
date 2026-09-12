> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationshareoptions](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationshareoptions)

# SWCollaborationShareOptions (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents the state of the collaboration options for the document.

## Declaration

```swift
class SWCollaborationShareOptions
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## Topics

### Creating share options

- [init(coder:)](swcollaborationshareoptions/init%28coder_%29.md): Creates and initializes a collaboration share options object.
- [init(optionsGroups:)](swcollaborationshareoptions/init%28optionsgroups_%29.md): Creates and initializes a collaboration share options object with the array of groups.
- [init(optionsGroups:summary:)](swcollaborationshareoptions/init%28optionsgroups_summary_%29.md): Creates and initializes a collaboration share options object the array of groups and a summary string.

### Accessing options attributes

- [optionsGroups](swcollaborationshareoptions/optionsgroups.md): An array of options group objects to customize how the system shares the collaboration.
- [summary](swcollaborationshareoptions/summary.md): A localized string to summarize the collaboration options.

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

- [SWCollaborationOption](swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationOptionsPickerGroup](swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWLocalCollaborationIdentifier](swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

# SWCollaborationShareOptions (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents the state of the collaboration options for the document.

## Declaration

```objectivec
@interface SWCollaborationShareOptions : NSObject
```

## Mentioned In

- [Adding custom collaboration to your app](../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## Topics

### Creating share options

- [initWithCoder:](swcollaborationshareoptions/init%28coder_%29.md): Creates and initializes a collaboration share options object.
- [initWithOptionsGroups:](swcollaborationshareoptions/init%28optionsgroups_%29.md): Creates and initializes a collaboration share options object with the array of groups.
- [initWithOptionsGroups:summary:](swcollaborationshareoptions/init%28optionsgroups_summary_%29.md): Creates and initializes a collaboration share options object the array of groups and a summary string.
- [shareOptionsWithOptionsGroups:](swcollaborationshareoptions/shareoptionswithoptionsgroups_.md): Creates and initializes a collaboration share options object with the array of groups.
- [shareOptionsWithOptionsGroups:summary:](swcollaborationshareoptions/shareoptionswithoptionsgroups_summary_.md): Creates and initializes a collaboration share options object the array of groups and a summary string.

### Accessing options attributes

- [optionsGroups](swcollaborationshareoptions/optionsgroups.md): An array of options group objects to customize how the system shares the collaboration.
- [summary](swcollaborationshareoptions/summary.md): A localized string to summarize the collaboration options.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Manage options in a collaboration

- [SWCollaborationOption](swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsGroup](swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationOptionsPickerGroup](swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWLocalCollaborationIdentifier](swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1572731-key_form_and_descriptor_type_obj](https://developer.apple.com/documentation/coreservices/apple_events/1572731-key_form_and_descriptor_type_obj)

# Key Form and Descriptor Type Object Specifier Constants

**Framework:** Core Services

Specify possible values for the `keyAEKeyForm` field of an object specifier, as well as descriptor types used in resolving object specifiers.

<a id="overview"></a>

## Overview

The constants in this enum that begin with “form” specify the key form for an object specifier. The key form indicates how key data should be interpreted. Key form is one of the keyword-specified descriptors described in [Constants for Object Specifiers, Positions, and Logical and Comparison Operations](1572744-constants_for_object_specifiers_.md).

The constants in this enum that begin with “type” specify descriptor types used in resolving object specifiers. An object specifier is a coerced Apple event record of descriptor type `typeObjectSpecifier` whose data consists of the four keyword-specified descriptors described in [Constants for Object Specifiers, Positions, and Logical and Comparison Operations](1572744-constants_for_object_specifiers_.md). One of those four keyword-specified descriptors has the type `keyAEKeyData`. This descriptor can contain data or nested descriptors specified by any of the descriptor type constants defined here (or by types defined by your application).

## Topics

### Constants

- [formAbsolutePosition](../formabsoluteposition.md)
- [formRelativePosition](../formrelativeposition.md)
- [formTest](../formtest.md)
- [formRange](../formrange.md)
- [formPropertyID](../formpropertyid.md): Specifies the property ID for an element’s property.
- [formName](../formname.md): Specifies the Apple event object by name.
- [typeObjectSpecifier](../typeobjectspecifier.md): Specifies a descriptor used with the `keyAEContainer` keyword in a keyword-specified descriptor. The key data for the descriptor is an object specifier.
- [typeObjectBeingExamined](../typeobjectbeingexamined.md)
- [typeCurrentContainer](../typecurrentcontainer.md): Specifies a container for an element that demarcates one boundary in a range. The descriptor has a null data storage pointer. This descriptor type is used only with `formRange`.
- [typeToken](../typetoken.md): Specifies a descriptor whose data storage pointer refers to a structure of type [AEDisposeToken(\_:)](../1446783-aedisposetoken.md).
- [typeRelativeDescriptor](../typerelativedescriptor.md): Specifies a descriptor whose data consists of one of the constants `kAENext` or `kAEPrevious`, which are described in [AEDisposeToken(\_:)](../1446783-aedisposetoken.md). Used with `formRelativePosition`.
- [typeAbsoluteOrdinal](../typeabsoluteordinal.md): Specifies a descriptor whose data consists of one of the constants `kAEFirst`, `kAEMiddle`, `kAELast`, `kAEAny`, or `kAEAll`, which are described in [AEDisposeToken(\_:)](../1446783-aedisposetoken.md). Used with `formAbsolutePosition`.
- [typeIndexDescriptor](../typeindexdescriptor.md): Specifies a descriptor whose data indicates an indexed position within a range of values.
- [typeRangeDescriptor](../typerangedescriptor.md)
- [typeLogicalDescriptor](../typelogicaldescriptor.md): Specifies a logical descriptor. Data is one of the constants described in [AEDisposeToken(\_:)](../1446783-aedisposetoken.md).
- [typeCompDescriptor](../typecompdescriptor.md): Specifies a comparison descriptor. Data is one of the constants described in [AEDisposeToken(\_:)](../1446783-aedisposetoken.md).
- [typeOSLTokenList](../typeosltokenlist.md): Specifies a descriptor whose data consists of a list of tokens. (Token is defined in [AEDisposeToken(\_:)](../1446783-aedisposetoken.md).)
- [formUniqueID](../formuniqueid.md): Specifies a value that uniquely identifies an object within its container or across an application.

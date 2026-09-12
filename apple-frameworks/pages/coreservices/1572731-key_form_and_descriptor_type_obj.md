> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1572731-key_form_and_descriptor_type_obj](https://developer.apple.com/documentation/coreservices/1572731-key_form_and_descriptor_type_obj)

# Key Form and Descriptor Type Object Specifier Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify possible values for the `keyAEKeyForm` field of an object specifier, as well as descriptor types used in resolving object specifiers.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [formAbsolutePosition](1572731-key_form_and_descriptor_type_obj/formabsoluteposition.md)
- [formRelativePosition](1572731-key_form_and_descriptor_type_obj/formrelativeposition.md)
- [formTest](1572731-key_form_and_descriptor_type_obj/formtest.md)
- [formRange](1572731-key_form_and_descriptor_type_obj/formrange.md)
- [formPropertyID](1572731-key_form_and_descriptor_type_obj/formpropertyid.md): Specifies the property ID for an element’s property.
- [formName](1572731-key_form_and_descriptor_type_obj/formname.md): Specifies the Apple event object by name.
- [typeObjectSpecifier](1645753-anonymous/typeobjectspecifier.md): Specifies a descriptor used with the `keyAEContainer` keyword in a keyword-specified descriptor. The key data for the descriptor is an object specifier.
- [typeObjectBeingExamined](1645753-anonymous/typeobjectbeingexamined.md)
- [typeCurrentContainer](1645753-anonymous/typecurrentcontainer.md): Specifies a container for an element that demarcates one boundary in a range. The descriptor has a null data storage pointer. This descriptor type is used only with `formRange`.
- [typeToken](1645753-anonymous/typetoken.md): Specifies a descriptor whose data storage pointer refers to a structure of type [AEDisposeToken](1446783-aedisposetoken.md).
- [typeRelativeDescriptor](1645753-anonymous/typerelativedescriptor.md): Specifies a descriptor whose data consists of one of the constants `kAENext` or `kAEPrevious`, which are described in [AEDisposeToken](1446783-aedisposetoken.md). Used with `formRelativePosition`.
- [typeAbsoluteOrdinal](1645753-anonymous/typeabsoluteordinal.md): Specifies a descriptor whose data consists of one of the constants `kAEFirst`, `kAEMiddle`, `kAELast`, `kAEAny`, or `kAEAll`, which are described in [AEDisposeToken](1446783-aedisposetoken.md). Used with `formAbsolutePosition`.
- [typeIndexDescriptor](1645753-anonymous/typeindexdescriptor.md): Specifies a descriptor whose data indicates an indexed position within a range of values.
- [typeRangeDescriptor](1645753-anonymous/typerangedescriptor.md)
- [typeLogicalDescriptor](1645753-anonymous/typelogicaldescriptor.md): Specifies a logical descriptor. Data is one of the constants described in [AEDisposeToken](1446783-aedisposetoken.md).
- [typeCompDescriptor](1645753-anonymous/typecompdescriptor.md): Specifies a comparison descriptor. Data is one of the constants described in [AEDisposeToken](1446783-aedisposetoken.md).
- [typeOSLTokenList](1645753-anonymous/typeosltokenlist.md): Specifies a descriptor whose data consists of a list of tokens. (Token is defined in [AEDisposeToken](1446783-aedisposetoken.md).)
- [formUniqueID](1572731-key_form_and_descriptor_type_obj/formuniqueid.md): Specifies a value that uniquely identifies an object within its container or across an application.

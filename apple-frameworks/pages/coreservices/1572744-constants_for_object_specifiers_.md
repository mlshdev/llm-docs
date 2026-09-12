> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1572744-constants_for_object_specifiers_](https://developer.apple.com/documentation/coreservices/1572744-constants_for_object_specifiers_)

# Constants for Object Specifiers, Positions, and Logical and Comparison Operations

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify the types of the four keyword-specified descriptors that make up the data in an object specifier, as well as constants for position, logical operations, and comparison operations.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kAEAND](1572744-constants_for_object_specifiers_/kaeand.md): Specifies a logical `AND` operation.
- [kAEOR](1572744-constants_for_object_specifiers_/kaeor.md): Specifies a logical `OR` operation.
- [kAENOT](1572744-constants_for_object_specifiers_/kaenot.md): Specifies a logical `NOT` operation.
- [kAEFirst](1572744-constants_for_object_specifiers_/kaefirst.md): The first element in the specified container.
- [kAELast](1572744-constants_for_object_specifiers_/kaelast.md): Specifies the last element in the container.
- [kAEMiddle](1572744-constants_for_object_specifiers_/kaemiddle.md)
- [kAEAny](1572744-constants_for_object_specifiers_/kaeany.md): Specifies a single element chosen at random from the container.
- [kAEAll](1572744-constants_for_object_specifiers_/kaeall.md): Specifies all the elements in the container.
- [kAENext](1572744-constants_for_object_specifiers_/kaenext.md): Specifies the Apple event object after the container.
- [kAEPrevious](1572744-constants_for_object_specifiers_/kaeprevious.md): Specifies the Apple event object before the container.
- [keyAECompOperator](1572744-constants_for_object_specifiers_/keyaecompoperator.md): Specifies a descriptor of `typeType`, whose data consists of one of the constant values described in [Key Form and Descriptor Type Object Specifier Constants](1572731-key_form_and_descriptor_type_obj.md).
- [keyAELogicalTerms](1572744-constants_for_object_specifiers_/keyaelogicalterms.md): Specifies a descriptor of type `typeAEList` containing one or more comparison or logical descriptors.
- [keyAELogicalOperator](1572744-constants_for_object_specifiers_/keyaelogicaloperator.md): Specifies a descriptor of type `typeEnumerated` whose data is one of the logical operators (such as `kAEAND`) defined in [Key Form and Descriptor Type Object Specifier Constants](1572731-key_form_and_descriptor_type_obj.md).
- [keyAEObject1](1572744-constants_for_object_specifiers_/keyaeobject1.md)
- [keyAEObject2](1572744-constants_for_object_specifiers_/keyaeobject2.md)
- [keyAEDesiredClass](1572744-constants_for_object_specifiers_/keyaedesiredclass.md)
- [keyAEContainer](1572744-constants_for_object_specifiers_/keyaecontainer.md): Specifies the container for the requested object or objects. The data is an object specifier (or in some cases a null descriptor).
- [keyAEKeyForm](1572744-constants_for_object_specifiers_/keyaekeyform.md)
- [keyAEKeyData](1572744-constants_for_object_specifiers_/keyaekeydata.md)

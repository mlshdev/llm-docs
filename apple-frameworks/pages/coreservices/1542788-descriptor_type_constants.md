> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542788-descriptor_type_constants](https://developer.apple.com/documentation/coreservices/1542788-descriptor_type_constants)

# Descriptor Type Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify types for descriptors.

## Declaration

```objectivec
enum : DescType {
    ...
};
```

## Topics

### Constants

- [typeAEList](1542788-descriptor_type_constants/typeaelist.md): List of descriptors.
- [typeAERecord](1542788-descriptor_type_constants/typeaerecord.md): List of keyword-specified descriptors.
- [typeAppleEvent](1542788-descriptor_type_constants/typeappleevent.md): Apple event.
- [typeTrue](1542788-descriptor_type_constants/typetrue.md): `TRUE` Boolean value.
- [typeFalse](1542788-descriptor_type_constants/typefalse.md): `FALSE` Boolean value.
- [typeAlias](1542788-descriptor_type_constants/typealias.md): Alias.
- [typeEnumerated](1542788-descriptor_type_constants/typeenumerated.md): Enumerated data.
- [typeType](1542788-descriptor_type_constants/typetype.md): Four-character code for event class or event ID
- [typeAppParameters](1542788-descriptor_type_constants/typeappparameters.md): Process Manager launch parameters.
- [typeProperty](1542788-descriptor_type_constants/typeproperty.md): Apple event object property.
- [typeFSRef](1542788-descriptor_type_constants/typefsref.md): File system reference. Use in preference to file system specifications (`typeFSS`).
- [typeFileURL](1542788-descriptor_type_constants/typefileurl.md): A file URL. That is, the associated data consists of the bytes of a UTF-8 encoded URL with a scheme of "file". This type is appropriate for describing a file that may not yet exist—see [Technical Note 2022](http://developer.apple.com/technotes/tn/tn2022.html) for more information.
- [typeKeyword](1542788-descriptor_type_constants/typekeyword.md): Apple event keyword.
- [typeSectionH](1542788-descriptor_type_constants/typesectionh.md): Handle to a section record. (Deprecated.)
- [typeWildCard](1542788-descriptor_type_constants/typewildcard.md): Matches any type.
- [typeApplSignature](1542788-descriptor_type_constants/typeapplsignature.md): Application signature.
- [typeProcessSerialNumber](1542788-descriptor_type_constants/typeprocessserialnumber.md): A process serial number. See also [AEAddressDesc](aeaddressdesc.md).
- [typeApplicationURL](1542788-descriptor_type_constants/typeapplicationurl.md): For specifying an application by URL. See Discussion section below for important information.
- [typeNull](1542788-descriptor_type_constants/typenull.md): A null data storage pointer. When resolving an object specifier, an object with a null storage pointer specifies the default container at the top of the container hierarchy.
- [typeBookmarkData](1542788-descriptor_type_constants/typebookmarkdata.md)
- [typeEventRecord](1542788-descriptor_type_constants/typeeventrecord.md)
- [typeFixed](1542788-descriptor_type_constants/typefixed.md)
- [typeQDRectangle](1542788-descriptor_type_constants/typeqdrectangle.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444459-mdschemacopyattributesforcontent](https://developer.apple.com/documentation/coreservices/1444459-mdschemacopyattributesforcontent)

# MDSchemaCopyAttributesForContentType(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns a dictionary containing the metadata attributesfor the specified UTI type.

## Declaration

```swift
func MDSchemaCopyAttributesForContentType(_ contentTypeUTI: CFString!) -> CFDictionary!
```

## Parameters

- `utiType`: The UTI type.

<a id="return_value"></a>

## Return Value

A dictionary containing `kMDAttributeDisplayValues` and `kMDAttributeAllValues` keys.Returns `NULL` if the UTItype is unknown.

<a id="discussion"></a>

## Discussion

This function returns the metadata attributes for the specifiedUTI type only.

## See Also

### MDSchema Miscellaneous Functions

- [MDSchemaCopyAllAttributes()](1445665-mdschemacopyallattributes.md): Returns an array containing all the metadata attributesdefined in the schema.
- [MDSchemaCopyDisplayDescriptionForAttribute(\_:)](1442582-mdschemacopydisplaydescriptionfo.md): Returns the localized description of a metadata attributekey.
- [MDSchemaCopyDisplayNameForAttribute(\_:)](1450203-mdschemacopydisplaynameforattrib.md): Returns the localized display name of a metadata attributekey.
- [MDSchemaCopyMetaAttributesForAttribute(\_:)](1450052-mdschemacopymetaattributesforatt.md): Returns a dictionary describing the values for the specifiedmetadata attribute key.

# MDSchemaCopyAttributesForContentType (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns a dictionary containing the metadata attributesfor the specified UTI type.

## Declaration

```objectivec
CFDictionaryRef MDSchemaCopyAttributesForContentType(CFStringRef contentTypeUTI);
```

## Parameters

- `utiType`: The UTI type.

<a id="return_value"></a>

## Return Value

A dictionary containing `kMDAttributeDisplayValues` and `kMDAttributeAllValues` keys.Returns `NULL` if the UTItype is unknown.

<a id="discussion"></a>

## Discussion

This function returns the metadata attributes for the specifiedUTI type only.

## See Also

### MDSchema Miscellaneous Functions

- [MDSchemaCopyAllAttributes](1445665-mdschemacopyallattributes.md): Returns an array containing all the metadata attributesdefined in the schema.
- [MDSchemaCopyDisplayDescriptionForAttribute](1442582-mdschemacopydisplaydescriptionfo.md): Returns the localized description of a metadata attributekey.
- [MDSchemaCopyDisplayNameForAttribute](1450203-mdschemacopydisplaynameforattrib.md): Returns the localized display name of a metadata attributekey.
- [MDSchemaCopyMetaAttributesForAttribute](1450052-mdschemacopymetaattributesforatt.md): Returns a dictionary describing the values for the specifiedmetadata attribute key.

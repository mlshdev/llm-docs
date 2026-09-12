> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442582-mdschemacopydisplaydescriptionfo](https://developer.apple.com/documentation/coreservices/1442582-mdschemacopydisplaydescriptionfo)

# MDSchemaCopyDisplayDescriptionForAttribute(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the localized description of a metadata attributekey.

## Declaration

```swift
func MDSchemaCopyDisplayDescriptionForAttribute(_ name: CFString!) -> CFString!
```

## Parameters

- `name`: The name of the metadata attribute key.

<a id="return_value"></a>

## Return Value

The localized descriptionof the metadata attribute, or `NULL` ifno localized description is available.

## See Also

### MDSchema Miscellaneous Functions

- [MDSchemaCopyAllAttributes()](1445665-mdschemacopyallattributes.md): Returns an array containing all the metadata attributesdefined in the schema.
- [MDSchemaCopyAttributesForContentType(\_:)](1444459-mdschemacopyattributesforcontent.md): Returns a dictionary containing the metadata attributesfor the specified UTI type.
- [MDSchemaCopyDisplayNameForAttribute(\_:)](1450203-mdschemacopydisplaynameforattrib.md): Returns the localized display name of a metadata attributekey.
- [MDSchemaCopyMetaAttributesForAttribute(\_:)](1450052-mdschemacopymetaattributesforatt.md): Returns a dictionary describing the values for the specifiedmetadata attribute key.

# MDSchemaCopyDisplayDescriptionForAttribute (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the localized description of a metadata attributekey.

## Declaration

```objectivec
CFStringRef MDSchemaCopyDisplayDescriptionForAttribute(CFStringRef name);
```

## Parameters

- `name`: The name of the metadata attribute key.

<a id="return_value"></a>

## Return Value

The localized descriptionof the metadata attribute, or `NULL` ifno localized description is available.

## See Also

### MDSchema Miscellaneous Functions

- [MDSchemaCopyAllAttributes](1445665-mdschemacopyallattributes.md): Returns an array containing all the metadata attributesdefined in the schema.
- [MDSchemaCopyAttributesForContentType](1444459-mdschemacopyattributesforcontent.md): Returns a dictionary containing the metadata attributesfor the specified UTI type.
- [MDSchemaCopyDisplayNameForAttribute](1450203-mdschemacopydisplaynameforattrib.md): Returns the localized display name of a metadata attributekey.
- [MDSchemaCopyMetaAttributesForAttribute](1450052-mdschemacopymetaattributesforatt.md): Returns a dictionary describing the values for the specifiedmetadata attribute key.

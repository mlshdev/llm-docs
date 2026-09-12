> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1450203-mdschemacopydisplaynameforattrib](https://developer.apple.com/documentation/coreservices/1450203-mdschemacopydisplaynameforattrib)

# MDSchemaCopyDisplayNameForAttribute(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the localized display name of a metadata attributekey.

## Declaration

```swift
func MDSchemaCopyDisplayNameForAttribute(_ name: CFString!) -> CFString!
```

## Parameters

- `name`: The name of the metadata attribute key.

<a id="return_value"></a>

## Return Value

The localized displayname of the metadata attribute, or `NULL` ifno localized display name is available.

## See Also

### MDSchema Miscellaneous Functions

- [MDSchemaCopyAllAttributes()](1445665-mdschemacopyallattributes.md): Returns an array containing all the metadata attributesdefined in the schema.
- [MDSchemaCopyAttributesForContentType(\_:)](1444459-mdschemacopyattributesforcontent.md): Returns a dictionary containing the metadata attributesfor the specified UTI type.
- [MDSchemaCopyDisplayDescriptionForAttribute(\_:)](1442582-mdschemacopydisplaydescriptionfo.md): Returns the localized description of a metadata attributekey.
- [MDSchemaCopyMetaAttributesForAttribute(\_:)](1450052-mdschemacopymetaattributesforatt.md): Returns a dictionary describing the values for the specifiedmetadata attribute key.

# MDSchemaCopyDisplayNameForAttribute (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the localized display name of a metadata attributekey.

## Declaration

```objectivec
CFStringRef MDSchemaCopyDisplayNameForAttribute(CFStringRef name);
```

## Parameters

- `name`: The name of the metadata attribute key.

<a id="return_value"></a>

## Return Value

The localized displayname of the metadata attribute, or `NULL` ifno localized display name is available.

## See Also

### MDSchema Miscellaneous Functions

- [MDSchemaCopyAllAttributes](1445665-mdschemacopyallattributes.md): Returns an array containing all the metadata attributesdefined in the schema.
- [MDSchemaCopyAttributesForContentType](1444459-mdschemacopyattributesforcontent.md): Returns a dictionary containing the metadata attributesfor the specified UTI type.
- [MDSchemaCopyDisplayDescriptionForAttribute](1442582-mdschemacopydisplaydescriptionfo.md): Returns the localized description of a metadata attributekey.
- [MDSchemaCopyMetaAttributesForAttribute](1450052-mdschemacopymetaattributesforatt.md): Returns a dictionary describing the values for the specifiedmetadata attribute key.

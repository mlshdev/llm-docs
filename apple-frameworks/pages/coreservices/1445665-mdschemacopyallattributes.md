> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1445665-mdschemacopyallattributes

# MDSchemaCopyAllAttributes() (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns an array containing all the metadata attributesdefined in the schema.

## Declaration

```swift
func MDSchemaCopyAllAttributes() -> CFArray!
```

## See Also

### MDSchema Miscellaneous Functions

- [MDSchemaCopyAttributesForContentType(\_:)](1444459-mdschemacopyattributesforcontent.md): Returns a dictionary containing the metadata attributesfor the specified UTI type.
- [MDSchemaCopyDisplayDescriptionForAttribute(\_:)](1442582-mdschemacopydisplaydescriptionfo.md): Returns the localized description of a metadata attributekey.
- [MDSchemaCopyDisplayNameForAttribute(\_:)](1450203-mdschemacopydisplaynameforattrib.md): Returns the localized display name of a metadata attributekey.
- [MDSchemaCopyMetaAttributesForAttribute(\_:)](1450052-mdschemacopymetaattributesforatt.md): Returns a dictionary describing the values for the specifiedmetadata attribute key.

# MDSchemaCopyAllAttributes (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns an array containing all the metadata attributesdefined in the schema.

## Declaration

```objectivec
CFArrayRef MDSchemaCopyAllAttributes(void);
```

## See Also

### MDSchema Miscellaneous Functions

- [MDSchemaCopyAttributesForContentType](1444459-mdschemacopyattributesforcontent.md): Returns a dictionary containing the metadata attributesfor the specified UTI type.
- [MDSchemaCopyDisplayDescriptionForAttribute](1442582-mdschemacopydisplaydescriptionfo.md): Returns the localized description of a metadata attributekey.
- [MDSchemaCopyDisplayNameForAttribute](1450203-mdschemacopydisplaynameforattrib.md): Returns the localized display name of a metadata attributekey.
- [MDSchemaCopyMetaAttributesForAttribute](1450052-mdschemacopymetaattributesforatt.md): Returns a dictionary describing the values for the specifiedmetadata attribute key.

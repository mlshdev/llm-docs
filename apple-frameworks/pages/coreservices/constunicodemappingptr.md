> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/constunicodemappingptr](https://developer.apple.com/documentation/coreservices/constunicodemappingptr)

# ConstUnicodeMappingPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a constant Unicode mapping pointer.

## Declaration

```objectivec
typedef const UnicodeMapping *ConstUnicodeMappingPtr;
```

<a id="discussion"></a>

## Discussion

Many Unicode Converter functions take a pointer to a Unicode mapping structure as a parameter. For functions that do not modify the Unicode mapping contents, the Unicode Converter provides a constant pointer to a Unicode mapping structure defined by the `ConstUnicodeMappingPtr` data type.

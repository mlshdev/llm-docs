> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparseroptions/resolveexternalentities](https://developer.apple.com/documentation/corefoundation/cfxmlparseroptions/resolveexternalentities)

# resolveExternalEntities (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** macOS

Resolves all external entities.

## Declaration

```swift
static var resolveExternalEntities: CFXMLParserOptions { get }
```

## See Also

### Constants

- [validateDocument](validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [skipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [replacePhysicalEntities](replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [skipWhitespace](skipwhitespace.md)
- [addImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [allOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.

# kCFXMLParserResolveExternalEntities (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS

Resolves all external entities.

## Declaration

```objectivec
kCFXMLParserResolveExternalEntities
```

## See Also

### Constants

- [kCFXMLParserValidateDocument](validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [kCFXMLParserSkipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [kCFXMLParserReplacePhysicalEntities](replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [kCFXMLParserSkipWhitespace](skipwhitespace.md)
- [kCFXMLParserAddImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [kCFXMLParserAllOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.
- [kCFXMLParserNoOptions](kcfxmlparsernooptions.md): Leaves the XML as “intact” as possible (reports all structures; performs no replacements).

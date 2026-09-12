> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparseroptions/replacephysicalentities](https://developer.apple.com/documentation/corefoundation/cfxmlparseroptions/replacephysicalentities)

# replacePhysicalEntities (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** macOS

Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.

## Declaration

```swift
static var replacePhysicalEntities: CFXMLParserOptions { get }
```

## See Also

### Constants

- [validateDocument](validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [skipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [skipWhitespace](skipwhitespace.md)
- [resolveExternalEntities](resolveexternalentities.md): Resolves all external entities.
- [addImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [allOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.

# kCFXMLParserReplacePhysicalEntities (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS

Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.

## Declaration

```objectivec
kCFXMLParserReplacePhysicalEntities
```

## See Also

### Constants

- [kCFXMLParserValidateDocument](validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [kCFXMLParserSkipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [kCFXMLParserSkipWhitespace](skipwhitespace.md)
- [kCFXMLParserResolveExternalEntities](resolveexternalentities.md): Resolves all external entities.
- [kCFXMLParserAddImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [kCFXMLParserAllOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.
- [kCFXMLParserNoOptions](kcfxmlparsernooptions.md): Leaves the XML as “intact” as possible (reports all structures; performs no replacements).

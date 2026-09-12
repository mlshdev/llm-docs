> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparseroptions/validatedocument](https://developer.apple.com/documentation/corefoundation/cfxmlparseroptions/validatedocument)

# validateDocument (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** macOS

Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.

## Declaration

```swift
static var validateDocument: CFXMLParserOptions { get }
```

## See Also

### Constants

- [skipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [replacePhysicalEntities](replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [skipWhitespace](skipwhitespace.md)
- [resolveExternalEntities](resolveexternalentities.md): Resolves all external entities.
- [addImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [allOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.

# kCFXMLParserValidateDocument (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS

Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.

## Declaration

```objectivec
kCFXMLParserValidateDocument
```

## See Also

### Constants

- [kCFXMLParserSkipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [kCFXMLParserReplacePhysicalEntities](replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [kCFXMLParserSkipWhitespace](skipwhitespace.md)
- [kCFXMLParserResolveExternalEntities](resolveexternalentities.md): Resolves all external entities.
- [kCFXMLParserAddImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [kCFXMLParserAllOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.
- [kCFXMLParserNoOptions](kcfxmlparsernooptions.md): Leaves the XML as “intact” as possible (reports all structures; performs no replacements).

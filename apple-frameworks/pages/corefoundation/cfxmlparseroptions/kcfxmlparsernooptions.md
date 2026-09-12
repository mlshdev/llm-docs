> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparseroptions/kcfxmlparsernooptions](https://developer.apple.com/documentation/corefoundation/cfxmlparseroptions/kcfxmlparsernooptions)

# kCFXMLParserNoOptions

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS

Leaves the XML as “intact” as possible (reports all structures; performs no replacements).

## Declaration

```objectivec
kCFXMLParserNoOptions
```

## See Also

### Constants

- [kCFXMLParserValidateDocument](validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [kCFXMLParserSkipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [kCFXMLParserReplacePhysicalEntities](replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [kCFXMLParserSkipWhitespace](skipwhitespace.md)
- [kCFXMLParserResolveExternalEntities](resolveexternalentities.md): Resolves all external entities.
- [kCFXMLParserAddImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [kCFXMLParserAllOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.

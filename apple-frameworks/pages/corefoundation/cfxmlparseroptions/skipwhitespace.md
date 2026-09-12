> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparseroptions/skipwhitespace](https://developer.apple.com/documentation/corefoundation/cfxmlparseroptions/skipwhitespace)

# skipWhitespace (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** macOS

## Declaration

```swift
static var skipWhitespace: CFXMLParserOptions { get }
```

<a id="Discussion"></a>

## Discussion

Skip over all whitespace that does not abut non-whitespace character data. In other words, given “`<foo>  <bar> blah </bar></foo>`,” the whitespace between foo’s open tag and bar’s open tag would be suppressed, but the whitespace around `blah` would be preserved.

## See Also

### Constants

- [validateDocument](validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [skipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [replacePhysicalEntities](replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [resolveExternalEntities](resolveexternalentities.md): Resolves all external entities.
- [addImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [allOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.

# kCFXMLParserSkipWhitespace (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS

## Declaration

```objectivec
kCFXMLParserSkipWhitespace
```

<a id="Discussion"></a>

## Discussion

Skip over all whitespace that does not abut non-whitespace character data. In other words, given “`<foo>  <bar> blah </bar></foo>`,” the whitespace between foo’s open tag and bar’s open tag would be suppressed, but the whitespace around `blah` would be preserved.

## See Also

### Constants

- [kCFXMLParserValidateDocument](validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [kCFXMLParserSkipMetaData](skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [kCFXMLParserReplacePhysicalEntities](replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [kCFXMLParserResolveExternalEntities](resolveexternalentities.md): Resolves all external entities.
- [kCFXMLParserAddImpliedAttributes](addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [kCFXMLParserAllOptions](alloptions.md): Makes the parser do the most work, returning only the pure elementtree.
- [kCFXMLParserNoOptions](kcfxmlparsernooptions.md): Leaves the XML as “intact” as possible (reports all structures; performs no replacements).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparseroptions](https://developer.apple.com/documentation/corefoundation/cfxmlparseroptions)

# CFXMLParserOptions (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Options you can use to control the parser’s treatment of an XML document.

## Declaration

```swift
struct CFXMLParserOptions
```

<a id="overview"></a>

## Overview

These are the various options you use to configure the parser. An option flag of 0 ([kCFXMLParserNoOptions](cfxmlparseroptions/kcfxmlparsernooptions.md)) leaves the XML as “intact” as possible (reports all structures; performs no replacements). Hence, to make the parser do the most work, returning only the pure element tree, set the option flag to [allOptions](cfxmlparseroptions/alloptions.md).

## Topics

### Constants

- [validateDocument](cfxmlparseroptions/validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [skipMetaData](cfxmlparseroptions/skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [replacePhysicalEntities](cfxmlparseroptions/replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [skipWhitespace](cfxmlparseroptions/skipwhitespace.md)
- [resolveExternalEntities](cfxmlparseroptions/resolveexternalentities.md): Resolves all external entities.
- [addImpliedAttributes](cfxmlparseroptions/addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [allOptions](cfxmlparseroptions/alloptions.md): Makes the parser do the most work, returning only the pure elementtree.

### Initializers

- [init(rawValue:)](cfxmlparseroptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [CFXMLParserStatusCode](cfxmlparserstatuscode.md): The various status and error flags that can be returned by the parser.

# CFXMLParserOptions (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** macOS

Options you can use to control the parser’s treatment of an XML document.

## Declaration

```objectivec
enum CFXMLParserOptions : CFOptionFlags;
```

<a id="overview"></a>

## Overview

These are the various options you use to configure the parser. An option flag of 0 ([kCFXMLParserNoOptions](cfxmlparseroptions/kcfxmlparsernooptions.md)) leaves the XML as “intact” as possible (reports all structures; performs no replacements). Hence, to make the parser do the most work, returning only the pure element tree, set the option flag to [kCFXMLParserAllOptions](cfxmlparseroptions/alloptions.md).

## Topics

### Constants

- [kCFXMLParserValidateDocument](cfxmlparseroptions/validatedocument.md): Validates the document against its grammar from the DTD, reporting any errors. Currently not supported.
- [kCFXMLParserSkipMetaData](cfxmlparseroptions/skipmetadata.md): Silently skip over metadata constructs (the DTD and comments).
- [kCFXMLParserReplacePhysicalEntities](cfxmlparseroptions/replacephysicalentities.md): Replaces declared entities like `&lt`;. Note that other than the 5 predefined entities (`lt`, `gt`, `quot`, `amp`, `apos`), these must be defined in the DTD. Currently not supported.
- [kCFXMLParserSkipWhitespace](cfxmlparseroptions/skipwhitespace.md)
- [kCFXMLParserResolveExternalEntities](cfxmlparseroptions/resolveexternalentities.md): Resolves all external entities.
- [kCFXMLParserAddImpliedAttributes](cfxmlparseroptions/addimpliedattributes.md): Where the DTD specifies implied attribute-value pairs for a particular element, add those pairs to any occurrences of the element in the element tree. Currently not supported.
- [kCFXMLParserAllOptions](cfxmlparseroptions/alloptions.md): Makes the parser do the most work, returning only the pure elementtree.
- [kCFXMLParserNoOptions](cfxmlparseroptions/kcfxmlparsernooptions.md): Leaves the XML as “intact” as possible (reports all structures; performs no replacements).

## See Also

### Constants

- [CFXMLParserStatusCode](cfxmlparserstatuscode.md): The various status and error flags that can be returned by the parser.

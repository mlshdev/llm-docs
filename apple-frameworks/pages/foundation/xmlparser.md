> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser](https://developer.apple.com/documentation/foundation/xmlparser)

# XMLParser (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An event driven parser of XML documents (including DTD declarations).

## Declaration

```swift
class XMLParser
```

<a id="overview"></a>

## Overview

An [XMLParser](xmlparser.md) notifies its delegate about the items (elements, attributes, CDATA blocks, comments, and so on) that it encounters as it processes an XML document. It does not itself do anything with those parsed items except report them. It also reports parsing errors. For convenience, an [XMLParser](xmlparser.md) object in the following descriptions is sometimes referred to as a parser object. Unless used in a callback, the [XMLParser](xmlparser.md) is a thread-safe class as long as any given instance is only used in one thread.

> **Note**

>  Namespace support was implemented in [XMLParser](xmlparser.md) starting in macOS 10.4. Namespace-related methods of [XMLParser](xmlparser.md) prior to this version have no effect.

## Topics

### Initializing a Parser Object

- [init(contentsOf:)](xmlparser/init%28contentsof_%29.md): Initializes a parser with the XML content referenced by the given URL.
- [init(data:)](xmlparser/init%28data_%29.md): Initializes a parser with the XML contents encapsulated in a given data object.
- [init(stream:)](xmlparser/init%28stream_%29.md): Initializes a parser with the XML contents from the specified stream and parses it.

### Managing Delegates

- [delegate](xmlparser/delegate.md): A delegate object that receives messages about the parsing process.

### Managing Parser Behavior

- [shouldProcessNamespaces](xmlparser/shouldprocessnamespaces.md): A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.
- [shouldReportNamespacePrefixes](xmlparser/shouldreportnamespaceprefixes.md): A Boolean value that determines whether the parser reports the prefixes indicating the scope of namespace declarations.
- [shouldResolveExternalEntities](xmlparser/shouldresolveexternalentities.md): A Boolean value that determines whether the parser reports declarations of external entities.

### Parsing

- [parse()](xmlparser/parse%28%29.md): Starts the event-driven parsing operation.
- [abortParsing()](xmlparser/abortparsing%28%29.md): Stops the parser object.
- [parserError](xmlparser/parsererror.md): An [NSError](nserror.md) object from which you can obtain information about a parsing error.

### Obtaining Parser State

- [columnNumber](xmlparser/columnnumber.md): The column number of the XML document being processed by the parser.
- [lineNumber](xmlparser/linenumber.md): The line number of the XML document being processed by the parser.
- [publicID](xmlparser/publicid.md): The public identifier of the external entity referenced in the XML document.
- [systemID](xmlparser/systemid.md): The system identifier of the external entity referenced in the XML document.

### Constants

- [XMLParser.ExternalEntityResolvingPolicy](xmlparser/externalentityresolvingpolicy-swift.enum.md): Defines the external entity resolving policy used by an `NSXMLParser` instance.
- [errorDomain](xmlparser/errordomain.md): Indicates an error in XML parsing.
- [XMLParser.ErrorCode](xmlparser/errorcode.md): The following error codes are defined by `NSXMLParser`. For error codes not listed here, see the `<libxml/xmlerror.h>` header file.

### Initializers

- [init(contentsOfURL:)](xmlparser/init%28contentsofurl_%29.md)

### Instance Properties

- [allowedExternalEntityURLs](xmlparser/allowedexternalentityurls.md): The set of external entity URLs that the parser is allowed to load.
- [externalEntityResolvingPolicy](xmlparser/externalentityresolvingpolicy-swift.property.md): The external entity resolving policy for the parser.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Event-Based Processing

- [XMLParserDelegate](xmlparserdelegate.md): The interface an XML parser uses to inform its delegate about the content of the parsed document.

# NSXMLParser (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An event driven parser of XML documents (including DTD declarations).

## Declaration

```objectivec
@interface NSXMLParser : NSObject
```

<a id="overview"></a>

## Overview

An [NSXMLParser](xmlparser.md) notifies its delegate about the items (elements, attributes, CDATA blocks, comments, and so on) that it encounters as it processes an XML document. It does not itself do anything with those parsed items except report them. It also reports parsing errors. For convenience, an [NSXMLParser](xmlparser.md) object in the following descriptions is sometimes referred to as a parser object. Unless used in a callback, the [NSXMLParser](xmlparser.md) is a thread-safe class as long as any given instance is only used in one thread.

> **Note**

>  Namespace support was implemented in [NSXMLParser](xmlparser.md) starting in macOS 10.4. Namespace-related methods of [NSXMLParser](xmlparser.md) prior to this version have no effect.

## Topics

### Initializing a Parser Object

- [initWithContentsOfURL:](xmlparser/init%28contentsof_%29.md): Initializes a parser with the XML content referenced by the given URL.
- [initWithData:](xmlparser/init%28data_%29.md): Initializes a parser with the XML contents encapsulated in a given data object.
- [initWithStream:](xmlparser/init%28stream_%29.md): Initializes a parser with the XML contents from the specified stream and parses it.

### Managing Delegates

- [delegate](xmlparser/delegate.md): A delegate object that receives messages about the parsing process.

### Managing Parser Behavior

- [shouldProcessNamespaces](xmlparser/shouldprocessnamespaces.md): A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.
- [shouldReportNamespacePrefixes](xmlparser/shouldreportnamespaceprefixes.md): A Boolean value that determines whether the parser reports the prefixes indicating the scope of namespace declarations.
- [shouldResolveExternalEntities](xmlparser/shouldresolveexternalentities.md): A Boolean value that determines whether the parser reports declarations of external entities.

### Parsing

- [parse](xmlparser/parse%28%29.md): Starts the event-driven parsing operation.
- [abortParsing](xmlparser/abortparsing%28%29.md): Stops the parser object.
- [parserError](xmlparser/parsererror.md): An [NSError](nserror.md) object from which you can obtain information about a parsing error.

### Obtaining Parser State

- [columnNumber](xmlparser/columnnumber.md): The column number of the XML document being processed by the parser.
- [lineNumber](xmlparser/linenumber.md): The line number of the XML document being processed by the parser.
- [publicID](xmlparser/publicid.md): The public identifier of the external entity referenced in the XML document.
- [systemID](xmlparser/systemid.md): The system identifier of the external entity referenced in the XML document.

### Constants

- [NSXMLParserExternalEntityResolvingPolicy](xmlparser/externalentityresolvingpolicy-swift.enum.md): Defines the external entity resolving policy used by an `NSXMLParser` instance.
- [NSXMLParserErrorDomain](xmlparser/errordomain.md): Indicates an error in XML parsing.
- [NSXMLParserError](xmlparser/errorcode.md): The following error codes are defined by `NSXMLParser`. For error codes not listed here, see the `<libxml/xmlerror.h>` header file.

### Instance Properties

- [allowedExternalEntityURLs](xmlparser/allowedexternalentityurls.md): The set of external entity URLs that the parser is allowed to load.
- [externalEntityResolvingPolicy](xmlparser/externalentityresolvingpolicy-swift.property.md): The external entity resolving policy for the parser.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Event-Based Processing

- [NSXMLParserDelegate](xmlparserdelegate.md): The interface an XML parser uses to inform its delegate about the content of the parsed document.

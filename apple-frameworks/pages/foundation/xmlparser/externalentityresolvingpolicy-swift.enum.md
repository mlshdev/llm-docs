> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/externalentityresolvingpolicy-swift.enum](https://developer.apple.com/documentation/foundation/xmlparser/externalentityresolvingpolicy-swift.enum)

# XMLParser.ExternalEntityResolvingPolicy (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the external entity resolving policy used by an `NSXMLParser` instance.

## Declaration

```swift
enum ExternalEntityResolvingPolicy
```

## Topics

### Constants

- [XMLParser.ExternalEntityResolvingPolicy.always](externalentityresolvingpolicy-swift.enum/always.md): The parser always resolves external entities.
- [XMLParser.ExternalEntityResolvingPolicy.never](externalentityresolvingpolicy-swift.enum/never.md): The parser should never resolve external entities.
- [XMLParser.ExternalEntityResolvingPolicy.noNetwork](externalentityresolvingpolicy-swift.enum/nonetwork.md): The parser resolves external entities but does not load them over the network.
- [XMLParser.ExternalEntityResolvingPolicy.sameOriginOnly](externalentityresolvingpolicy-swift.enum/sameoriginonly.md): The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.
- [XMLParser.ExternalEntityResolvingPolicy.always](externalentityresolvingpolicy-swift.enum/always.md): The parser always resolves external entities.
- [XMLParser.ExternalEntityResolvingPolicy.never](externalentityresolvingpolicy-swift.enum/never.md): The parser should never resolve external entities.
- [XMLParser.ExternalEntityResolvingPolicy.noNetwork](externalentityresolvingpolicy-swift.enum/nonetwork.md): The parser resolves external entities but does not load them over the network.
- [XMLParser.ExternalEntityResolvingPolicy.sameOriginOnly](externalentityresolvingpolicy-swift.enum/sameoriginonly.md): The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.

### Initializers

- [init(rawValue:)](externalentityresolvingpolicy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [errorDomain](errordomain.md): Indicates an error in XML parsing.
- [XMLParser.ErrorCode](errorcode.md): The following error codes are defined by `NSXMLParser`. For error codes not listed here, see the `<libxml/xmlerror.h>` header file.

# NSXMLParserExternalEntityResolvingPolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the external entity resolving policy used by an `NSXMLParser` instance.

## Declaration

```objectivec
enum NSXMLParserExternalEntityResolvingPolicy : NSUInteger;
```

## Topics

### Constants

- [NSXMLParserResolveExternalEntitiesAlways](externalentityresolvingpolicy-swift.enum/always.md): The parser always resolves external entities.
- [NSXMLParserResolveExternalEntitiesNever](externalentityresolvingpolicy-swift.enum/never.md): The parser should never resolve external entities.
- [NSXMLParserResolveExternalEntitiesNoNetwork](externalentityresolvingpolicy-swift.enum/nonetwork.md): The parser resolves external entities but does not load them over the network.
- [NSXMLParserResolveExternalEntitiesSameOriginOnly](externalentityresolvingpolicy-swift.enum/sameoriginonly.md): The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.
- [NSXMLParserResolveExternalEntitiesAlways](externalentityresolvingpolicy-swift.enum/always.md): The parser always resolves external entities.
- [NSXMLParserResolveExternalEntitiesNever](externalentityresolvingpolicy-swift.enum/never.md): The parser should never resolve external entities.
- [NSXMLParserResolveExternalEntitiesNoNetwork](externalentityresolvingpolicy-swift.enum/nonetwork.md): The parser resolves external entities but does not load them over the network.
- [NSXMLParserResolveExternalEntitiesSameOriginOnly](externalentityresolvingpolicy-swift.enum/sameoriginonly.md): The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.

## See Also

### Constants

- [NSXMLParserErrorDomain](errordomain.md): Indicates an error in XML parsing.
- [NSXMLParserError](errorcode.md): The following error codes are defined by `NSXMLParser`. For error codes not listed here, see the `<libxml/xmlerror.h>` header file.

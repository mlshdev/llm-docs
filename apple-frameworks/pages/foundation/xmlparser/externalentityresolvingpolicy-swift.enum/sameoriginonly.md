> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/externalentityresolvingpolicy-swift.enum/sameoriginonly](https://developer.apple.com/documentation/foundation/xmlparser/externalentityresolvingpolicy-swift.enum/sameoriginonly)

# XMLParser.ExternalEntityResolvingPolicy.sameOriginOnly (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.

## Declaration

```swift
case sameOriginOnly
```

## See Also

### Constants

- [XMLParser.ExternalEntityResolvingPolicy.always](always.md): The parser always resolves external entities.
- [XMLParser.ExternalEntityResolvingPolicy.never](never.md): The parser should never resolve external entities.
- [XMLParser.ExternalEntityResolvingPolicy.noNetwork](nonetwork.md): The parser resolves external entities but does not load them over the network.
- [XMLParser.ExternalEntityResolvingPolicy.always](always.md): The parser always resolves external entities.
- [XMLParser.ExternalEntityResolvingPolicy.never](never.md): The parser should never resolve external entities.
- [XMLParser.ExternalEntityResolvingPolicy.noNetwork](nonetwork.md): The parser resolves external entities but does not load them over the network.

# NSXMLParserResolveExternalEntitiesSameOriginOnly (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.

## Declaration

```objectivec
NSXMLParserResolveExternalEntitiesSameOriginOnly
```

## See Also

### Constants

- [NSXMLParserResolveExternalEntitiesAlways](always.md): The parser always resolves external entities.
- [NSXMLParserResolveExternalEntitiesNever](never.md): The parser should never resolve external entities.
- [NSXMLParserResolveExternalEntitiesNoNetwork](nonetwork.md): The parser resolves external entities but does not load them over the network.
- [NSXMLParserResolveExternalEntitiesAlways](always.md): The parser always resolves external entities.
- [NSXMLParserResolveExternalEntitiesNever](never.md): The parser should never resolve external entities.
- [NSXMLParserResolveExternalEntitiesNoNetwork](nonetwork.md): The parser resolves external entities but does not load them over the network.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/externalentityresolvingpolicy-swift.enum/always](https://developer.apple.com/documentation/foundation/xmlparser/externalentityresolvingpolicy-swift.enum/always)

# XMLParser.ExternalEntityResolvingPolicy.always (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The parser always resolves external entities.

## Declaration

```swift
case always
```

## See Also

### Constants

- [XMLParser.ExternalEntityResolvingPolicy.never](never.md): The parser should never resolve external entities.
- [XMLParser.ExternalEntityResolvingPolicy.noNetwork](nonetwork.md): The parser resolves external entities but does not load them over the network.
- [XMLParser.ExternalEntityResolvingPolicy.sameOriginOnly](sameoriginonly.md): The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.
- [XMLParser.ExternalEntityResolvingPolicy.never](never.md): The parser should never resolve external entities.
- [XMLParser.ExternalEntityResolvingPolicy.noNetwork](nonetwork.md): The parser resolves external entities but does not load them over the network.
- [XMLParser.ExternalEntityResolvingPolicy.sameOriginOnly](sameoriginonly.md): The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.

# NSXMLParserResolveExternalEntitiesAlways (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The parser always resolves external entities.

## Declaration

```objectivec
NSXMLParserResolveExternalEntitiesAlways
```

## See Also

### Constants

- [NSXMLParserResolveExternalEntitiesNever](never.md): The parser should never resolve external entities.
- [NSXMLParserResolveExternalEntitiesNoNetwork](nonetwork.md): The parser resolves external entities but does not load them over the network.
- [NSXMLParserResolveExternalEntitiesSameOriginOnly](sameoriginonly.md): The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.
- [NSXMLParserResolveExternalEntitiesNever](never.md): The parser should never resolve external entities.
- [NSXMLParserResolveExternalEntitiesNoNetwork](nonetwork.md): The parser resolves external entities but does not load them over the network.
- [NSXMLParserResolveExternalEntitiesSameOriginOnly](sameoriginonly.md): The parser resolves external entities only from the same origin as the original URL. Only applies to `NSXMLParser` instances initialized with `-initWithContentsOfURL:`.

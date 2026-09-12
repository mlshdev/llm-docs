> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/errordomain](https://developer.apple.com/documentation/foundation/xmlparser/errordomain)

# errorDomain (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates an error in XML parsing.

## Declaration

```swift
class let errorDomain: String
```

<a id="Discussion"></a>

## Discussion

Used by `NSError`.

## See Also

### Constants

- [XMLParser.ExternalEntityResolvingPolicy](externalentityresolvingpolicy-swift.enum.md): Defines the external entity resolving policy used by an `NSXMLParser` instance.
- [XMLParser.ErrorCode](errorcode.md): The following error codes are defined by `NSXMLParser`. For error codes not listed here, see the `<libxml/xmlerror.h>` header file.

# NSXMLParserErrorDomain (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates an error in XML parsing.

## Declaration

```objectivec
extern NSErrorDomain const NSXMLParserErrorDomain;
```

<a id="Discussion"></a>

## Discussion

Used by `NSError`.

## See Also

### Constants

- [NSXMLParserExternalEntityResolvingPolicy](externalentityresolvingpolicy-swift.enum.md): Defines the external entity resolving policy used by an `NSXMLParser` instance.
- [NSXMLParserError](errorcode.md): The following error codes are defined by `NSXMLParser`. For error codes not listed here, see the `<libxml/xmlerror.h>` header file.

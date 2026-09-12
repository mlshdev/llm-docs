> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlentitytypecode](https://developer.apple.com/documentation/corefoundation/cfxmlentitytypecode)

# CFXMLEntityTypeCode (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** macOS

The entity type identification codes that the parser uses to describe XML entities.

## Declaration

```swift
enum CFXMLEntityTypeCode
```

<a id="overview"></a>

## Overview

These codes are used with the [CFXMLEntityInfo](cfxmlentityinfo.md) and [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md) structures.

## Topics

### Constants

- [CFXMLEntityTypeCode.parameter](cfxmlentitytypecode/parameter.md): Implies a parsed, internal entity.
- [CFXMLEntityTypeCode.parsedInternal](cfxmlentitytypecode/parsedinternal.md): Indicates a parsed, internal entity.
- [CFXMLEntityTypeCode.parsedExternal](cfxmlentitytypecode/parsedexternal.md): Indicates a parsed, external entity.
- [CFXMLEntityTypeCode.unparsed](cfxmlentitytypecode/unparsed.md): Indicates an unparsed entity.
- [CFXMLEntityTypeCode.character](cfxmlentitytypecode/character.md): Indicates a character entity type.

### Initializers

- [init(rawValue:)](cfxmlentitytypecode/init%28rawvalue_%29.md)

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

- [Node Current Version](1443311-node-current-version.md): The version of a CFXMLNode object.
- [CFXMLNodeTypeCode](cfxmlnodetypecode.md): The various XML data type identification codes that the parser uses to describe XML structures.

# CFXMLEntityTypeCode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** macOS

The entity type identification codes that the parser uses to describe XML entities.

## Declaration

```objectivec
enum CFXMLEntityTypeCode : CFIndex;
```

<a id="overview"></a>

## Overview

These codes are used with the [CFXMLEntityInfo](cfxmlentityinfo.md) and [CFXMLEntityReferenceInfo](cfxmlentityreferenceinfo.md) structures.

## Topics

### Constants

- [kCFXMLEntityTypeParameter](cfxmlentitytypecode/parameter.md): Implies a parsed, internal entity.
- [kCFXMLEntityTypeParsedInternal](cfxmlentitytypecode/parsedinternal.md): Indicates a parsed, internal entity.
- [kCFXMLEntityTypeParsedExternal](cfxmlentitytypecode/parsedexternal.md): Indicates a parsed, external entity.
- [kCFXMLEntityTypeUnparsed](cfxmlentitytypecode/unparsed.md): Indicates an unparsed entity.
- [kCFXMLEntityTypeCharacter](cfxmlentitytypecode/character.md): Indicates a character entity type.

## See Also

### Constants

- [Node Current Version](1443311-node-current-version.md): The version of a CFXMLNode object.
- [CFXMLNodeTypeCode](cfxmlnodetypecode.md): The various XML data type identification codes that the parser uses to describe XML structures.

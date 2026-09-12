> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparsercallbacks](https://developer.apple.com/documentation/corefoundation/cfxmlparsercallbacks)

# CFXMLParserCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains version information and function pointers to callbacks needed when parsing XML.

## Declaration

```swift
struct CFXMLParserCallBacks
```

<a id="overview"></a>

## Overview

This structure is passed to one of the `CFXMLParserCreate...` functions. Only the `createXMLStructure`, `addChild`, and `endXMLStructure` fields are required. Set the others to `NULL` if you don’t wish to implement them.

## Topics

### Initializers

- [init()](cfxmlparsercallbacks/init%28%29.md)
- [init(version:createXMLStructure:addChild:endXMLStructure:resolveExternalEntity:handleError:)](cfxmlparsercallbacks/init%28version_createxmlstructure_addchild_endxmlstructure_resolveexternalentity_handleerror_%29.md)

### Instance Properties

- [addChild](cfxmlparsercallbacks/addchild.md): Called when a child is added.
- [createXMLStructure](cfxmlparsercallbacks/createxmlstructure.md): Called when an XML structure is created.
- [endXMLStructure](cfxmlparsercallbacks/endxmlstructure.md): Called when an XML structure has ended.
- [handleError](cfxmlparsercallbacks/handleerror.md): Called when a parse error needs to be handled.
- [resolveExternalEntity](cfxmlparsercallbacks/resolveexternalentity.md): Called when an external entity needs to be resolved.
- [version](cfxmlparsercallbacks/version.md): Version number. Must be `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CFXMLParserContext](cfxmlparsercontext.md): Contains version information and function pointers to callbacks used when handling a program-defined context.

# CFXMLParserCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains version information and function pointers to callbacks needed when parsing XML.

## Declaration

```objectivec
typedef struct { ... } CFXMLParserCallBacks;
```

<a id="overview"></a>

## Overview

This structure is passed to one of the `CFXMLParserCreate...` functions. Only the `createXMLStructure`, `addChild`, and `endXMLStructure` fields are required. Set the others to `NULL` if you don’t wish to implement them.

## Topics

### Instance Properties

- [addChild](cfxmlparsercallbacks/addchild.md): Called when a child is added.
- [createXMLStructure](cfxmlparsercallbacks/createxmlstructure.md): Called when an XML structure is created.
- [endXMLStructure](cfxmlparsercallbacks/endxmlstructure.md): Called when an XML structure has ended.
- [handleError](cfxmlparsercallbacks/handleerror.md): Called when a parse error needs to be handled.
- [resolveExternalEntity](cfxmlparsercallbacks/resolveexternalentity.md): Called when an external entity needs to be resolved.
- [version](cfxmlparsercallbacks/version.md): Version number. Must be `0`.

## See Also

### Data Types

- [CFXMLParserContext](cfxmlparsercontext.md): Contains version information and function pointers to callbacks used when handling a program-defined context.

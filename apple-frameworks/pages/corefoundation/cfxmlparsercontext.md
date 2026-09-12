> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparsercontext](https://developer.apple.com/documentation/corefoundation/cfxmlparsercontext)

# CFXMLParserContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains version information and function pointers to callbacks used when handling a program-defined context.

## Declaration

```swift
struct CFXMLParserContext
```

<a id="overview"></a>

## Overview

You can associate a context with a parser when the parser is created. The context can be anything you wish and will be passed as a parameter to all of the XML parser callbacks.

## Topics

### Initializers

- [init()](cfxmlparsercontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:)](cfxmlparsercontext/init%28version_info_retain_release_copydescription_%29.md)

### Instance Properties

- [copyDescription](cfxmlparsercontext/copydescription.md): A copy description callback for your program-defined context data. Optional.
- [info](cfxmlparsercontext/info.md): An arbitrary program-defined value passed to all the callbacks in this structure and in the [CFXMLParserCallBacks](cfxmlparsercallbacks.md) structure.
- [release](cfxmlparsercontext/release.md): A release callback for your program-defined context data. Optional.
- [retain](cfxmlparsercontext/retain.md): A retain callback for your program-defined context data. Optional.
- [version](cfxmlparsercontext/version.md): Version number of this structure. Must be 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CFXMLParserCallBacks](cfxmlparsercallbacks.md): Contains version information and function pointers to callbacks needed when parsing XML.

# CFXMLParserContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

Contains version information and function pointers to callbacks used when handling a program-defined context.

## Declaration

```objectivec
typedef struct { ... } CFXMLParserContext;
```

<a id="overview"></a>

## Overview

You can associate a context with a parser when the parser is created. The context can be anything you wish and will be passed as a parameter to all of the XML parser callbacks.

## Topics

### Instance Properties

- [copyDescription](cfxmlparsercontext/copydescription.md): A copy description callback for your program-defined context data. Optional.
- [info](cfxmlparsercontext/info.md): An arbitrary program-defined value passed to all the callbacks in this structure and in the [CFXMLParserCallBacks](cfxmlparsercallbacks.md) structure.
- [release](cfxmlparsercontext/release.md): A release callback for your program-defined context data. Optional.
- [retain](cfxmlparsercontext/retain.md): A retain callback for your program-defined context data. Optional.
- [version](cfxmlparsercontext/version.md): Version number of this structure. Must be 0.

## See Also

### Data Types

- [CFXMLParserCallBacks](cfxmlparsercallbacks.md): Contains version information and function pointers to callbacks needed when parsing XML.

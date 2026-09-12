> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/delimiterinfo](https://developer.apple.com/documentation/applicationservices/delimiterinfo)

# DelimiterInfo (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a delimiter information structure.

## Declaration

```swift
struct DelimiterInfo
```

<a id="overview"></a>

## Overview

A delimiter information structure defines the characters used to indicate the beginning and end of a command embedded in text. A delimiter can be one or two characters.

Ordinarily, applications that support embedded speech commands should not change the start or end delimiters. However, if for some reason you must change the delimiters, you can use the `SetSpeechInfo` function with the `soCommandDelimiter` selector. For example, you might do this if a text buffer naturally includes the delimiter strings. Before passing such a buffer to the Speech Synthesis Manager, you can change the delimiter strings to some two-character sequences not used in the buffer and then change the delimiter strings back once processing of the buffer is complete.

If a single-byte delimiter is desired, it should be followed by a `NULL` (0) byte. If the delimiter strings both consist of two `NULL` bytes, embedded command processing is disabled.

## Topics

### Initializers

- [init()](delimiterinfo/1460927-init.md)
- [init(startDelimiter:endDelimiter:)](delimiterinfo/1464001-init.md)

### Instance Properties

- [endDelimiter](delimiterinfo/1462493-enddelimiter.md): The end delimiter for an embedded command. By default, the end delimiter is “`]]`”.
- [startDelimiter](delimiterinfo/1462284-startdelimiter.md): The start delimiter for an embedded command. By default, the start delimiter is “`[[`”.

# DelimiterInfo (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a delimiter information structure.

## Declaration

```objectivec
typedef struct DelimiterInfo {
    ...
} DelimiterInfo;
```

<a id="overview"></a>

## Overview

A delimiter information structure defines the characters used to indicate the beginning and end of a command embedded in text. A delimiter can be one or two characters.

Ordinarily, applications that support embedded speech commands should not change the start or end delimiters. However, if for some reason you must change the delimiters, you can use the `SetSpeechInfo` function with the `soCommandDelimiter` selector. For example, you might do this if a text buffer naturally includes the delimiter strings. Before passing such a buffer to the Speech Synthesis Manager, you can change the delimiter strings to some two-character sequences not used in the buffer and then change the delimiter strings back once processing of the buffer is complete.

If a single-byte delimiter is desired, it should be followed by a `NULL` (0) byte. If the delimiter strings both consist of two `NULL` bytes, embedded command processing is disabled.

## Topics

### Instance Properties

- [endDelimiter](delimiterinfo/1462493-enddelimiter.md): The end delimiter for an embedded command. By default, the end delimiter is “`]]`”.
- [startDelimiter](delimiterinfo/1462284-startdelimiter.md): The start delimiter for an embedded command. By default, the start delimiter is “`[[`”.

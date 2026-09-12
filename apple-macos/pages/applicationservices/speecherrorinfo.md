> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/speecherrorinfo](https://developer.apple.com/documentation/applicationservices/speecherrorinfo)

# SpeechErrorInfo (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a speech error information structure.

## Declaration

```swift
struct SpeechErrorInfo
```

<a id="overview"></a>

## Overview

By calling the [GetSpeechInfo](1552220-getspeechinfo.md) function with the `soErrors` selector, you can obtain a speech error information structure, which shows what Speech Synthesis Manager errors occurred while processing a text buffer on a given speech channel.

Speech error information structures never include errors that are returned by Speech Synthesis Manager functions. Instead, they reflect only errors encountered directly in the processing of text, and, in particular, in the processing of commands embedded within text.

The speech error information structure keeps track of only the most recent error and the first error that occurred after the previous call to the `GetSpeechInfo` function with the `soErrors` selector. If your application needs to keep track of all errors, then you should install an error callback function, [SpeechErrorProcPtr](speecherrorprocptr.md).

## Topics

### Initializers

- [init()](speecherrorinfo/1463016-init.md)
- [init(count:oldest:oldPos:newest:newPos:)](speecherrorinfo/1464795-init.md)

### Instance Properties

- [count](speecherrorinfo/1459251-count.md): The number of errors that have occurred in processing the current text buffer since the last call to the `GetSpeechInfo` function with the `soErrors` selector. Of these errors, you can find information about only the first and last error that occurred.
- [newPos](speecherrorinfo/1464494-newpos.md): The character position within the text buffer being processed of the most recent error.
- [newest](speecherrorinfo/1461434-newest.md): The error code of the most recent error.
- [oldPos](speecherrorinfo/1460065-oldpos.md): The character position within the text buffer being processed of the first error that occurred after the previous call to the `GetSpeechInfo` function with the `soErrors` selector.
- [oldest](speecherrorinfo/1463962-oldest.md): The error code of the first error that occurred after the previous call to the `GetSpeechInfo` function with the `soErrors` selector.

# SpeechErrorInfo (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Defines a speech error information structure.

## Declaration

```objectivec
typedef struct SpeechErrorInfo {
    ...
} SpeechErrorInfo;
```

<a id="overview"></a>

## Overview

By calling the [GetSpeechInfo](1552220-getspeechinfo.md) function with the `soErrors` selector, you can obtain a speech error information structure, which shows what Speech Synthesis Manager errors occurred while processing a text buffer on a given speech channel.

Speech error information structures never include errors that are returned by Speech Synthesis Manager functions. Instead, they reflect only errors encountered directly in the processing of text, and, in particular, in the processing of commands embedded within text.

The speech error information structure keeps track of only the most recent error and the first error that occurred after the previous call to the `GetSpeechInfo` function with the `soErrors` selector. If your application needs to keep track of all errors, then you should install an error callback function, [SpeechErrorProcPtr](speecherrorprocptr.md).

## Topics

### Instance Properties

- [count](speecherrorinfo/1459251-count.md): The number of errors that have occurred in processing the current text buffer since the last call to the `GetSpeechInfo` function with the `soErrors` selector. Of these errors, you can find information about only the first and last error that occurred.
- [newPos](speecherrorinfo/1464494-newpos.md): The character position within the text buffer being processed of the most recent error.
- [newest](speecherrorinfo/1461434-newest.md): The error code of the most recent error.
- [oldPos](speecherrorinfo/1460065-oldpos.md): The character position within the text buffer being processed of the first error that occurred after the previous call to the `GetSpeechInfo` function with the `soErrors` selector.
- [oldest](speecherrorinfo/1463962-oldest.md): The error code of the first error that occurred after the previous call to the `GetSpeechInfo` function with the `soErrors` selector.

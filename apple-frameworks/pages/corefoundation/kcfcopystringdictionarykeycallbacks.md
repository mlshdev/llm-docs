> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfcopystringdictionarykeycallbacks](https://developer.apple.com/documentation/corefoundation/kcfcopystringdictionarykeycallbacks)

# kCFCopyStringDictionaryKeyCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFString objects, which may be mutable and need to be copied in order to serve as constant keys for the values in the dictionary.

## Declaration

```swift
let kCFCopyStringDictionaryKeyCallBacks: CFDictionaryKeyCallBacks
```

<a id="Discussion"></a>

## Discussion

You typically use a pointer to this constant when creating a new dictionary.

> **Important**

>  For performance reasons, the default `kCFCopyStringDictionaryKeyCallBacks` behavior uses [CFEqual(\_:\_:)](cfequal%28____%29.md) which does not normalize the strings. This means that, for example, it does not consider CFStrings to be equal when they are the same but one is in pre-composed form (say, originating from a UTF-16 text file) and the other in decomposed form (say, originating from a file name). In cases where you use strings from different sources, you may want to pre-normalize the keys or else use a different set of functions to perform the comparison.

## See Also

### Constants

- [kCFTypeDictionaryKeyCallBacks](kcftypedictionarykeycallbacks.md): Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFType-derived objects.
- [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md): Predefined [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFDictionary are all CFType-derived objects.

# kCFCopyStringDictionaryKeyCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFString objects, which may be mutable and need to be copied in order to serve as constant keys for the values in the dictionary.

## Declaration

```objectivec
extern const CFDictionaryKeyCallBacks kCFCopyStringDictionaryKeyCallBacks;
```

<a id="Discussion"></a>

## Discussion

You typically use a pointer to this constant when creating a new dictionary.

> **Important**

>  For performance reasons, the default `kCFCopyStringDictionaryKeyCallBacks` behavior uses [CFEqual](cfequal%28____%29.md) which does not normalize the strings. This means that, for example, it does not consider CFStrings to be equal when they are the same but one is in pre-composed form (say, originating from a UTF-16 text file) and the other in decomposed form (say, originating from a file name). In cases where you use strings from different sources, you may want to pre-normalize the keys or else use a different set of functions to perform the comparison.

## See Also

### Constants

- [kCFTypeDictionaryKeyCallBacks](kcftypedictionarykeycallbacks.md): Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFType-derived objects.
- [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md): Predefined [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFDictionary are all CFType-derived objects.

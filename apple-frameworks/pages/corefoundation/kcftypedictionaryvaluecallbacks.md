> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/kcftypedictionaryvaluecallbacks

# kCFTypeDictionaryValueCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Predefined [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFDictionary are all CFType-derived objects.

## Declaration

```swift
let kCFTypeDictionaryValueCallBacks: CFDictionaryValueCallBacks
```

<a id="Discussion"></a>

## Discussion

The retain callback is `CFRetain`, the release callback is `CFRelease`, the copy callback is `CFCopyDescription`, and the equal callback is `CFEqual`. Therefore, if you use a pointer to this constant when creating the dictionary, values are automatically retained when added to the collection, and released when removed from the collection.

## See Also

### Constants

- [kCFCopyStringDictionaryKeyCallBacks](kcfcopystringdictionarykeycallbacks.md): Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFString objects, which may be mutable and need to be copied in order to serve as constant keys for the values in the dictionary.
- [kCFTypeDictionaryKeyCallBacks](kcftypedictionarykeycallbacks.md): Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFType-derived objects.

# kCFTypeDictionaryValueCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Predefined [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFDictionary are all CFType-derived objects.

## Declaration

```objectivec
extern const CFDictionaryValueCallBacks kCFTypeDictionaryValueCallBacks;
```

<a id="Discussion"></a>

## Discussion

The retain callback is `CFRetain`, the release callback is `CFRelease`, the copy callback is `CFCopyDescription`, and the equal callback is `CFEqual`. Therefore, if you use a pointer to this constant when creating the dictionary, values are automatically retained when added to the collection, and released when removed from the collection.

## See Also

### Constants

- [kCFCopyStringDictionaryKeyCallBacks](kcfcopystringdictionarykeycallbacks.md): Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFString objects, which may be mutable and need to be copied in order to serve as constant keys for the values in the dictionary.
- [kCFTypeDictionaryKeyCallBacks](kcftypedictionarykeycallbacks.md): Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFType-derived objects.

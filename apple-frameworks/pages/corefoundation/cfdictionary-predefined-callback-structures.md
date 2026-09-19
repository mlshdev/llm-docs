> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfdictionary-predefined-callback-structures

# Predefined Callback Structures

**Interface languages:** Swift, Objective-C

**Framework:** Core Foundation  
**Kind:** API Collection

CFDictionary provides some predefined callbacks for your convenience.

## Topics

### Constants

- [kCFCopyStringDictionaryKeyCallBacks](kcfcopystringdictionarykeycallbacks.md): Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFString objects, which may be mutable and need to be copied in order to serve as constant keys for the values in the dictionary.
- [kCFTypeDictionaryKeyCallBacks](kcftypedictionarykeycallbacks.md): Predefined [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure containing a set of callbacks appropriate for use when the keys of a CFDictionary are all CFType-derived objects.
- [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md): Predefined [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFDictionary are all CFType-derived objects.

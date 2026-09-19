> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfset-predefined-callback-structures

# Predefined Callback Structures

**Interface languages:** Swift, Objective-C

**Framework:** Core Foundation  
**Kind:** API Collection

CFSet provides some predefined callbacks for your convenience.

## Topics

### Constants

- [kCFTypeSetCallBacks](kcftypesetcallbacks.md)
- [kCFCopyStringSetCallBacks](kcfcopystringsetcallbacks.md): Predefined [CFSetCallBacks](cfsetcallbacks.md) structure containing a set of callbacks appropriate for use when the values in a set are all CFString objects. The retain callback makes an immutable copy of strings added to the set.

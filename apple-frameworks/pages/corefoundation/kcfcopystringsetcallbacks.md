> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfcopystringsetcallbacks](https://developer.apple.com/documentation/corefoundation/kcfcopystringsetcallbacks)

# kCFCopyStringSetCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Predefined [CFSetCallBacks](cfsetcallbacks.md) structure containing a set of callbacks  appropriate for use when the values in a set are all CFString objects. The retain callback makes an immutable copy of strings added to the set.

## Declaration

```swift
let kCFCopyStringSetCallBacks: CFSetCallBacks
```

## See Also

### Constants

- [kCFTypeSetCallBacks](kcftypesetcallbacks.md)

# kCFCopyStringSetCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Predefined [CFSetCallBacks](cfsetcallbacks.md) structure containing a set of callbacks  appropriate for use when the values in a set are all CFString objects. The retain callback makes an immutable copy of strings added to the set.

## Declaration

```objectivec
extern const CFSetCallBacks kCFCopyStringSetCallBacks;
```

## See Also

### Constants

- [kCFTypeSetCallBacks](kcftypesetcallbacks.md)

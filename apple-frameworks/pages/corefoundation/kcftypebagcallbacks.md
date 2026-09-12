> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcftypebagcallbacks](https://developer.apple.com/documentation/corefoundation/kcftypebagcallbacks)

# kCFTypeBagCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
let kCFTypeBagCallBacks: CFBagCallBacks
```

<a id="Discussion"></a>

## Discussion

Predefined [CFBagCallBacks](cfbagcallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFBag are all CFType-derived objects. The retain callback is `CFRetain`, the release callback is `CFRelease`, the copy callback is `CFCopyDescription`, the equal callback is `CFEqual`, and the hash callback is `CFHash`. Therefore, if you use this constant when creating the collection, items are automatically retained when added to the collection, and released when removed from the collection.

## See Also

### Constants

- [kCFCopyStringBagCallBacks](kcfcopystringbagcallbacks.md): Predefined [CFBagCallBacks](cfbagcallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFBag are all CFString objects. The bag makes immutable copies of the strings placed into it.

# kCFTypeBagCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern const CFBagCallBacks kCFTypeBagCallBacks;
```

<a id="Discussion"></a>

## Discussion

Predefined [CFBagCallBacks](cfbagcallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFBag are all CFType-derived objects. The retain callback is `CFRetain`, the release callback is `CFRelease`, the copy callback is `CFCopyDescription`, the equal callback is `CFEqual`, and the hash callback is `CFHash`. Therefore, if you use this constant when creating the collection, items are automatically retained when added to the collection, and released when removed from the collection.

## See Also

### Constants

- [kCFCopyStringBagCallBacks](kcfcopystringbagcallbacks.md): Predefined [CFBagCallBacks](cfbagcallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFBag are all CFString objects. The bag makes immutable copies of the strings placed into it.

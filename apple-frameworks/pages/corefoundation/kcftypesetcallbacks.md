> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/kcftypesetcallbacks

# kCFTypeSetCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
let kCFTypeSetCallBacks: CFSetCallBacks
```

<a id="Discussion"></a>

## Discussion

Predefined [CFSetCallBacks](cfsetcallbacks.md) structure containing a set of callbacks  appropriate for use when the values in a CFSet are all CFType-derived objects. The retain callback is [CFRetain](cfretain.md), the release callback is [CFRelease](cfrelease.md), the copy callback is [CFCopyDescription(\_:)](cfcopydescription%28__%29.md), the equal callback is [CFEqual(\_:\_:)](cfequal%28____%29.md), and the hash callback is [CFHash(\_:)](cfhash%28__%29.md). Therefore, if you use this constant when creating the collection, items are automatically retained when added to the collection, and released when removed from the collection.

## See Also

### Constants

- [kCFCopyStringSetCallBacks](kcfcopystringsetcallbacks.md): Predefined [CFSetCallBacks](cfsetcallbacks.md) structure containing a set of callbacks appropriate for use when the values in a set are all CFString objects. The retain callback makes an immutable copy of strings added to the set.

# kCFTypeSetCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern const CFSetCallBacks kCFTypeSetCallBacks;
```

<a id="Discussion"></a>

## Discussion

Predefined [CFSetCallBacks](cfsetcallbacks.md) structure containing a set of callbacks  appropriate for use when the values in a CFSet are all CFType-derived objects. The retain callback is [CFRetain](cfretain.md), the release callback is [CFRelease](cfrelease.md), the copy callback is [CFCopyDescription](cfcopydescription%28__%29.md), the equal callback is [CFEqual](cfequal%28____%29.md), and the hash callback is [CFHash](cfhash%28__%29.md). Therefore, if you use this constant when creating the collection, items are automatically retained when added to the collection, and released when removed from the collection.

## See Also

### Constants

- [kCFCopyStringSetCallBacks](kcfcopystringsetcallbacks.md): Predefined [CFSetCallBacks](cfsetcallbacks.md) structure containing a set of callbacks appropriate for use when the values in a set are all CFString objects. The retain callback makes an immutable copy of strings added to the set.

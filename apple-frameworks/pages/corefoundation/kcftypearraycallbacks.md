> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/kcftypearraycallbacks

# kCFTypeArrayCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
let kCFTypeArrayCallBacks: CFArrayCallBacks
```

<a id="Discussion"></a>

## Discussion

Predefined [CFArrayCallBacks](cfarraycallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFArray are all CFType-derived objects. The retain callback is `CFRetain`, the release callback is `CFRelease`, the copy callback is `CFCopyDescription`, and the equal callback is `CFEqual`. Therefore, if you use this constant when creating the collection, items are automatically retained when added to the collection, and released when removed from the collection.

# kCFTypeArrayCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern const CFArrayCallBacks kCFTypeArrayCallBacks;
```

<a id="Discussion"></a>

## Discussion

Predefined [CFArrayCallBacks](cfarraycallbacks.md) structure containing a set of callbacks appropriate for use when the values in a CFArray are all CFType-derived objects. The retain callback is `CFRetain`, the release callback is `CFRelease`, the copy callback is `CFCopyDescription`, and the equal callback is `CFEqual`. Therefore, if you use this constant when creating the collection, items are automatically retained when added to the collection, and released when removed from the collection.

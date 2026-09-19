> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cflocalecopypreferredlanguages()

# CFLocaleCopyPreferredLanguages() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the array of canonicalized language IDs that the user prefers.

## Declaration

```swift
func CFLocaleCopyPreferredLanguages() -> CFArray!
```

<a id="return-value"></a>

## Return Value

The array of canonicalized `CFString` language IDs that the current user prefers. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

# CFLocaleCopyPreferredLanguages (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the array of canonicalized language IDs that the user prefers.

## Declaration

```objectivec
extern CFArrayRefCFLocaleCopyPreferredLanguages();
```

<a id="return-value"></a>

## Return Value

The array of canonicalized `CFString` language IDs that the current user prefers. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

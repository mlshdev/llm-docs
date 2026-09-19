> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cflocalecopyavailablelocaleidentifiers()

# CFLocaleCopyAvailableLocaleIdentifiers() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of CFString objects that represents all locales for which locale data is available.

## Declaration

```swift
func CFLocaleCopyAvailableLocaleIdentifiers() -> CFArray!
```

<a id="return-value"></a>

## Return Value

An array of CFString objects that represents all locales for which locale data is available. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

# CFLocaleCopyAvailableLocaleIdentifiers (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of CFString objects that represents all locales for which locale data is available.

## Declaration

```objectivec
extern CFArrayRefCFLocaleCopyAvailableLocaleIdentifiers();
```

<a id="return-value"></a>

## Return Value

An array of CFString objects that represents all locales for which locale data is available. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

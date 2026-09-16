> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/autoreleasingunsafemutablepointer/subscript(_:)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Access the `i`th element of the raw array pointed to by `self`.

## Declaration

```swift
subscript(i: Int) -> Pointee { get }
```

<a id="overview"></a>

## Overview

> **Precondition**

> `self != nil`.

## See Also

### Accessing a Pointer’s Memory

- [pointee](pointee.md): Retrieve or set the `Pointee` instance referenced by `self`.

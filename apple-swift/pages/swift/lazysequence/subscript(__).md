> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/lazysequence/subscript(_:)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at `position`.

## Declaration

```swift
subscript(position: LazySequence<Base>.Index) -> LazySequence<Base>.Element { get }
```

<a id="overview"></a>

## Overview

> **Precondition**

> `position` is a valid position in `self` and `position != endIndex`.

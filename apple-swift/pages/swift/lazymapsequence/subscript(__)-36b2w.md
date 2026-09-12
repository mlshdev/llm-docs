> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazymapsequence/subscript(_:)-36b2w](https://developer.apple.com/documentation/swift/lazymapsequence/subscript(_:)-36b2w)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at `position`.

## Declaration

```swift
subscript(position: Base.Index) -> Element { get }
```

<a id="overview"></a>

## Overview

> **Precondition**

> `position` is a valid position in `self` and `position != endIndex`.

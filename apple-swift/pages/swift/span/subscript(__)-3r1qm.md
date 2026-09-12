> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span/subscript(_:)-3r1qm](https://developer.apple.com/documentation/swift/span/subscript(_:)-3r1qm)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Accesses the element at the specified index in the `Span`.

## Declaration

```swift
subscript(position: Span<Element>.Index) -> Element { borrow }
```

## Parameters

- `position`: The offset of the element to access. `position` must be greater or equal to zero, and less than `count`.

<a id="overview"></a>

## Overview

> **Complexity**

> O(1)

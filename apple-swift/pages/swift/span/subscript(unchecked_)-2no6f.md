> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span/subscript(unchecked:)-2no6f](https://developer.apple.com/documentation/swift/span/subscript(unchecked:)-2no6f)

# subscript(unchecked:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Accesses the element at the specified index in the `Span`.

## Declaration

```swift
subscript(unchecked position: Span<Element>.Index) -> Element { get }
```

## Parameters

- `position`: The offset of the element to access. `position` must be greater or equal to zero, and less than `count`.

<a id="overview"></a>

## Overview

This subscript does not validate `position`. Using this subscript with an invalid `position` results in undefined behaviour.

> **Complexity**

> O(1)

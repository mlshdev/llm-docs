> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablespan/subscript(unchecked:)](https://developer.apple.com/documentation/swift/mutablespan/subscript(unchecked:))

# subscript(unchecked:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Accesses the element at the specified index in the `MutableSpan`.

## Declaration

```swift
subscript(unchecked position: MutableSpan<Element>.Index) -> Element { borrow mutate }
```

## Parameters

- `position`: The offset of the element to access. `position` must be greater or equal to zero, and less than `count`.

<a id="overview"></a>

## Overview

This subscript does not validate `position`; this is an unsafe operation.

> **Complexity**

> O(1)

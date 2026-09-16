> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/inlinearray/subscript(_:)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Accesses the element at the specified position.

## Declaration

```swift
subscript(i: InlineArray<count, Element>.Index) -> Element { get set }
```

## Parameters

- `i`: The position of the element to access. `i` must be a valid index of the array that is not equal to the `endIndex` property.

<a id="overview"></a>

## Overview

> **Complexity**

> O(1)

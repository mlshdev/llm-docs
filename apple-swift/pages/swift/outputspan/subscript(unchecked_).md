> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/outputspan/subscript(unchecked:)

# subscript(unchecked:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Accesses the element at the specified index.

## Declaration

```swift
subscript(unchecked index: OutputSpan<Element>.Index) -> Element { borrow mutate }
```

## Parameters

- `index`: A valid index into this span.

<a id="overview"></a>

## Overview

This subscript does not validate `index`; this is an unsafe operation.

> **Complexity**

> O(1)

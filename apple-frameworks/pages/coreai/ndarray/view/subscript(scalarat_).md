> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/ndarray/view/subscript(scalarat:)

# subscript(scalarAt:)

**Framework:** Core AI  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Access the element at a multi-dimensional `index`.

## Declaration

```swift
subscript<let rank : Int>(scalarAt index: InlineArray<rank, Int>) -> Element { get }
```

## Parameters

- `index`: The multi-dimensional index of the element to access. It must have the same count as rank of this view.

<a id="overview"></a>

## Overview

> **Note**

> `rank` must be equal to the `rank` of this view.

## See Also

### Accessing elements

- [contiguousElements](contiguouselements.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a `Span` over the backing memory of this view if the memory is in a contiguous layout, otherwise returns `nil`.

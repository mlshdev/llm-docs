> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtllogicaltophysicalcolorattachmentmap/subscript(_:)

# subscript(\_:)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Maps a physical color attachment index to a logical index.

## Declaration

```swift
subscript(logicalIndex: Int) -> Int { get set }
```

<a id="overview"></a>

## Overview

To set the physical index, which represents the render pass color attachment index `P`, for a logical index, which represents the pipeline state’s configuration for a color attachment `L`, assign: `myMapping[L] = P`. To retrieve a stored physical index use `let P = myMapping[L]`.

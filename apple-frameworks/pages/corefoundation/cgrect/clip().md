> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cgrect/clip()

# clip()

**Framework:** Core Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.9+ · Swift 4.0+

Modifies the current graphics context clipping path by intersecting it with this rect. This permanently modifies the graphics state, so the current state should be saved beforehand and restored afterwards.

## Declaration

```swift
func clip()
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> There must be a set current NSGraphicsContext.

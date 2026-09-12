> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgrect/clip()](https://developer.apple.com/documentation/corefoundation/cgrect/clip())

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

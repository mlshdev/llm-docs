> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/module/addposition

# module::addPosition

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Moves an element by adding an offset to its current position.

## Declaration

```swift
void module::addPosition(float3 offset)
```

## Parameters

- `offset`: The offset vector to add to the current position

<a id="discussion"></a>

## Discussion

Use this function to translate an element relative to its current location by applying a position offset.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/module__addPosition.svg)

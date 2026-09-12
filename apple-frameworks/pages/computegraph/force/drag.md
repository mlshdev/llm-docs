> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/force/drag](https://developer.apple.com/documentation/computegraph/force/drag)

# force::drag

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Applies linear drag to slow down the current element over time.

## Declaration

```swift
void force::drag(float linearDragFactor)
```

## Parameters

- `linearDragFactor`: The drag coefficient controlling how quickly the element slows down. Higher values result in faster deceleration. A value of 0 means no drag.

<a id="discussion"></a>

## Discussion

This function simulates air resistance or fluid drag by reducing the element’s velocity proportionally to its current speed. The drag is frame-rate independent, ensuring consistent behavior across different frame rates.

The drag force is calculated as: `velocity -= velocity * min(1.0, deltaTime * linearDragFactor)`

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/force__drag.svg)

> **Note**

> Reads and writes to element state `float3 velocity`

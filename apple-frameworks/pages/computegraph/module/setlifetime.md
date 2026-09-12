> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/module/setlifetime](https://developer.apple.com/documentation/computegraph/module/setlifetime)

# module::setLifetime

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the lifetime of an element in seconds.

## Declaration

```swift
void module::setLifetime(float lifetime)
```

## Parameters

- `lifetime`: The duration in seconds the element should remain active

<a id="discussion"></a>

## Discussion

Use this function to control how long an element will exist before being automatically removed from the system.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/module__setLifetime.svg)

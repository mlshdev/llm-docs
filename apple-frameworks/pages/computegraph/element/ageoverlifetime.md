> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/element/ageoverlifetime

# element::ageOverLifetime

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the normalized age of the element as a ratio of its lifetime.

## Declaration

```swift
float element::ageOverLifetime()
```

<a id="return-value"></a>

## Return Value

A normalized value representing age divided by lifetime

<a id="discussion"></a>

## Discussion

Use this function to get a value between 0.0 (just created) and 1.0 (end of life), which is ideal for interpolating properties over the element’s lifetime.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/element__ageOverLifetime.svg)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyaction/mode](https://developer.apple.com/documentation/realitykit/fromtobyaction/mode)

# mode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Determines the entities transform [from](from.md) and [to](to.md) are relative to.

## Declaration

```swift
var mode: FromToByAction<Transform>.TransformMode? { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> The expection to this mode is `by`. This property is relative to the starting value, Set this to `nil` if only `by` is specified.

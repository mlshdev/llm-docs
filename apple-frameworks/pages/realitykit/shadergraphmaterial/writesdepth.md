> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/writesdepth](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/writesdepth)

# writesDepth

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A boolean value that determines whether this material writes its depth into RealityKit’s depth buffer.

## Declaration

```swift
var writesDepth: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If true, meshes with this material will occlude objects behind them by writing their depth into RealityKit’s depth buffer.

If false, meshes with this material will not write their depth into RealityKit’s depth buffer, and may be overwritten by objects drawn behind them, depending on draw order.

The default value is true.

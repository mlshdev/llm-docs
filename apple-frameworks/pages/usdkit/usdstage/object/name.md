> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/object/name](https://developer.apple.com/documentation/usdkit/usdstage/object/name)

# name

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The name of this scene graph object.

## Declaration

```swift
var name: USDToken { get }
```

<a id="discussion"></a>

## Discussion

An object’s name is the last component of its [path](path.md). This property is equivalent to the `USDLayer.Path/name` property of that path.

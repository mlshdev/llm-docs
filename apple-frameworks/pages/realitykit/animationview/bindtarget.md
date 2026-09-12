> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationview/bindtarget](https://developer.apple.com/documentation/realitykit/animationview/bindtarget)

# bindTarget

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A textual name that identifies the animated property.

## Declaration

```swift
var bindTarget: BindTarget { get set }
```

<a id="discussion"></a>

## Discussion

The property name is a key path. For more information on key paths, see [Key-Path Expressions](https://developer.apple.com/documentation/swift/key-path-expressions).

## See Also

### Configuring the animation view

- [source](source.md): The original animation that this structure modifies.
- [name](name.md): A textual name for the animation.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.

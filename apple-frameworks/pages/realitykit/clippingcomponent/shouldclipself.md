> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clippingcomponent/shouldclipself](https://developer.apple.com/documentation/realitykit/clippingcomponent/shouldclipself)

# shouldClipSelf

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Controls whether the entity itself is clipped by this component’s bounds.

## Declaration

```swift
var shouldClipSelf: Bool
```

<a id="discussion"></a>

## Discussion

When `true`, the entity’s own geometry is clipped by the bounding volume. When `false`, only child entities are affected (if `shouldClipChildren` is `true`).

## See Also

### Configuring clipping behavior

- [shouldClipChildren](shouldclipchildren.md): Controls whether child entities are clipped by this component’s bounds.

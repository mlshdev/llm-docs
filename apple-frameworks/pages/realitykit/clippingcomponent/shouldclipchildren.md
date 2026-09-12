> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clippingcomponent/shouldclipchildren](https://developer.apple.com/documentation/realitykit/clippingcomponent/shouldclipchildren)

# shouldClipChildren

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Controls whether child entities are clipped by this component’s bounds.

## Declaration

```swift
var shouldClipChildren: Bool
```

<a id="discussion"></a>

## Discussion

When `true`, all descendant entities in the hierarchy will be clipped to this entity’s clipping bounds.

When `false`, only the entity with this component is affected (if `shouldClipSelf` is `true`).

## See Also

### Configuring clipping behavior

- [shouldClipSelf](shouldclipself.md): Controls whether the entity itself is clipped by this component’s bounds.

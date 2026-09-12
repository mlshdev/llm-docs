> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerstyle/init(shape:constrainedaxes:)](https://developer.apple.com/documentation/uikit/uipointerstyle/init(shape:constrainedaxes:))

# init(shape:constrainedAxes:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS

Morphs the pointer into the provided shape when hovering over the current region.

## Declaration

```swift
@MainActor @preconcurrency convenience init(shape: UIPointerShape, constrainedAxes: UIAxis = [])
```

## Parameters

- `shape`: The [UIPointerShape](../uipointershape-swift.enum.md) to use, defaults to `nil`.
- `constrainedAxes`: An array of [UIAxis](../uiaxis.md) directions in which to constrain the pointer. The default is no constraints.

## See Also

### Creating a pointer style

- [init(effect:shape:)](init%28effect_shape_%29.md): Applies the provided content effect and pointer shape to the current region.
- [hidden()](hidden%28%29.md): Hides the pointer when it moves over the current region.
- [system()](system%28%29.md): Morphs the pointer into a default system-style pointer.

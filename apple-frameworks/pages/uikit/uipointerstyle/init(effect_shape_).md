> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerstyle/init(effect:shape:)](https://developer.apple.com/documentation/uikit/uipointerstyle/init(effect:shape:))

# init(effect:shape:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS

Applies the provided content effect and pointer shape to the current region.

## Declaration

```swift
@MainActor @preconcurrency convenience init(effect: UIPointerEffect, shape: UIPointerShape? = nil)
```

## Parameters

- `effect`: The [UIPointerEffect](../uipointereffect-swift.enum.md) to apply to the region.
- `shape`: The [UIPointerShape](../uipointershape-swift.enum.md) to use, defaults to `nil`.

## See Also

### Creating a pointer style

- [init(shape:constrainedAxes:)](init%28shape_constrainedaxes_%29.md): Morphs the pointer into the provided shape when hovering over the current region.
- [hidden()](hidden%28%29.md): Hides the pointer when it moves over the current region.
- [system()](system%28%29.md): Morphs the pointer into a default system-style pointer.

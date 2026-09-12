> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointeraccessory/init(_:position:)](https://developer.apple.com/documentation/uikit/uipointeraccessory/init(_:position:))

# init(\_:position:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

Creates a pointer accessory with the specified shape and position.

## Declaration

```swift
@MainActor @preconcurrency convenience init(_ shape: UIPointerShape, position: UIPointerAccessory.Position)
```

## Parameters

- `shape`: One of the available [UIPointerShape](../uipointershape-swift.enum.md) shapes.
- `position`: One of the available [UIPointerAccessory.Position](position-swift.struct.md) positions.

## See Also

### Creating a pointer accessory

- [arrow(\_:)](arrow%28__%29.md): Creates a pointer accessory with an arrow shape at the specified position.

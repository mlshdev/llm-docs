> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbuffer/indirectcomputecommand(at:)](https://developer.apple.com/documentation/metal/mtlindirectcommandbuffer/indirectcomputecommand(at:))

# indirectComputeCommand(at:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS

Gets the compute command at the given index.

## Declaration

```swift
func indirectComputeCommand(at Index: Int) -> any MTLIndirectComputeCommand
```

## Parameters

- `Index`: The index of the command to retrieve.

<a id="discussion"></a>

## Discussion

Call this method only if the indirect command buffer contains compute commands.

## See Also

### Retrieving commands

- [indirectRenderCommandAt(\_:)](indirectrendercommandat%28__%29.md): Gets the render command at the given index.
- [indirectComputeCommandAt(\_:)](indirectcomputecommandat%28__%29.md): Gets the compute command at the given index.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbuffer/indirectrendercommandat(_:)](https://developer.apple.com/documentation/metal/mtlindirectcommandbuffer/indirectrendercommandat(_:))

# indirectRenderCommandAt(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Gets the render command at the given index.

## Declaration

```swift
func indirectRenderCommandAt(_ commandIndex: Int) -> any MTLIndirectRenderCommand
```

## Parameters

- `commandIndex`: The index of the command to retrieve.

<a id="discussion"></a>

## Discussion

Call this method only if the indirect command buffer contains rendering commands.

## See Also

### Retrieving commands

- [indirectComputeCommandAt(\_:)](indirectcomputecommandat%28__%29.md): Gets the compute command at the given index.
- [indirectComputeCommand(at:)](indirectcomputecommand%28at_%29.md): Deprecated. Gets the compute command at the given index.

# indirectRenderCommandAtIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Gets the render command at the given index.

## Declaration

```objectivec
- (id<MTLIndirectRenderCommand>) indirectRenderCommandAtIndex:(NSUInteger) commandIndex;
```

## Parameters

- `commandIndex`: The index of the command to retrieve.

<a id="discussion"></a>

## Discussion

Call this method only if the indirect command buffer contains rendering commands.

## See Also

### Retrieving commands

- [indirectComputeCommandAtIndex:](indirectcomputecommandat%28__%29.md): Gets the compute command at the given index.

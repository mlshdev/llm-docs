> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbuffer/indirectcomputecommandat(_:)](https://developer.apple.com/documentation/metal/mtlindirectcommandbuffer/indirectcomputecommandat(_:))

# indirectComputeCommandAt(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Gets the compute command at the given index.

## Declaration

```swift
func indirectComputeCommandAt(_ commandIndex: Int) -> any MTLIndirectComputeCommand
```

## Parameters

- `commandIndex`: The index of the command to retrieve.

<a id="discussion"></a>

## Discussion

Call this method only if the indirect command buffer contains compute commands.

## See Also

### Retrieving commands

- [indirectRenderCommandAt(\_:)](indirectrendercommandat%28__%29.md): Gets the render command at the given index.
- [indirectComputeCommand(at:)](indirectcomputecommand%28at_%29.md): Deprecated. Gets the compute command at the given index.

# indirectComputeCommandAtIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Gets the compute command at the given index.

## Declaration

```objectivec
- (id<MTLIndirectComputeCommand>) indirectComputeCommandAtIndex:(NSUInteger) commandIndex;
```

## Parameters

- `commandIndex`: The index of the command to retrieve.

<a id="discussion"></a>

## Discussion

Call this method only if the indirect command buffer contains compute commands.

## See Also

### Retrieving commands

- [indirectRenderCommandAtIndex:](indirectrendercommandat%28__%29.md): Gets the render command at the given index.

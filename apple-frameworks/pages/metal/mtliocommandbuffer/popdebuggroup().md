> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/popdebuggroup()](https://developer.apple.com/documentation/metal/mtliocommandbuffer/popdebuggroup())

# popDebugGroup() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Restores the previous name for this input/output command encoder by removing the top item of the debug name stack.

## Declaration

```swift
func popDebugGroup()
```

## See Also

### Debugging a command buffer

- [label](label.md): An optional name for the input/output command buffer.
- [pushDebugGroup(\_:)](pushdebuggroup%28__%29.md): Sets the current name for this input/output command encoder by adding it to the top of the debug name stack.

# popDebugGroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Restores the previous name for this input/output command encoder by removing the top item of the debug name stack.

## Declaration

```objectivec
- (void) popDebugGroup;
```

## See Also

### Debugging a command buffer

- [label](label.md): An optional name for the input/output command buffer.
- [pushDebugGroup:](pushdebuggroup%28__%29.md): Sets the current name for this input/output command encoder by adding it to the top of the debug name stack.

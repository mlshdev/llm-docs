> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/popdebuggroup()](https://developer.apple.com/documentation/metal/mtlcommandbuffer/popdebuggroup())

# popDebugGroup() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Marks the end of a debug group and, if applicable, restores the previous group from a stack.

## Declaration

```swift
func popDebugGroup()
```

<a id="discussion"></a>

## Discussion

Use [pushDebugGroup(\_:)](pushdebuggroup%28__%29.md) to group commands within the command buffer, which adds a new group to a stack, effectively nesting a group within any previous group. Call [popDebugGroup()](popdebuggroup%28%29.md) to mark the end of a group of commands within the command buffer, and restore the previous group, if applicable. You can inspect the group and the commands it contains when viewing the contents of a frame capture with Metal Debugger.

Labels can help you profile and debug your app at runtime with Metal Debugger and other tools. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands) for more information about using labels and other debugging techniques.

## See Also

### Grouping commands within a GPU frame capture

- [pushDebugGroup(\_:)](pushdebuggroup%28__%29.md): Marks the beginning of a debug group and gives it an identifying label, which temporarily replaces the previous group, if applicable.

# popDebugGroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Marks the end of a debug group and, if applicable, restores the previous group from a stack.

## Declaration

```objectivec
- (void) popDebugGroup;
```

<a id="discussion"></a>

## Discussion

Use [pushDebugGroup:](pushdebuggroup%28__%29.md) to group commands within the command buffer, which adds a new group to a stack, effectively nesting a group within any previous group. Call [popDebugGroup](popdebuggroup%28%29.md) to mark the end of a group of commands within the command buffer, and restore the previous group, if applicable. You can inspect the group and the commands it contains when viewing the contents of a frame capture with Metal Debugger.

Labels can help you profile and debug your app at runtime with Metal Debugger and other tools. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands) for more information about using labels and other debugging techniques.

## See Also

### Grouping commands within a GPU frame capture

- [pushDebugGroup:](pushdebuggroup%28__%29.md): Marks the beginning of a debug group and gives it an identifying label, which temporarily replaces the previous group, if applicable.

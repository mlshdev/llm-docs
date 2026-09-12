> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/label](https://developer.apple.com/documentation/metal/mtliocommandbuffer/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An optional name for the input/output command buffer.

## Declaration

```swift
var label: String? { get set }
```

## See Also

### Debugging a command buffer

- [pushDebugGroup(\_:)](pushdebuggroup%28__%29.md): Sets the current name for this input/output command encoder by adding it to the top of the debug name stack.
- [popDebugGroup()](popdebuggroup%28%29.md): Restores the previous name for this input/output command encoder by removing the top item of the debug name stack.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An optional name for the input/output command buffer.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * label;
```

## See Also

### Debugging a command buffer

- [pushDebugGroup:](pushdebuggroup%28__%29.md): Sets the current name for this input/output command encoder by adding it to the top of the debug name stack.
- [popDebugGroup](popdebuggroup%28%29.md): Restores the previous name for this input/output command encoder by removing the top item of the debug name stack.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/pushdebuggroup(_:)](https://developer.apple.com/documentation/metal/mtliocommandbuffer/pushdebuggroup(_:))

# pushDebugGroup(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the current name for this input/output command encoder by adding it to the top of the debug name stack.

## Declaration

```swift
func pushDebugGroup(_ string: String)
```

## Parameters

- `string`: A new debugging name.

## See Also

### Debugging a command buffer

- [label](label.md): An optional name for the input/output command buffer.
- [popDebugGroup()](popdebuggroup%28%29.md): Restores the previous name for this input/output command encoder by removing the top item of the debug name stack.

# pushDebugGroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the current name for this input/output command encoder by adding it to the top of the debug name stack.

## Declaration

```objectivec
- (void) pushDebugGroup:(NSString *) string;
```

## Parameters

- `string`: A new debugging name.

## See Also

### Debugging a command buffer

- [label](label.md): An optional name for the input/output command buffer.
- [popDebugGroup](popdebuggroup%28%29.md): Restores the previous name for this input/output command encoder by removing the top item of the debug name stack.

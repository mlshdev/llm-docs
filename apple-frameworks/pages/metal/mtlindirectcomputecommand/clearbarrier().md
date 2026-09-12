> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand/clearbarrier()](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand/clearbarrier())

# clearBarrier() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Removes any barrier set on the command.

## Declaration

```swift
func clearBarrier()
```

<a id="discussion"></a>

## Discussion

You need to set or clear barriers (as needed) before executing any of the commands in the indirect command buffer.

## See Also

### Synchronizing command execution

- [setBarrier()](setbarrier%28%29.md): Adds a barrier to ensure that commands executed prior to this command are complete before this command executes.

# clearBarrier (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Removes any barrier set on the command.

## Declaration

```objectivec
- (void) clearBarrier;
```

<a id="discussion"></a>

## Discussion

You need to set or clear barriers (as needed) before executing any of the commands in the indirect command buffer.

## See Also

### Synchronizing command execution

- [setBarrier](setbarrier%28%29.md): Adds a barrier to ensure that commands executed prior to this command are complete before this command executes.

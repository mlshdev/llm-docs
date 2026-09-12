> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand/setbarrier()](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand/setbarrier())

# setBarrier() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Adds a barrier to ensure that commands executed prior to this command are complete before this command executes.

## Declaration

```swift
func setBarrier()
```

<a id="discussion"></a>

## Discussion

Set or clear barriers (as needed) before encoding the command.

## See Also

### Synchronizing command execution

- [clearBarrier()](clearbarrier%28%29.md): Removes any barrier set on the command.

# setBarrier (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Adds a barrier to ensure that commands executed prior to this command are complete before this command executes.

## Declaration

```objectivec
- (void) setBarrier;
```

<a id="discussion"></a>

## Discussion

Set or clear barriers (as needed) before encoding the command.

## See Also

### Synchronizing command execution

- [clearBarrier](clearbarrier%28%29.md): Removes any barrier set on the command.

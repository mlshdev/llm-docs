> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/restoremachinestatefrom(url:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/restoremachinestatefrom(url:completionhandler:))

# restoreMachineStateFrom(url:completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Restores a VM from a previously saved state.

## Declaration

```swift
func restoreMachineStateFrom(url saveFileURL: URL, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func restoreMachineStateFrom(url saveFileURL: URL) async throws
```

## Parameters

- `saveFileURL`: An [NSURL](https://developer.apple.com/documentation/foundation/nsurl) that indicates the location where the framework reads the saved state of the VM.
- `completionHandler`: A block the framework calls after the VM has been successfully restored or upon an error.

<a id="Discussion"></a>

## Discussion

Use this method to restore a stopped VM to a state previously saved to file through [saveMachineStateTo(url:completionHandler:)](savemachinestateto%28url_completionhandler_%29.md).

The method fails if any of the following conditions are true:

- The Virtualization framework can’t open or read the file.
- The file contents are incompatible with the current configuration.
- The VM you’re trying to restore isn’t in the [VZVirtualMachine.State.stopped](state-swift.enum/stopped.md) state.

If this method fails, the framework returns an error, and the VM state doesn’t change.

If this method is successful, the framework restores the VM and places it in the paused state.

## See Also

### Saving and restoring the VM state

- [saveMachineStateTo(url:completionHandler:)](savemachinestateto%28url_completionhandler_%29.md): Saves the state of a VM.

# restoreMachineStateFromURL:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Restores a VM from a previously saved state.

## Declaration

```objectivec
- (void) restoreMachineStateFromURL:(NSURL *) saveFileURL completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `saveFileURL`: An [NSURL](https://developer.apple.com/documentation/foundation/nsurl) that indicates the location where the framework reads the saved state of the VM.
- `completionHandler`: A block the framework calls after the VM has been successfully restored or upon an error.

<a id="Discussion"></a>

## Discussion

Use this method to restore a stopped VM to a state previously saved to file through [saveMachineStateToURL:completionHandler:](savemachinestateto%28url_completionhandler_%29.md).

The method fails if any of the following conditions are true:

- The Virtualization framework can’t open or read the file.
- The file contents are incompatible with the current configuration.
- The VM you’re trying to restore isn’t in the [VZVirtualMachineStateStopped](state-swift.enum/stopped.md) state.

If this method fails, the framework returns an error, and the VM state doesn’t change.

If this method is successful, the framework restores the VM and places it in the paused state.

## See Also

### Saving and restoring the VM state

- [saveMachineStateToURL:completionHandler:](savemachinestateto%28url_completionhandler_%29.md): Saves the state of a VM.

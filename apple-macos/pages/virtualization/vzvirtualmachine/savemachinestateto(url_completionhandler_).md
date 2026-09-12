> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/savemachinestateto(url:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/savemachinestateto(url:completionhandler:))

# saveMachineStateTo(url:completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Saves the state of a VM.

## Declaration

```swift
func saveMachineStateTo(url saveFileURL: URL, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func saveMachineStateTo(url saveFileURL: URL) async throws
```

## Parameters

- `saveFileURL`: An [NSURL](https://developer.apple.com/documentation/foundation/nsurl) that indicates the location where the framework writes the saved state of the VM.
- `completionHandler`: A block the framework calls after successfully saving the VM or upon returning an error.

  The error parameter passed to the block is `nil` if the save was successful.

<a id="Discussion"></a>

## Discussion

Use this method to save a paused VM to a file. You can use the contents of this file later to restore the state of the paused VM.

This call fails if the VM isn’t in a paused state or if the Virtualization framework can’t save the VM. If this method fails, the framework returns an error, and the VM state remains unchanged.

If this method is successful, the framework writes the file, and the VM state remains unchanged.

## See Also

### Saving and restoring the VM state

- [restoreMachineStateFrom(url:completionHandler:)](restoremachinestatefrom%28url_completionhandler_%29.md): Restores a VM from a previously saved state.

# saveMachineStateToURL:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Saves the state of a VM.

## Declaration

```objectivec
- (void) saveMachineStateToURL:(NSURL *) saveFileURL completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `saveFileURL`: An [NSURL](https://developer.apple.com/documentation/foundation/nsurl) that indicates the location where the framework writes the saved state of the VM.
- `completionHandler`: A block the framework calls after successfully saving the VM or upon returning an error.

  The error parameter passed to the block is `nil` if the save was successful.

<a id="Discussion"></a>

## Discussion

Use this method to save a paused VM to a file. You can use the contents of this file later to restore the state of the paused VM.

This call fails if the VM isn’t in a paused state or if the Virtualization framework can’t save the VM. If this method fails, the framework returns an error, and the VM state remains unchanged.

If this method is successful, the framework writes the file, and the VM state remains unchanged.

## See Also

### Saving and restoring the VM state

- [restoreMachineStateFromURL:completionHandler:](restoremachinestatefrom%28url_completionhandler_%29.md): Restores a VM from a previously saved state.

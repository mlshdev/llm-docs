> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/run()](https://developer.apple.com/documentation/appkit/nsprintoperation/run())

# run() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the print operation on the current thread.

## Declaration

```swift
func run() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The operation runs to completion in the current thread, blocking the application. A separate thread is not spawned, even if [canSpawnSeparateThread](canspawnseparatethread.md) is [true](https://developer.apple.com/documentation/swift/true). Use [runModal(for:delegate:didRun:contextInfo:)](runmodal%28for_delegate_didrun_contextinfo_%29.md) to use document-modal sheets and to allow a separate thread to perform the operation.

## See Also

### Running the Print Operation

- [runModal(for:delegate:didRun:contextInfo:)](runmodal%28for_delegate_didrun_contextinfo_%29.md): Runs the print operation, calling your custom delegate method upon completion.
- [cleanUp()](cleanup%28%29.md): Called at the end of a print operation to remove the print operation as the current operation.
- [deliverResult()](deliverresult%28%29.md): Delivers the results of the print operation to the intended destination.

# runOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the print operation on the current thread.

## Declaration

```objectivec
- (BOOL) runOperation;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The operation runs to completion in the current thread, blocking the application. A separate thread is not spawned, even if [canSpawnSeparateThread](canspawnseparatethread.md) is [true](https://developer.apple.com/documentation/swift/true). Use [runOperationModalForWindow:delegate:didRunSelector:contextInfo:](runmodal%28for_delegate_didrun_contextinfo_%29.md) to use document-modal sheets and to allow a separate thread to perform the operation.

## See Also

### Running the Print Operation

- [runOperationModalForWindow:delegate:didRunSelector:contextInfo:](runmodal%28for_delegate_didrun_contextinfo_%29.md): Runs the print operation, calling your custom delegate method upon completion.
- [cleanUpOperation](cleanup%28%29.md): Called at the end of a print operation to remove the print operation as the current operation.
- [deliverResult](deliverresult%28%29.md): Delivers the results of the print operation to the intended destination.

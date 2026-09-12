> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/cleanup()](https://developer.apple.com/documentation/appkit/nsprintoperation/cleanup())

# cleanUp() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called at the end of a print operation to remove the print operation as the current operation.

## Declaration

```swift
func cleanUp()
```

<a id="Discussion"></a>

## Discussion

You typically do not invoke this method directly.

## See Also

### Running the Print Operation

- [run()](run%28%29.md): Runs the print operation on the current thread.
- [runModal(for:delegate:didRun:contextInfo:)](runmodal%28for_delegate_didrun_contextinfo_%29.md): Runs the print operation, calling your custom delegate method upon completion.
- [deliverResult()](deliverresult%28%29.md): Delivers the results of the print operation to the intended destination.

# cleanUpOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called at the end of a print operation to remove the print operation as the current operation.

## Declaration

```objectivec
- (void) cleanUpOperation;
```

<a id="Discussion"></a>

## Discussion

You typically do not invoke this method directly.

## See Also

### Running the Print Operation

- [runOperation](run%28%29.md): Runs the print operation on the current thread.
- [runOperationModalForWindow:delegate:didRunSelector:contextInfo:](runmodal%28for_delegate_didrun_contextinfo_%29.md): Runs the print operation, calling your custom delegate method upon completion.
- [deliverResult](deliverresult%28%29.md): Delivers the results of the print operation to the intended destination.

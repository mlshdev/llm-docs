> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/deliverresult()](https://developer.apple.com/documentation/appkit/nsprintoperation/deliverresult())

# deliverResult() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Delivers the results of the print operation to the intended destination.

## Declaration

```swift
func deliverResult() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the results were successfully delivered; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may be called to deliver the results to the printer spool or preview application.  Do not invoke this method directly—it is invoked automatically when the print operation is done.

## See Also

### Running the Print Operation

- [run()](run%28%29.md): Runs the print operation on the current thread.
- [runModal(for:delegate:didRun:contextInfo:)](runmodal%28for_delegate_didrun_contextinfo_%29.md): Runs the print operation, calling your custom delegate method upon completion.
- [cleanUp()](cleanup%28%29.md): Called at the end of a print operation to remove the print operation as the current operation.

# deliverResult (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Delivers the results of the print operation to the intended destination.

## Declaration

```objectivec
- (BOOL) deliverResult;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the results were successfully delivered; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may be called to deliver the results to the printer spool or preview application.  Do not invoke this method directly—it is invoked automatically when the print operation is done.

## See Also

### Running the Print Operation

- [runOperation](run%28%29.md): Runs the print operation on the current thread.
- [runOperationModalForWindow:delegate:didRunSelector:contextInfo:](runmodal%28for_delegate_didrun_contextinfo_%29.md): Runs the print operation, calling your custom delegate method upon completion.
- [cleanUpOperation](cleanup%28%29.md): Called at the end of a print operation to remove the print operation as the current operation.

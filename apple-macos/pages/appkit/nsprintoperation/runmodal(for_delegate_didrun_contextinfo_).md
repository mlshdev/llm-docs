> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/runmodal(for:delegate:didrun:contextinfo:)](https://developer.apple.com/documentation/appkit/nsprintoperation/runmodal(for:delegate:didrun:contextinfo:))

# runModal(for:delegate:didRun:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the print operation, calling your custom delegate method upon completion.

## Declaration

```swift
func runModal(for docWindow: NSWindow, delegate: Any?, didRun didRunSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `docWindow`: The document window to receive a print progress sheet.
- `delegate`: The printing delegate object. Messages are sent to this object.
- `didRunSelector`: The delegate method called after the completion of the print operation.
- `contextInfo`: A pointer to any data you want passed to the method in the  `didRunSelector` parameter.

<a id="Discussion"></a>

## Discussion

The method specified by the  `didRunSelector` parameter must have the following signature:

```objc
- (void)printOperationDidRun:(NSPrintOperation *)printOperation  success:(BOOL)success  contextInfo:(void *)contextInfo
```

The value of `success` is [true](https://developer.apple.com/documentation/swift/true) if the print operation ran to completion without cancellation or error, and [false](https://developer.apple.com/documentation/swift/false) otherwise.

If you send [canSpawnSeparateThread](canspawnseparatethread.md) to an `NSPrintOperation` object with an argument of [true](https://developer.apple.com/documentation/swift/true), then the delegate specified in a subsequent invocation of [runModal(for:delegate:didRun:contextInfo:)](runmodal%28for_delegate_didrun_contextinfo_%29.md) may be messaged in that spawned, non-main thread.

## See Also

### Running the Print Operation

- [run()](run%28%29.md): Runs the print operation on the current thread.
- [cleanUp()](cleanup%28%29.md): Called at the end of a print operation to remove the print operation as the current operation.
- [deliverResult()](deliverresult%28%29.md): Delivers the results of the print operation to the intended destination.

# runOperationModalForWindow:delegate:didRunSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the print operation, calling your custom delegate method upon completion.

## Declaration

```objectivec
- (void) runOperationModalForWindow:(NSWindow *) docWindow delegate:(id) delegate didRunSelector:(SEL) didRunSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `docWindow`: The document window to receive a print progress sheet.
- `delegate`: The printing delegate object. Messages are sent to this object.
- `didRunSelector`: The delegate method called after the completion of the print operation.
- `contextInfo`: A pointer to any data you want passed to the method in the  `didRunSelector` parameter.

<a id="Discussion"></a>

## Discussion

The method specified by the  `didRunSelector` parameter must have the following signature:

```objc
- (void)printOperationDidRun:(NSPrintOperation *)printOperation  success:(BOOL)success  contextInfo:(void *)contextInfo
```

The value of `success` is [true](https://developer.apple.com/documentation/swift/true) if the print operation ran to completion without cancellation or error, and [false](https://developer.apple.com/documentation/swift/false) otherwise.

If you send [canSpawnSeparateThread](canspawnseparatethread.md) to an `NSPrintOperation` object with an argument of [true](https://developer.apple.com/documentation/swift/true), then the delegate specified in a subsequent invocation of [runOperationModalForWindow:delegate:didRunSelector:contextInfo:](runmodal%28for_delegate_didrun_contextinfo_%29.md) may be messaged in that spawned, non-main thread.

## See Also

### Running the Print Operation

- [runOperation](run%28%29.md): Runs the print operation on the current thread.
- [cleanUpOperation](cleanup%28%29.md): Called at the end of a print operation to remove the print operation as the current operation.
- [deliverResult](deliverresult%28%29.md): Delivers the results of the print operation to the intended destination.

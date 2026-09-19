> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/setenablewithcompletion

# SetEnableWithCompletion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Controls the enable state of the interrupt source.

## Declaration

```objectivec
virtual kern_return_t SetEnableWithCompletion(bool enable, IODispatchSourceCancelHandler handler);
```

## Parameters

- `enable`: A Boolean value that indicates whether to enable the dispatch source. Specify `true` to enable the source or `false` to disable it.
- `handler`: An optional block to execute after this method successfully disables the dispatch source.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Starting and Stopping the Dispatch Source

- [Cancel](cancel.md): Cancels all callbacks from the dispatch source.

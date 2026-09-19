> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchsource/setenablewithcompletion

# SetEnableWithCompletion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Enables or disables the dispatch source.

## Declaration

```objectivec
virtual kern_return_t SetEnableWithCompletion(bool enable, IODispatchSourceCancelHandler handler);
```

## Parameters

- `enable`: A Boolean value that indicates whether to enable or disable the dispatch source. Specify `true` to enable the timer or `false` to disable it.
- `handler`: An optional handler block to execute after disabling the dispatch source. The dispatch source calls your handler after any in-flight callbacks finish.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

Subclasses must provide an implementation of this method.

## See Also

### Enabling and Disabling the Source

- [SetEnable](setenable.md): Enables or disables the delivery of events to your code.

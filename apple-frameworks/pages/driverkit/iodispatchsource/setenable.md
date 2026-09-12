> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchsource/setenable](https://developer.apple.com/documentation/driverkit/iodispatchsource/setenable)

# SetEnable

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Enables or disables the delivery of events to your code.

## Declaration

```objectivec
virtual kern_return_t SetEnable(bool enable);
```

## Parameters

- `enable`: A Boolean value that indicates whether to enable or disable the dispatch source. Specify `true` to enable it or `false` to disable it.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Enabling and Disabling the Source

- [SetEnableWithCompletion](setenablewithcompletion.md): Enables or disables the dispatch source.

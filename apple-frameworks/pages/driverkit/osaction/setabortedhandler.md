> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osaction/setabortedhandler](https://developer.apple.com/documentation/driverkit/osaction/setabortedhandler)

# SetAbortedHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Install a handler for the system to call when no other processes reference the action object.

## Declaration

```objectivec
kern_return_t SetAbortedHandler(OSActionAbortedHandler handler);
```

## Parameters

- `handler`: A handler block for the system to call. Specify `NULL` to remove the handler block from your action object.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

The system calls your handler when no other objects reference the action object. If you want to keep the action object, use your handler to retain it. If you don’t retain the object, the system releases it shortly after your handler returns.

## See Also

### Configuring the Action

- [free](free.md): Performs any final cleanup for the action object.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osaction/3438208-setabortedhandler](https://developer.apple.com/documentation/kernel/osaction/3438208-setabortedhandler)

# SetAbortedHandler

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Install a handler for the system to call when no other processes reference the action object.

## Declaration

```objectivec
kern_return_t SetAbortedHandler(OSActionAbortedHandler handler);
```

## Parameters

- `handler`: A handler block for the system to call. Specify `NULL` to remove the handler block from your action object.

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. See [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

<a id="discussion"></a>

## Discussion

The system calls your handler when no other objects reference the action object. If you want to keep the action object, use your handler to retain it. If you don't retain the object, the system releases it shortly after your handler returns.

## See Also

### Configuring the Action

- [Create](3438206-create.md): Creates a new action object and configures it with your custom target object and callback method.
- [free](3438209-free.md): Performs any final cleanup for the action object.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidinterface/close

# Close

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Closes the interface and stops the delivery of input reports.

## Declaration

```objectivec
virtual kern_return_t Close(IOService *forClient, IOOptionBits options);
```

## Parameters

- `forClient`: The client that closed the interface.
- `options`: Options to use when closing the session. Specify `0` for no options.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Managing the Session

- [Open](open.md): Opens a session to the device and begins the delivery of input reports.

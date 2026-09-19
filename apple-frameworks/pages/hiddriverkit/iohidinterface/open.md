> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidinterface/open

# Open

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Opens a session to the device and begins the delivery of input reports.

## Declaration

```objectivec
virtual kern_return_t Open(IOService *forClient, IOOptionBits options, OSAction *action);
```

## Parameters

- `forClient`: The client that opened the interface.
- `options`: Options to use when opening the session. Specify `0` for no options.
- `action`: The `OSAction` object that handles the asynchronous report callback. The action’s callback must conform to the [ReportAvailable](reportavailable.md) method.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Managing the Session

- [Close](close.md): Closes the interface and stops the delivery of input reports.

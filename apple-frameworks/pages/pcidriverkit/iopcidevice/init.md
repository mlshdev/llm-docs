> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/iopcidevice/init](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/init)

# init

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

Initializes the device.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if initialization was successful, or [false](https://developer.apple.com/documentation/swift/false) if it was unsuccessful.

## See Also

### Running the Service

- [Open](open.md): Opens a session to the PCI device.
- [Close](close.md): Closes the session to the PCI device.
- [free](free.md): Performs any final cleanup for the object.

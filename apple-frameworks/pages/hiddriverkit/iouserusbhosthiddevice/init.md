> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/init

# init

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Handles the basic initialization of the event service.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`true` if initialization was successful, or `false` if an error occurred.

## See Also

### Running the Service

- [Start](start.md): Starts the current device service and associates it with the specified provider object.
- [handleStart](handlestart.md): Performs any custom initialization associated with starting the device service.
- [Stop](stop.md): Stops the device service associated with the specified provider.
- [free](free.md): Performs any final cleanup for the service.

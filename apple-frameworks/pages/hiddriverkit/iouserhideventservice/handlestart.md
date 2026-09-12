> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventservice/handlestart](https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/handlestart)

# handleStart

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Performs additional initialization during the startup of the event service.

## Declaration

```objectivec
virtual bool handleStart(IOService *provider);
```

## Parameters

- `provider`: The `IOService` provider for this object.

<a id="return-value"></a>

## Return Value

`true` if initialization was successful, or `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

The default implemention of this method does nothing.

## See Also

### Running the Service

- [init](init.md): Handles the basic initialization of the event service.
- [Start](start.md): Starts the current event service and associates it with the specified provider object.
- [Stop](stop.md): Stops the event service associated with the specified provider.
- [free](free.md): Performs any final cleanup for the service.

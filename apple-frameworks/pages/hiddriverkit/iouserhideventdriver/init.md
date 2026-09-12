> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/init](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/init)

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

### Running the Driver

- [Start](start.md): Starts the current event driver and associates it with the specified provider object.
- [free](free.md): Performs any final cleanup for the service.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/free](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/free)

# free

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Performs any final cleanup for the service.

## Declaration

```objectivec
virtual void free();
```

<a id="Discussion"></a>

## Discussion

Use this method to perform any final cleanup of your event driver, such as deallocating memory you allocated. The system calls this method at some point after it calls your service’s [Stop](../iouserhideventservice/stop.md) method.

Always call `super` at the end of your custom implementation.

## See Also

### Running the Driver

- [init](init.md): Handles the basic initialization of the event service.
- [Start](start.md): Starts the current event driver and associates it with the specified provider object.

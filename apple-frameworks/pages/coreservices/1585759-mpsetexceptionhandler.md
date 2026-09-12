> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585759-mpsetexceptionhandler](https://developer.apple.com/documentation/coreservices/1585759-mpsetexceptionhandler)

# MPSetExceptionHandler

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sets an exception handler for a task.

## Declaration

```objectivec
OSStatus MPSetExceptionHandler(MPTaskID task, MPQueueID exceptionQ);
```

## Parameters

- `task`: The task to associate with the exception handler.
- `exceptionQ`: The message queue to which an exception message will be sent.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

When an exception handler is set and an exception occurs, the task is suspended and a message is sent to the message queue specified by `exceptionQ`. The message contains the following information:

-  The first pointer-sized value contains the ID of the task in which the exception occurred. 
-  The second pointer-sized value contains the type of exception that occurred. See the header file `MachineExceptions.h` for a listing of exception types.  
-  The last pointer-sized value is set to `NULL` (reserved for future use).

## See Also

### Exception Handling Functions

- [MPDisposeTaskException](1585607-mpdisposetaskexception.md): Deprecated. Removes a task exception.
- [MPExtractTaskState](1585718-mpextracttaskstate.md): Deprecated. Extracts state information from a suspended task.
- [MPSetTaskState](1585601-mpsettaskstate.md): Deprecated. Sets state information for a suspended task.
- [MPThrowException](1585743-mpthrowexception.md): Deprecated. Throws an exception to a specified task.

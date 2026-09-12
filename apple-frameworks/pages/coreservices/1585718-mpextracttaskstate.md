> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585718-mpextracttaskstate](https://developer.apple.com/documentation/coreservices/1585718-mpextracttaskstate)

# MPExtractTaskState

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Extracts state information from a suspended task.

## Declaration

```objectivec
OSStatus MPExtractTaskState(MPTaskID task, MPTaskStateKind kind, void *info);
```

## Parameters

- `task`: The task whose state information you want to obtain.
- `kind`: The kind of state information you want to obtain. See [Task State Constants](1585773-task_state_constants.md) for a listing of possible values.
- `info`: A pointer to a data structure to hold the state information. On return, the data structure holds the desired state information. The format of the data structure varies depending on the state information you want to retrieve. See the header file `MachineExceptions.h` for the formats of the various state information structures.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965). If you attempt to extract state information for a running task, this function returns `kMPInsufficientResourcesErr`.

<a id="discussion"></a>

## Discussion

You can use this function to obtain register contents or exception information about a particular task. 

Also see the function  [MPSetTaskState](1585601-mpsettaskstate.md).

## See Also

### Exception Handling Functions

- [MPDisposeTaskException](1585607-mpdisposetaskexception.md): Deprecated. Removes a task exception.
- [MPSetExceptionHandler](1585759-mpsetexceptionhandler.md): Deprecated. Sets an exception handler for a task.
- [MPSetTaskState](1585601-mpsettaskstate.md): Deprecated. Sets state information for a suspended task.
- [MPThrowException](1585743-mpthrowexception.md): Deprecated. Throws an exception to a specified task.

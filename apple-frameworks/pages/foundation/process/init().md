> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/init()](https://developer.apple.com/documentation/foundation/process/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an initialized process object with the environment of the current process.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized process object with the environment of the current process.

<a id="Discussion"></a>

## Discussion

If you need to modify the environment of a process, use alloc and init, and then set up the environment before launching the new process. Otherwise, just use the class method [run(\_:arguments:terminationHandler:)](run%28__arguments_terminationhandler_%29.md) to create and run the process.

## See Also

### Creating and initializing a process

- [run(\_:arguments:terminationHandler:)](run%28__arguments_terminationhandler_%29.md): Creates and runs a task with a specified executable and arguments.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an initialized process object with the environment of the current process.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized process object with the environment of the current process.

<a id="Discussion"></a>

## Discussion

If you need to modify the environment of a process, use alloc and init, and then set up the environment before launching the new process. Otherwise, just use the class method [launchedTaskWithExecutableURL:arguments:error:terminationHandler:](run%28__arguments_terminationhandler_%29.md) to create and run the process.

## See Also

### Creating and initializing a process

- [launchedTaskWithExecutableURL:arguments:error:terminationHandler:](run%28__arguments_terminationhandler_%29.md): Creates and runs a task with a specified executable and arguments.

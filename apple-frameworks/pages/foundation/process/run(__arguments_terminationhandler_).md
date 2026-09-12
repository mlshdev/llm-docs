> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/run(_:arguments:terminationhandler:)](https://developer.apple.com/documentation/foundation/process/run(_:arguments:terminationhandler:))

# run(\_:arguments:terminationHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.13+

Creates and runs a task with a specified executable and arguments.

## Declaration

```swift
class func run(_ url: URL, arguments: [String], terminationHandler: (@Sendable (Process) -> Void)? = nil) throws -> Process
```

## Parameters

- `url`: The URL for the executable.
- `arguments`: An array of `NSString` objects that supplies the arguments to the task. If `arguments` is `nil`, the system raises an `NSInvalidArgumentException`.
- `terminationHandler`: The system invokes this completion block when the task has completed.

<a id="return-value"></a>

## Return Value

An initialized `NSTask` object with the environment of the current process.

## See Also

### Creating and initializing a process

- [init()](init%28%29.md): Returns an initialized process object with the environment of the current process.

# launchedTaskWithExecutableURL:arguments:error:terminationHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.13+

Creates and runs a task with a specified executable and arguments.

## Declaration

```objectivec
+ (NSTask *) launchedTaskWithExecutableURL:(NSURL *) url arguments:(NSArray<NSString *> *) arguments error:(NSError **) error terminationHandler:(void (^)(NSTask *)) terminationHandler;
```

## Parameters

- `url`: The URL for the executable.
- `arguments`: An array of `NSString` objects that supplies the arguments to the task. If `arguments` is `nil`, the system raises an `NSInvalidArgumentException`.
- `error`: The system invokes this completion block when the task has completed.
- `terminationHandler`: The system invokes this completion block when the task has completed.

<a id="return-value"></a>

## Return Value

An initialized `NSTask` object with the environment of the current process.

## See Also

### Creating and initializing a process

- [init](init%28%29.md): Returns an initialized process object with the environment of the current process.

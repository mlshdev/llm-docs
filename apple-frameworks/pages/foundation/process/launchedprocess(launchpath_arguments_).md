> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/launchedprocess(launchpath:arguments:)](https://developer.apple.com/documentation/foundation/process/launchedprocess(launchpath:arguments:))

# launchedProcess(launchPath:arguments:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Creates and launches a task with a specified executable and arguments.

> Use [run(\_:arguments:terminationHandler:)](run%28__arguments_terminationhandler_%29.md) instead.

## Declaration

```swift
class func launchedProcess(launchPath path: String, arguments: [String]) -> Process
```

## Parameters

- `path`: The path to the executable.
- `arguments`: An array of `NSString` objects that supplies the arguments to the task. If `arguments` is `nil`, an `NSInvalidArgumentException` is raised.

<a id="return-value"></a>

## Return Value

An initialized `NSTask` object with the supplied `arguments`.

<a id="Discussion"></a>

## Discussion

The task inherits its environment from the process that invokes this method.

The `NSTask` object converts both `path` and the strings in `arguments` to appropriate C-style strings (using [fileSystemRepresentation](../nsstring/filesystemrepresentation.md)) before passing them to the task via `argv[])` . The strings in `arguments` don’t undergo shell expansion, so you don’t need to do special quoting, and shell variables, such as `$PWD`, aren’t resolved.

## See Also

### Related Documentation

- [init()](init%28%29.md): Returns an initialized process object with the environment of the current process.

### Deprecated

- [currentDirectoryPath](currentdirectorypath.md): Deprecated. Sets the current directory for the receiver.
- [launchPath](launchpath.md): Deprecated. Sets the receiver’s executable.
- [launch()](launch%28%29.md): Deprecated. Launches the task represented by the receiver.

# launchedTaskWithLaunchPath:arguments: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Creates and launches a task with a specified executable and arguments.

> Use [launchedTaskWithExecutableURL:arguments:error:terminationHandler:](run%28__arguments_terminationhandler_%29.md) instead.

## Declaration

```objectivec
+ (NSTask *) launchedTaskWithLaunchPath:(NSString *) path arguments:(NSArray<NSString *> *) arguments;
```

## Parameters

- `path`: The path to the executable.
- `arguments`: An array of `NSString` objects that supplies the arguments to the task. If `arguments` is `nil`, an `NSInvalidArgumentException` is raised.

<a id="return-value"></a>

## Return Value

An initialized `NSTask` object with the supplied `arguments`.

<a id="Discussion"></a>

## Discussion

The task inherits its environment from the process that invokes this method.

The `NSTask` object converts both `path` and the strings in `arguments` to appropriate C-style strings (using [fileSystemRepresentation](../nsstring/filesystemrepresentation.md)) before passing them to the task via `argv[])` . The strings in `arguments` don’t undergo shell expansion, so you don’t need to do special quoting, and shell variables, such as `$PWD`, aren’t resolved.

## See Also

### Related Documentation

- [init](init%28%29.md): Returns an initialized process object with the environment of the current process.

### Deprecated

- [currentDirectoryPath](currentdirectorypath.md): Deprecated. Sets the current directory for the receiver.
- [launchPath](launchpath.md): Deprecated. Sets the receiver’s executable.
- [launch](launch%28%29.md): Deprecated. Launches the task represented by the receiver.

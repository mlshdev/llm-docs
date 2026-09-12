> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/standarderror](https://developer.apple.com/documentation/foundation/process/standarderror)

# standardError (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The standard error for the receiver.

## Declaration

```swift
var standardError: Any? { get set }
```

## Parameters

- `file`: The standard error for the receiver, which can be either an [FileHandle](../filehandle.md) or an [Pipe](../pipe.md) object.

<a id="Discussion"></a>

## Discussion

If `file` is an `NSPipe` object, launching the receiver automatically closes the write end of the pipe in the current task. Don’t create a handle for the pipe and pass that as the argument, or the system won’t automatically close the write end of the pipe.

If this method isn’t used, the standard error is inherited from the process that created the receiver. This method raises an `NSInvalidArgumentException` if the system has lauched the receiver.

## See Also

### Configuring a process

- [arguments](arguments.md): The command arguments that the system uses to launch the executable.
- [currentDirectoryURL](currentdirectoryurl.md): The current directory for the receiver.
- [environment](environment.md): The environment for the receiver.
- [executableURL](executableurl.md): The receiver’s executable.
- [qualityOfService](qualityofservice.md): The default quality of service level the system applies to operations the task executes.
- [standardInput](standardinput.md): The standard input for the receiver.
- [standardOutput](standardoutput.md): The standard output for the receiver.

# standardError (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The standard error for the receiver.

## Declaration

```objectivec
@property (retain, nullable) id standardError;
```

## Parameters

- `file`: The standard error for the receiver, which can be either an [NSFileHandle](../filehandle.md) or an [NSPipe](../pipe.md) object.

<a id="Discussion"></a>

## Discussion

If `file` is an `NSPipe` object, launching the receiver automatically closes the write end of the pipe in the current task. Don’t create a handle for the pipe and pass that as the argument, or the system won’t automatically close the write end of the pipe.

If this method isn’t used, the standard error is inherited from the process that created the receiver. This method raises an `NSInvalidArgumentException` if the system has lauched the receiver.

## See Also

### Configuring a process

- [arguments](arguments.md): The command arguments that the system uses to launch the executable.
- [currentDirectoryURL](currentdirectoryurl.md): The current directory for the receiver.
- [environment](environment.md): The environment for the receiver.
- [executableURL](executableurl.md): The receiver’s executable.
- [qualityOfService](qualityofservice.md): The default quality of service level the system applies to operations the task executes.
- [standardInput](standardinput.md): The standard input for the receiver.
- [standardOutput](standardoutput.md): The standard output for the receiver.

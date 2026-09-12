> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/environment](https://developer.apple.com/documentation/foundation/process/environment)

# environment (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The environment for the receiver.

## Declaration

```swift
var environment: [String : String]? { get set }
```

## Parameters

- `environmentDictionary`: A dictionary of environment variable values whose keys are the variable names.

<a id="Discussion"></a>

## Discussion

If this method isn’t used, the environment is inherited from the process that created the receiver. This method raises an `NSInvalidArgumentException` if the system has launched the receiver.

## See Also

### Configuring a process

- [arguments](arguments.md): The command arguments that the system uses to launch the executable.
- [currentDirectoryURL](currentdirectoryurl.md): The current directory for the receiver.
- [executableURL](executableurl.md): The receiver’s executable.
- [qualityOfService](qualityofservice.md): The default quality of service level the system applies to operations the task executes.
- [standardError](standarderror.md): The standard error for the receiver.
- [standardInput](standardinput.md): The standard input for the receiver.
- [standardOutput](standardoutput.md): The standard output for the receiver.

# environment (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The environment for the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,NSString *> * environment;
```

## Parameters

- `environmentDictionary`: A dictionary of environment variable values whose keys are the variable names.

<a id="Discussion"></a>

## Discussion

If this method isn’t used, the environment is inherited from the process that created the receiver. This method raises an `NSInvalidArgumentException` if the system has launched the receiver.

## See Also

### Configuring a process

- [arguments](arguments.md): The command arguments that the system uses to launch the executable.
- [currentDirectoryURL](currentdirectoryurl.md): The current directory for the receiver.
- [executableURL](executableurl.md): The receiver’s executable.
- [qualityOfService](qualityofservice.md): The default quality of service level the system applies to operations the task executes.
- [standardError](standarderror.md): The standard error for the receiver.
- [standardInput](standardinput.md): The standard input for the receiver.
- [standardOutput](standardoutput.md): The standard output for the receiver.

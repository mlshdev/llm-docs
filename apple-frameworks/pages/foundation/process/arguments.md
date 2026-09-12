> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/arguments](https://developer.apple.com/documentation/foundation/process/arguments)

# arguments (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The command arguments that the system uses to launch the executable.

## Declaration

```swift
var arguments: [String]? { get set }
```

## Parameters

- `arguments`: An array of `NSString` objects that supplies the arguments to the task. If `arguments` is `nil`, the system raises an `NSInvalidArgumentException`.

<a id="Discussion"></a>

## Discussion

The `NSTask` object converts both `path` and the strings in `arguments` to appropriate C-style strings (using [fileSystemRepresentation](../nsstring/filesystemrepresentation.md)) before passing them to the task through `argv[]`. The strings in `arguments` don’t undergo shell expansion, so you don’t need to do special quoting, and shell variables, such as `$PWD`, aren’t resolved.

## See Also

### Configuring a process

- [currentDirectoryURL](currentdirectoryurl.md): The current directory for the receiver.
- [environment](environment.md): The environment for the receiver.
- [executableURL](executableurl.md): The receiver’s executable.
- [qualityOfService](qualityofservice.md): The default quality of service level the system applies to operations the task executes.
- [standardError](standarderror.md): The standard error for the receiver.
- [standardInput](standardinput.md): The standard input for the receiver.
- [standardOutput](standardoutput.md): The standard output for the receiver.

# arguments (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The command arguments that the system uses to launch the executable.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * arguments;
```

## Parameters

- `arguments`: An array of `NSString` objects that supplies the arguments to the task. If `arguments` is `nil`, the system raises an `NSInvalidArgumentException`.

<a id="Discussion"></a>

## Discussion

The `NSTask` object converts both `path` and the strings in `arguments` to appropriate C-style strings (using [fileSystemRepresentation](../nsstring/filesystemrepresentation.md)) before passing them to the task through `argv[]`. The strings in `arguments` don’t undergo shell expansion, so you don’t need to do special quoting, and shell variables, such as `$PWD`, aren’t resolved.

## See Also

### Configuring a process

- [currentDirectoryURL](currentdirectoryurl.md): The current directory for the receiver.
- [environment](environment.md): The environment for the receiver.
- [executableURL](executableurl.md): The receiver’s executable.
- [qualityOfService](qualityofservice.md): The default quality of service level the system applies to operations the task executes.
- [standardError](standarderror.md): The standard error for the receiver.
- [standardInput](standardinput.md): The standard input for the receiver.
- [standardOutput](standardoutput.md): The standard output for the receiver.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/execute()](https://developer.apple.com/documentation/foundation/nsscriptcommand/execute())

# execute() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Executes the command if it is valid and returns the result, if any.

## Declaration

```swift
func execute() -> Any?
```

<a id="Discussion"></a>

## Discussion

Before this method executes the command (through `NSInvocation` mechanisms), it evaluates all object specifiers involved in the command, validates that the receivers can actually handle the command, and verifies that the types of any arguments that were initially object specifiers are valid.

You shouldn’t have to override this method. If the command’s receivers want to handle the command themselves, this method invokes their defined handler. Otherwise, it invokes [performDefaultImplementation()](performdefaultimplementation%28%29.md).

## See Also

### Related Documentation

- [evaluatedReceivers](evaluatedreceivers.md): Returns the object or objects to which the command is to be sent (called both the “receivers” or “targets” of script commands).
- [evaluatedArguments](evaluatedarguments.md): Returns a dictionary containing the arguments of the command, evaluated from object specifiers to objects if necessary. The keys in the dictionary are the argument names.

### Executing the command

- [performDefaultImplementation()](performdefaultimplementation%28%29.md): Overridden by subclasses to provide a default implementation for the command represented by the receiver.

# executeCommand (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Executes the command if it is valid and returns the result, if any.

## Declaration

```objectivec
- (id) executeCommand;
```

<a id="Discussion"></a>

## Discussion

Before this method executes the command (through `NSInvocation` mechanisms), it evaluates all object specifiers involved in the command, validates that the receivers can actually handle the command, and verifies that the types of any arguments that were initially object specifiers are valid.

You shouldn’t have to override this method. If the command’s receivers want to handle the command themselves, this method invokes their defined handler. Otherwise, it invokes [performDefaultImplementation](performdefaultimplementation%28%29.md).

## See Also

### Related Documentation

- [evaluatedReceivers](evaluatedreceivers.md): Returns the object or objects to which the command is to be sent (called both the “receivers” or “targets” of script commands).
- [evaluatedArguments](evaluatedarguments.md): Returns a dictionary containing the arguments of the command, evaluated from object specifiers to objects if necessary. The keys in the dictionary are the argument names.

### Executing the command

- [performDefaultImplementation](performdefaultimplementation%28%29.md): Overridden by subclasses to provide a default implementation for the command represented by the receiver.

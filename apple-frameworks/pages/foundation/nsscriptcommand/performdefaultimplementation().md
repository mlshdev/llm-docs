> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/performdefaultimplementation()](https://developer.apple.com/documentation/foundation/nsscriptcommand/performdefaultimplementation())

# performDefaultImplementation() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to provide a default implementation for the command represented by the receiver.

## Declaration

```swift
func performDefaultImplementation() -> Any?
```

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly. [execute()](execute%28%29.md) invokes this method when the command being executed is not supported by the class of the objects receiving the command. The default implementation returns `nil`.

You need to create a subclass of `NSScriptCommand` only if you need to provide a default implementation of a command.

## See Also

### Executing the command

- [execute()](execute%28%29.md): Executes the command if it is valid and returns the result, if any.

# performDefaultImplementation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to provide a default implementation for the command represented by the receiver.

## Declaration

```objectivec
- (id) performDefaultImplementation;
```

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly. [executeCommand](execute%28%29.md) invokes this method when the command being executed is not supported by the class of the objects receiving the command. The default implementation returns `nil`.

You need to create a subclass of `NSScriptCommand` only if you need to provide a default implementation of a command.

## See Also

### Executing the command

- [executeCommand](execute%28%29.md): Executes the command if it is valid and returns the result, if any.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsapplescript/executeappleevent(_:error:)](https://developer.apple.com/documentation/foundation/nsapplescript/executeappleevent(_:error:))

# executeAppleEvent(\_:error:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Executes an Apple event in the context of the receiver, as a means of allowing the application to invoke a handler in the script.

## Declaration

```swift
func executeAppleEvent(_ event: NSAppleEventDescriptor, error errorInfo: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) -> NSAppleEventDescriptor
```

## Parameters

- `event`: The Apple event to execute.
- `errorInfo`: On return, if an error occurs, a pointer to an error information dictionary.

<a id="return-value"></a>

## Return Value

The result of executing the event, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

Compiles the receiver before executing it if it is not already compiled.

> **Important**

>  You cannot use this method to send Apple events to other applications.

## See Also

### Compiling and Executing a Script

- [compileAndReturnError(\_:)](compileandreturnerror%28__%29.md): Compiles the receiver, if it is not already compiled.
- [executeAndReturnError(\_:)](executeandreturnerror%28__%29.md): Executes the receiver, compiling it first if it is not already compiled.

# executeAppleEvent:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Executes an Apple event in the context of the receiver, as a means of allowing the application to invoke a handler in the script.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) executeAppleEvent:(NSAppleEventDescriptor *) event error:(NSDictionary<NSString *,id> **) errorInfo;
```

## Parameters

- `event`: The Apple event to execute.
- `errorInfo`: On return, if an error occurs, a pointer to an error information dictionary.

<a id="return-value"></a>

## Return Value

The result of executing the event, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

Compiles the receiver before executing it if it is not already compiled.

> **Important**

>  You cannot use this method to send Apple events to other applications.

## See Also

### Compiling and Executing a Script

- [compileAndReturnError:](compileandreturnerror%28__%29.md): Compiles the receiver, if it is not already compiled.
- [executeAndReturnError:](executeandreturnerror%28__%29.md): Executes the receiver, compiling it first if it is not already compiled.

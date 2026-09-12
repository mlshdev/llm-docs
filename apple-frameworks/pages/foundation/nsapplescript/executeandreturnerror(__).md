> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsapplescript/executeandreturnerror(_:)](https://developer.apple.com/documentation/foundation/nsapplescript/executeandreturnerror(_:))

# executeAndReturnError(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Executes the receiver, compiling it first if it is not already compiled.

## Declaration

```swift
func executeAndReturnError(_ errorInfo: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) -> NSAppleEventDescriptor
```

## Parameters

- `errorInfo`: On return, if an error occurs, a pointer to an error information dictionary.

<a id="return-value"></a>

## Return Value

The result of executing the event, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

Any changes to property values caused by executing the script do not persist.

## See Also

### Compiling and Executing a Script

- [compileAndReturnError(\_:)](compileandreturnerror%28__%29.md): Compiles the receiver, if it is not already compiled.
- [executeAppleEvent(\_:error:)](executeappleevent%28__error_%29.md): Executes an Apple event in the context of the receiver, as a means of allowing the application to invoke a handler in the script.

# executeAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Executes the receiver, compiling it first if it is not already compiled.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) executeAndReturnError:(NSDictionary<NSString *,id> **) errorInfo;
```

## Parameters

- `errorInfo`: On return, if an error occurs, a pointer to an error information dictionary.

<a id="return-value"></a>

## Return Value

The result of executing the event, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

Any changes to property values caused by executing the script do not persist.

## See Also

### Compiling and Executing a Script

- [compileAndReturnError:](compileandreturnerror%28__%29.md): Compiles the receiver, if it is not already compiled.
- [executeAppleEvent:error:](executeappleevent%28__error_%29.md): Executes an Apple event in the context of the receiver, as a means of allowing the application to invoke a handler in the script.

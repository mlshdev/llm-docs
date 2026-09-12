> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsapplescript/compileandreturnerror(_:)](https://developer.apple.com/documentation/foundation/nsapplescript/compileandreturnerror(_:))

# compileAndReturnError(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Compiles the receiver, if it is not already compiled.

## Declaration

```swift
func compileAndReturnError(_ errorInfo: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) -> Bool
```

## Parameters

- `errorInfo`: On return, if an error occurs, a pointer to an error information dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) for success or if the script was already compiled, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Compiling and Executing a Script

- [executeAndReturnError(\_:)](executeandreturnerror%28__%29.md): Executes the receiver, compiling it first if it is not already compiled.
- [executeAppleEvent(\_:error:)](executeappleevent%28__error_%29.md): Executes an Apple event in the context of the receiver, as a means of allowing the application to invoke a handler in the script.

# compileAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Compiles the receiver, if it is not already compiled.

## Declaration

```objectivec
- (BOOL) compileAndReturnError:(NSDictionary<NSString *,id> **) errorInfo;
```

## Parameters

- `errorInfo`: On return, if an error occurs, a pointer to an error information dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) for success or if the script was already compiled, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Compiling and Executing a Script

- [executeAndReturnError:](executeandreturnerror%28__%29.md): Executes the receiver, compiling it first if it is not already compiled.
- [executeAppleEvent:error:](executeappleevent%28__error_%29.md): Executes an Apple event in the context of the receiver, as a means of allowing the application to invoke a handler in the script.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/loadandreturnerror()](https://developer.apple.com/documentation/foundation/bundle/loadandreturnerror())

# loadAndReturnError() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads the bundle’s executable code and returns any errors.

## Declaration

```swift
func loadAndReturnError() throws
```

<a id="Discussion"></a>

## Discussion

If this method returns [false](https://developer.apple.com/documentation/swift/false) and you pass a value for the `error` parameter, a suitable error object is returned in that parameter. Potential errors returned are in the Cocoa error domain and include the types that follow. For a full list of error types, see `FoundationErrors.h`.

- `NSFileNoSuchFileError` \- returned if the bundle’s executable file was not located.
- `NSExecutableNotLoadableError` \- returned if the bundle’s executable file exists but could not be loaded. This error is returned if the executable is not recognized as a loadable executable. It can also be returned if the executable is a PEF/CFM executable but the current process does not support that type of executable.
- `NSExecutableArchitectureMismatchError` \- returned if the bundle executable does not include code that matches the processor architecture of the current processor.
- `NSExecutableRuntimeMismatchError` \- returned if the bundle’s required Objective-C runtime information is not compatible with the runtime of the current process.
- `NSExecutableLoadError` \- returned if the bundle’s executable failed to load for some detectable reason prior to linking. This error might occur if the bundle depends on a framework or library that is missing or if the required framework or library is not compatible with the current architecture or runtime version.
- `NSExecutableLinkError` \- returned if the executable failed to load due to link errors but is otherwise alright.

The error object may contain additional debugging information in its description that you can use to identify the cause of the error. (This debugging information should not be displayed to the user.) You can obtain the debugging information by invoking the error object’s `description` method in your code or by using the `print-object` command on the error object in gdb.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Loading code from a bundle

- [executableArchitectures](executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [preflight()](preflight%28%29.md): Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.
- [load()](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [unload()](unload%28%29.md): Unloads the code associated with the receiver.
- [isLoaded](isloaded.md): The load status of a bundle.
- [Mach-O Architecture](../1495005-mach-o-architecture.md): Constants that describe the CPU types that a bundle’s executable code supports.

# loadAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads the bundle’s executable code and returns any errors.

## Declaration

```objectivec
- (BOOL) loadAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On input, a pointer to an error object variable. On output, this variable may contain an error object indicating why the bundle’s executable could not be loaded. If no error occurred, this parameter is left unmodified. You may specify `nil` for this parameter if you are not interested in the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the bundle’s executable code was loaded successfully or was already loaded; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the code could not be loaded.

<a id="Discussion"></a>

## Discussion

If this method returns [false](https://developer.apple.com/documentation/swift/false) and you pass a value for the `error` parameter, a suitable error object is returned in that parameter. Potential errors returned are in the Cocoa error domain and include the types that follow. For a full list of error types, see `FoundationErrors.h`.

- `NSFileNoSuchFileError` \- returned if the bundle’s executable file was not located.
- `NSExecutableNotLoadableError` \- returned if the bundle’s executable file exists but could not be loaded. This error is returned if the executable is not recognized as a loadable executable. It can also be returned if the executable is a PEF/CFM executable but the current process does not support that type of executable.
- `NSExecutableArchitectureMismatchError` \- returned if the bundle executable does not include code that matches the processor architecture of the current processor.
- `NSExecutableRuntimeMismatchError` \- returned if the bundle’s required Objective-C runtime information is not compatible with the runtime of the current process.
- `NSExecutableLoadError` \- returned if the bundle’s executable failed to load for some detectable reason prior to linking. This error might occur if the bundle depends on a framework or library that is missing or if the required framework or library is not compatible with the current architecture or runtime version.
- `NSExecutableLinkError` \- returned if the executable failed to load due to link errors but is otherwise alright.

The error object may contain additional debugging information in its description that you can use to identify the cause of the error. (This debugging information should not be displayed to the user.) You can obtain the debugging information by invoking the error object’s `description` method in your code or by using the `print-object` command on the error object in gdb.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Loading code from a bundle

- [executableArchitectures](executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [preflightAndReturnError:](preflight%28%29.md): Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.
- [load](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [unload](unload%28%29.md): Unloads the code associated with the receiver.
- [loaded](isloaded.md): The load status of a bundle.
- [Mach-O Architecture](../1495005-mach-o-architecture.md): Constants that describe the CPU types that a bundle’s executable code supports.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/preflight()](https://developer.apple.com/documentation/foundation/bundle/preflight())

# preflight() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.

## Declaration

```swift
func preflight() throws
```

<a id="Discussion"></a>

## Discussion

This method does not actually load the bundle’s executable code. Instead, it performs several checks to see if the code could be loaded and with one exception returns the same errors that would occur during an actual load operation. The one exception is the `NSExecutableLinkError` error, which requires the actual loading of the code to verify link errors.

For a list of possible load errors, see the discussion for the [loadAndReturnError()](loadandreturnerror%28%29.md) method.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Loading code from a bundle

- [executableArchitectures](executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [load()](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [loadAndReturnError()](loadandreturnerror%28%29.md): Loads the bundle’s executable code and returns any errors.
- [unload()](unload%28%29.md): Unloads the code associated with the receiver.
- [isLoaded](isloaded.md): The load status of a bundle.
- [Mach-O Architecture](../1495005-mach-o-architecture.md): Constants that describe the CPU types that a bundle’s executable code supports.

# preflightAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.

## Declaration

```objectivec
- (BOOL) preflightAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On input, a pointer to an error object variable. On output, this variable may contain an error object indicating why the bundle’s executable could not be loaded. If no error would occur, this parameter is left unmodified. You may specify `nil` for this parameter if you are not interested in the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the bundle’s executable code could be loaded successfully or is already loaded; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the code could not be loaded.

<a id="Discussion"></a>

## Discussion

This method does not actually load the bundle’s executable code. Instead, it performs several checks to see if the code could be loaded and with one exception returns the same errors that would occur during an actual load operation. The one exception is the `NSExecutableLinkError` error, which requires the actual loading of the code to verify link errors.

For a list of possible load errors, see the discussion for the [loadAndReturnError:](loadandreturnerror%28%29.md) method.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Loading code from a bundle

- [executableArchitectures](executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [load](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [loadAndReturnError:](loadandreturnerror%28%29.md): Loads the bundle’s executable code and returns any errors.
- [unload](unload%28%29.md): Unloads the code associated with the receiver.
- [loaded](isloaded.md): The load status of a bundle.
- [Mach-O Architecture](../1495005-mach-o-architecture.md): Constants that describe the CPU types that a bundle’s executable code supports.

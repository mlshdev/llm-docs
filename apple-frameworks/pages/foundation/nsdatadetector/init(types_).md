> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatadetector/init(types:)](https://developer.apple.com/documentation/foundation/nsdatadetector/init(types:))

# init(types:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a data detector instance.

## Declaration

```swift
init(types checkingTypes: NSTextCheckingTypes) throws
```

## Parameters

- `checkingTypes`: The checking types. The supported checking types are a subset of the types [NSTextCheckingResult.CheckingType](../nstextcheckingresult/checkingtype.md). Those constants can be combined using the C-bitwise OR operator.

<a id="return-value"></a>

## Return Value

Returns the newly initialized data detector. If an error was encountered returns `nil`, and `error` contains the error.

<a id="Discussion"></a>

## Discussion

Currently, the supported data detectors `checkingTypes` are:  [date](../nstextcheckingresult/checkingtype/date.md), [address](../nstextcheckingresult/checkingtype/address.md), [link](../nstextcheckingresult/checkingtype/link.md), `NSTextCheckingTypePhoneNumber`, and `NSTextCheckingTypeTransitInformation`.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [checkingTypes](checkingtypes.md): Returns the checking types for the data detector.

# initWithTypes:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a data detector instance.

## Declaration

```objectivec
- (instancetype) initWithTypes:(NSTextCheckingTypes) checkingTypes error:(NSError **) error;
```

## Parameters

- `checkingTypes`: The checking types. The supported checking types are a subset of the types [NSTextCheckingType](../nstextcheckingresult/checkingtype.md). Those constants can be combined using the C-bitwise OR operator.
- `error`: An out parameter that if an error occurs during initialization contains the encountered error.

<a id="return-value"></a>

## Return Value

Returns the newly initialized data detector. If an error was encountered returns `nil`, and `error` contains the error.

<a id="Discussion"></a>

## Discussion

Currently, the supported data detectors `checkingTypes` are:  [NSTextCheckingTypeDate](../nstextcheckingresult/checkingtype/date.md), [NSTextCheckingTypeAddress](../nstextcheckingresult/checkingtype/address.md), [NSTextCheckingTypeLink](../nstextcheckingresult/checkingtype/link.md), `NSTextCheckingTypePhoneNumber`, and `NSTextCheckingTypeTransitInformation`.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [checkingTypes](checkingtypes.md): Returns the checking types for the data detector.
- [dataDetectorWithTypes:error:](datadetectorwithtypes_error_.md): Creates and returns a new data detector instance.

### Creating data detector instances

- [dataDetectorWithTypes:error:](datadetectorwithtypes_error_.md): Creates and returns a new data detector instance.
